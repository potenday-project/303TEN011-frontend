import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { getDetail } from "@/apis/api";

const useGetDetail = () => {
  const { query } = useRouter();
  const archiveId = Number(query.id);

  return useQuery(["archive", archiveId], () => getDetail(archiveId), { enabled: !!archiveId });
};

export default useGetDetail;
