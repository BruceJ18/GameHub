import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, {FetchedDataResponse} from "../services/api-client";

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => 
    useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 1000 * 60 * 60,
    initialData: genres
    
});


export default useGenres;