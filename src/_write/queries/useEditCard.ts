import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

import type { PostCardData } from "@/@shared/types/cardTypes";
import api from "@/@shared/utils/api";
import { useEditState, useWriteActions, useWriteState } from "@/store/useWriteStore";

export const editCard = async (cardData: PostCardData, archiveId: number) => {
  const { data } = await api.patch(`/api/archives/${archiveId}`, cardData);

  return data;
};

const useEditCard = () => {
  const { replace } = useRouter();

  const { editNumber } = useEditState();
  const cardData = useWriteState();
  const { clearData } = useWriteActions();

  return useMutation(() => editCard(cardData, editNumber), {
    onSuccess: (data) => {
      replace(`/archive/${data.archiveId}`).then(() => clearData());
    },
  });
};

export default useEditCard;
