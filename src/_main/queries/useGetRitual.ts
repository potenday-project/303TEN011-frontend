import { useQuery } from "@tanstack/react-query";
import api from "@/@shared/utils/api";

interface TGetRitualData {
  totalBookCount: number;
  totalArchiveCount: number;
  continuityPostDay: number;
}

const getRitual = async () => {
  const { data } = await api.get<TGetRitualData>("/api/user/my-ritual");

  return data;
};

const useGetRitual = () => {
  return useQuery(["ritual"], getRitual);
};

export default useGetRitual;
