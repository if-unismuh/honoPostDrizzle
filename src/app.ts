import { Hono } from "hono";
import { logger } from "hono/logger";
const app = new Hono();
app.use(logger());
app.notFound((c) => {
  return c.text("Not Found", 404);
});
app.onError((err, c) => {
  console.error(`${err}`);
  return c.text("Custom Error Message", 500);
});
app.get("/", async (c) => {
  return c.text("This backend from devnolife");
});

export { app };
