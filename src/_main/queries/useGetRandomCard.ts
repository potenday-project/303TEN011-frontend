import { useQuery } from "@tanstack/react-query";
import { GetCardData } from "@/@shared/types/cardTypes";
import api from "@/@shared/utils/api";

const getRandomCard = async () => {
  const { data } = await api.get<GetCardData>("/api/archives/random");

  return data;
};

const useGetRandomCard = () => {
  return useQuery(["random"], getRandomCard);
};

export default useGetRandomCard;
