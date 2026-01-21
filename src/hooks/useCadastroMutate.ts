import axios from "axios"
import type { CadastroData } from "../interface/CadastroData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const postData = async (data: CadastroData) => {
    const response = await axios.post(API_URL + '/Cadastros', data);
    return response.data;
}

export function useCadastroDataMutate(){
    const queryClient = useQueryClient();
    const { mutate } = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cadastro-data'] });
        }
    })

    return { mutate }
}