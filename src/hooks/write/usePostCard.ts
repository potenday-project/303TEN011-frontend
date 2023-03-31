import { postCard } from "@/apis/api";
import { useWriteState } from "@/store/useWriteStore";
import { useMutation } from "@tanstack/react-query";

const usePostCard = () => {
  const cardData = useWriteState();

  return useMutation(() => postCard({ ...cardData }));
};

export default usePostCard;
