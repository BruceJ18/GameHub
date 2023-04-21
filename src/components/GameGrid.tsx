import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { useState } from "react";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";


interface Props {
  selectedGenre: Genre | null;
}


const GameGrid = ({selectedGenre} : Props) => {
  const { dataArray, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {dataArray.map((data) => (
          <GameCardContainer key={data.id}>
            <GameCard  game={data} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
