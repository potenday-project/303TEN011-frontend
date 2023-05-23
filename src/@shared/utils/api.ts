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

interface GetLoginData {
  email: string;
  nickname: string;
  token: string;
}

export const kakaoLogin = async (code: string) => {
  const { data } = await api.get<GetLoginData>("/oauth/kakao/redirect", { params: { code } });

  setCookie("token", data.token);
  setCookie("nickname", data.nickname);
};
