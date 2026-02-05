import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface UpdateStatusProps {
  id?: number;
  status: boolean;
}

export function useCadastroUpdate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status }: UpdateStatusProps) => {
      if (!id) return;

      return axios.patch(
        `http://localhost:8080/cadastros/${id}/status`,
        {
          status: status, 
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cadastros"],
      });
    },
  });
}
