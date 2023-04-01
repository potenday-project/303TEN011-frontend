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

export const getArchive = async () => {
  const { data } = await api.get<CardData[]>("/api/archives");

  return data;
};

export const postCard = async (cardData: CardData) => {
  const { data } = await api.post("/api/archives", cardData);

  return data;
};
