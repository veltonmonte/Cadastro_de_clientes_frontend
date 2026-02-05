import axios, { type AxiosPromise } from "axios"
import type { CadastroData } from "../interface/CadastroData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<CadastroData[]> => {
    const response = axios.get(API_URL+'/cadastros');
    return response;
}

export function useCadastroData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['cadastro-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}