import { getRandomCard } from "@/apis/api";
import { useQuery } from "@tanstack/react-query";

const useGetRandomCard = () => {
  return useQuery(["random"], getRandomCard);
};

export default useGetRandomCard;
