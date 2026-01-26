import axios from "axios"
import type { CadastroData } from "../interface/CadastroData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const postData = async (data: CadastroData) => {
    const response = await axios.post(API_URL + '/Cadastro', data);
    return response.data;
}

export function useCadastroDataMutate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cadastro-data'] });
    }
  });
}
