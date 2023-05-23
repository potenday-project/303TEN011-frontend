import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { GetCardData } from "@/@shared/types/cardTypes";
import api from "@/@shared/utils/api";

const getDetail = async (archiveId: number) => {
  const { data } = await api.get<GetCardData>(`/api/archives/${archiveId}`);

  return data;
};

const useGetDetail = () => {
  const { query } = useRouter();
  const archiveId = Number(query.id);

  return useQuery(["archive", archiveId], () => getDetail(archiveId), { enabled: !!archiveId });
};

export default useGetDetail;
