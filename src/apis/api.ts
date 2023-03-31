import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
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

export const getArchive = async () => {
  const { data } = await api.get<CardData[]>("/api/archives");

  return data;
};

export const postCard = async (cardData: CardData) => {
  const { data } = await api.post("/api/archives", cardData);

  return data;
};
