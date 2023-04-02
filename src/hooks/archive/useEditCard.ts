import { editDetail } from "@/apis/api";
import { useEditState, useWriteActions, useWriteState } from "@/store/useWriteStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useEditCard = () => {
  const { replace } = useRouter();

  const cardData = useWriteState();
  const { editNumber } = useEditState();
  const { clearData } = useWriteActions();

  return useMutation(() => editDetail(cardData, editNumber), {
    onSuccess: (data) => {
      replace(`/archive/${data.archiveId}`);
      clearData();
    },
  });
};

export default useEditCard;
