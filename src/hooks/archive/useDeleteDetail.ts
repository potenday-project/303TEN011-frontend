import { deleteDetail } from "@/apis/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useDeleteDetail = () => {
  const { query, replace } = useRouter();
  const archiveId = Number(query.id);

  return useMutation(() => deleteDetail(archiveId), {
    onSuccess: () => {
      replace("/archive");
    },
  });
};

export default useDeleteDetail;
