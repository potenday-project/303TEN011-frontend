import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

import { postCard } from "@/apis/api";
import { useWriteActions, useWriteState } from "@/store/useWriteStore";

const usePostCard = () => {
  const { replace } = useRouter();
  const cardData = useWriteState();
  const { clearData } = useWriteActions();

  return useMutation(() => postCard(cardData), {
    onSuccess: (data) => {
      replace(`/archive/${data.archiveId}`);
      clearData();
    },
  });
};

export default usePostCard;
