import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

api.interceptors.request.use((config) => {
  const token = getCookie("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;

export interface CardData {
  title: string;
  author: string;
  content: string;
  thumbnail: string;
  backgroundColor: string;
  imageSize: string;
  fontStyle: string;
  fontColor: string;
}

interface GetCardData extends CardData {
  id: number;
  createdDt: string;
  modifiedDt: string;
}

interface Pageable {
  first: boolean;
  hasNext: boolean;
  last: boolean;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

interface LoginData {
  email: string;
  nickname: string;
  token: string;
}

interface RitualData {
  totalBookCount: number;
  totalArchiveCount: number;
  continuityPostDat: number;
}

export const kakaoLogin = async (code: string) => {
  const { data } = await api.get<LoginData>("/oauth/kakao/redirect", { params: { code } });

  setCookie("token", data.token);
  setCookie("nickname", data.nickname);
};

export const getRitual = async () => {
  const { data } = await api.get<RitualData>("/api/user/my-ritual");

  return data;
};

export const getArchive = async ({ pageParam = 1 }) => {
  const { data } = await api.get<{ content: GetCardData[]; pageableCustom: Pageable }>(
    "/api/archives",
    { params: { page: pageParam } },
  );

  return { data: data.content, nextPage: pageParam + 1, isLastPage: !data.pageableCustom.hasNext };
};

export const getDetail = async (archiveId: number) => {
  const { data } = await api.get<GetCardData>(`/api/archives/${archiveId}`);

  return data;
};

export const deleteDetail = async (archiveId: number) => {
  await api.delete(`/api/archives/${archiveId}`);
};

export const postCard = async (cardData: CardData) => {
  const { data } = await api.post("/api/archives", cardData);

  return data;
};
