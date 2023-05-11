import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatfrom";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  

  const heading = `${platform?.name || " "} ${genre?.name || ""}`;

  return (
    <Heading fontSize="5xl" as="h1">
      {heading} Games
    </Heading>
  );
};

export default GameHeading;
