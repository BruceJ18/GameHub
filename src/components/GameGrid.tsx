import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchedGames {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  // we need a state variable for storing our game objects
  const [games, setGames] = useState<Game[]>([]);
  // we need a state variable for storing our errors if api request fails
  const [error, setError] = useState("");

  // send fetch request to the "back-end"
  useEffect(() => {
    apiClient
      .get<FetchedGames>("/xgames")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
