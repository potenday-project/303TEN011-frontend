import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

import { postCard } from "@/apis/api";
import { useWriteState } from "@/store/useWriteStore";

const usePostCard = () => {
  const { replace } = useRouter();
  const cardData = useWriteState();

  return useMutation(() => postCard(cardData), {
    onSuccess: (data) => {
      replace(`/archive/${data.archiveId}`);
    },
  });
};

export default usePostCard;
