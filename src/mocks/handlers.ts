import { rest } from "msw";

export const handlers = [
  rest.get("/login", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        result: { id: 1, userId: "kakao@kakao.com", nickname: "테스트" },
        message: "Success",
        ok: true,
      }),
    );
  }),
];
