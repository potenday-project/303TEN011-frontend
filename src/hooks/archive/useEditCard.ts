import { editDetail } from "@/apis/api";
import { useEditState, useWriteState } from "@/store/useWriteStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useEditCard = () => {
  const { replace } = useRouter();

  const cardData = useWriteState();
  const { editNumber } = useEditState();

  return useMutation(() => editDetail(cardData, editNumber), {
    onSuccess: (data) => {
      replace(`/archive/${data.archiveId}`);
    },
  });
};

export default useEditCard;
