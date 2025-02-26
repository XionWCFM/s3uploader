import { Hono } from "hono";
import { env } from "hono/adapter";

const app = new Hono();

app.get("/", (c) => {
  return c.json(`${env(c).AWS_ACCESS_KEY}`);
});

export default app;
