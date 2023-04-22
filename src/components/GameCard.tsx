import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game, Platform } from "../hooks/useGames"
import Plt_nameToIcon from "./Plt_nameToIcon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/images-url";


interface Props {
    game: Game;
    selectedPlatform: Platform | null;
}

const GameCard = ( {selectedPlatform, game }: Props ) => {


  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>   
            <HStack marginBottom={3} justifyContent={"space-between"}>
                <Plt_nameToIcon selectedPlatform={selectedPlatform} platforms={game.parent_platforms.map( pObject => pObject.platform )}/>
                <CriticScore score={game.metacritic}/>
            </HStack >
            <Heading fontSize='2xl'>{game.name}</Heading>
        </CardBody>
        
    </Card>
  )
}

export default GameCard