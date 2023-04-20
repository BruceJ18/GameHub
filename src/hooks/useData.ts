import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useState, useEffect } from "react";


interface FetchedDataResponse<T> {
    count: number;
    results: T[];
}


const useData = <T>(endpoint: string) => {
    const [dataArray, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const contoller = new AbortController();

        setLoading(true);
        apiClient
        .get<FetchedDataResponse<T>>(endpoint, {signal: contoller.signal})
        .then(res => {
            setData(res.data.results);
            setLoading(false);
        })
        .catch(err => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        })

        return () => contoller.abort();

    }, []);

    return {dataArray, error, isLoading};

}


export default useData;