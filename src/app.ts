import { Hono } from "hono";
import { logger } from "hono/logger";
import { swaggerUI } from "@hono/swagger-ui";
import { jwt } from "hono/jwt";
const app = new Hono();
app.use(logger());
app.use("/auth/*", (c, next) => {
  const jwtMiddleware = jwt({
    secret: process.env.JWT_SECRET || "secret",
  });
  return jwtMiddleware(c, next);
});
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

app.use(
  swaggerUI({
    url: "/doc",
  })
);

export { app };
