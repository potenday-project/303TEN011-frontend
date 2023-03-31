import { rest } from "msw";

const archive: any[] = [];

export const handlers = [
  rest.get("/api/archives", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(archive));
  }),

  rest.post("/api/archives", (req, res, ctx) => {
    archive.push(req.body);
    return res(ctx.status(201));
  }),
];
