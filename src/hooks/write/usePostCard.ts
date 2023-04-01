import { useMutation } from "@tanstack/react-query";

import { postCard } from "@/apis/api";
import { useWriteState } from "@/store/useWriteStore";

const usePostCard = () => {
  const cardData = useWriteState();

  return useMutation(() => postCard(cardData));
};

export default usePostCard;
