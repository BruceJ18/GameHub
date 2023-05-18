import axios, { AxiosRequestConfig } from 'axios';

export interface FetchedDataResponse<T> {
    count: number;
    next: string | null;
    results: T[];

}

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        
        key: '273209b7f0054f31b17085c9bd453e04'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => 
    axiosInstance
    .get<FetchedDataResponse<T>>(this.endpoint, config)
    .then(res => res.data);

    get = (id: string | number) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => res.data);
    }

}

export default APIClient;

