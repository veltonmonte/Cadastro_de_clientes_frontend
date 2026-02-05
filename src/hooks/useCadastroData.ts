import { type AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import type { CadastroData } from "../interface/CadastroData";
import { api } from "../services/api"; // 👈 IMPORTANTE

const fetchData = async (): AxiosPromise<CadastroData[]> => {
  return api.get("/cadastros"); // 👈 USA O AXIOS COM TOKEN
};

export function useCadastroData() {
  const query = useQuery({
    queryKey: ["cadastro-data"],
    queryFn: fetchData,
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
