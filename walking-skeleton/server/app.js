import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";
// importing database client
import postgres from "postgres";

const app = new Hono();
// creating an instance of the database client
const sql = postgres();

app.use("/*", cors());
app.use("/*", logger());

let visits = 0;
app.get("/api/visits", (c) => {
  visits++;
  return c.json({ visits });
});

// retrieving todos from database on requests to /api/todos
app.get("/api/todos", async (c) => {
  const todos = await sql`SELECT * FROM todos`;
  return c.json(todos);
});

export default app;