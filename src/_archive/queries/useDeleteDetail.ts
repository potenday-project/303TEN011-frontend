import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

import api from "@/@shared/utils/api";

const deleteDetail = async (archiveId: number) => {
  await api.delete(`/api/archives/${archiveId}`);
};

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
