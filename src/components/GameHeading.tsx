import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);

  const { data: platfroms } = usePlatforms();
  const platfrom = platfroms?.results.find(
    (platfrom) => platfrom.id === gameQuery.platformId
  );

  const heading = `${platfrom?.name || " "} ${genre?.name || ""}`;

  return (
    <Heading fontSize="5xl" as="h1">
      {heading} Games
    </Heading>
  );
};

export default GameHeading;
