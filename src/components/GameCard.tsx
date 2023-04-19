import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames"
import Plt_nameToIcon from "./Plt_nameToIcon";


interface Props {
    game: Game;
}

const GameCard = ( { game }: Props ) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <Plt_nameToIcon platforms={game.parent_platforms.map( pObject => pObject.platform )}/>
        </CardBody>
        
    </Card>
  )
}

export default GameCard