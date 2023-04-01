import { rest } from "msw";

const archive: any[] = [
  {
    author: "오 헨리",
    backgroundColor: "template-flower",
    content: "d\nd\nd\nd\nd\nd",
    fontColor: "text-white",
    fontStyle: "font-bookk",
    imageSize: "aspect-square",
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F494113%3Ftimestamp%3D20220410082323",
    title: "마지막 잎새(프리미엄 세계 명작선 18)(양장본 HardCover)",
  },
  {
    author: "남문희, 김요나, 김경자, 김경희, 김수은, 김혜숙 배두이 성경자 장미경 한지은",
    backgroundColor: "#b1cde7",
    content:
      "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ\nㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ\nㅇㅇㅇㅇㅇㅇㅇ\nㅇㅇㅇㅇㄴㄹㄴㄹㄴㄹㄴㄹㄴㄹㄴㄹㄴ\nㅇㅇㅇ",
    fontColor: "text-black",
    fontStyle: "font-pretendard",
    imageSize: "aspect-long",
    thumbnail:
      "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5222793%3Ftimestamp%3D20221107223048",
    title: "간호역사와 철학",
  },
];

export const handlers = [
  rest.get("/api/archives", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(archive));
  }),

  rest.post("/api/archives", (req, res, ctx) => {
    archive.push(req.body);
    return res(ctx.status(201));
  }),
];
