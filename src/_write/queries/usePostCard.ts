import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

import type { PostCardData } from "@/@shared/types/cardTypes";
import api from "@/@shared/utils/api";
import { useWriteActions, useWriteState } from "@/store/useWriteStore";

export const postCard = async (cardData: PostCardData) => {
  const { data } = await api.post("/api/archives", cardData);

  return data;
};

const usePostCard = () => {
  const { replace } = useRouter();

  const cardData = useWriteState();
  const { clearData } = useWriteActions();

  return useMutation(() => postCard(cardData), {
    onSuccess: (data) => {
      replace(`/archive/${data.archiveId}`).then(() => clearData());
    },
  });
};

export default usePostCard;
