import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames"
import Plt_nameToIcon from "./Plt_nameToIcon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/images-url";


interface Props {
    game: Game;
}

const GameCard = ( { game }: Props ) => {


  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent={"space-between"}>
                <Plt_nameToIcon platforms={game.parent_platforms.map( pObject => pObject.platform )}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
        
    </Card>
  )
}

export default GameCard