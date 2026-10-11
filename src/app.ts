import { Hono } from "hono";
import { logger } from "hono/logger"
import { compress } from "hono/compress"

const app = new Hono();

app.use("*", logger())

app.use("*", compress({
  encoding: "gzip"
}))

export default app;
