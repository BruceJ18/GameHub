import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatfrom";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore(select => select.gameQuery.genreId);
  const genre = useGenre(genreId);
  
  const platformId = useGameQueryStore(select => select.gameQuery.platformId);
  const platform = usePlatform(platformId);

  

  const heading = `${platform?.name || " "} ${genre?.name || ""}`;

  return (
    <Heading fontSize="5xl" as="h1">
      {heading} Games
    </Heading>
  );
};

export default GameHeading;
