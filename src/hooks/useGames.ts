import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }
  
  interface FetchedGames {
    count: number;
    results: Game[];
  }

const useGames = () => {
     // we need a state variable for storing our game objects
  const [games, setGames] = useState<Game[]>([]);
  // we need a state variable for storing our errors if api request fails
  const [error, setError] = useState("");

  // send fetch request to the "back-end"
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchedGames>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });

      return () => controller.abort();
  }, []);

  return {games, error};
}


export default useGames;