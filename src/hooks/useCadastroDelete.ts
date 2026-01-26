import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080";

export function useCadastroDelete() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) =>
      axios.delete(`${API_URL}/Cadastro/${id}`),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cadastro-data"],
      });
    },
  });

  return {
    deleteCadastro: mutation.mutate,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
}
