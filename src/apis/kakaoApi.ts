import { BookInfo } from "@/constants/types";
import axios from "axios";

const kakaoApi = axios.create({
  baseURL: "https://dapi.kakao.com/v3/search",
  headers: {
    Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_SEARCH_KEY}`,
  },
});

export default kakaoApi;

type Data = {
  documents: BookInfo[];
  meta: {
    is_end: boolean;
  };
};

type Argument = {
  query: string;
  pageParam: number;
};

export const getSearchBookByQuery = async ({ query, pageParam }: Argument) => {
  const { data } = await kakaoApi.get<Data>("/book", { params: { query, page: pageParam } });

  return {
    data: data.documents,
    nextPage: pageParam + 1,
    isLastPage: data.meta.is_end,
  };
};
