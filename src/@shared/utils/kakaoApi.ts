import axios from "axios";

const kakaoApi = axios.create({
  baseURL: "https://dapi.kakao.com/v3/search",
  headers: {
    Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_SEARCH_KEY}`,
  },
});

export default kakaoApi;
