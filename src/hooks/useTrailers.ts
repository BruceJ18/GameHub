import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIClient from "../services/api-client";


const useTrailers = (gameid: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${gameid}/movies`);
    
    return useQuery({
        queryKey: ['trailers', gameid],
        queryFn: apiClient.getAll
})}

export default useTrailers;