import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game from "../entities/Game";
import Plt_nameToIcon from "./Plt_nameToIcon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/images-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
  selectedPlatformId?: number;
}

const GameCard = ({ selectedPlatformId, game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3} justifyContent={"space-between"}>
          <Plt_nameToIcon
            selectedPlatformId={selectedPlatformId}
            platforms={game.parent_platforms.map((pObject) => pObject.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
