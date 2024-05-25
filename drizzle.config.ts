import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema.ts",
  dbCredentials: {
    host: "kamusbugis.unismuh.ac.id",
    port: 5401,
    user: "postgres",
    password: "ifbumm",
    database: "bumm",
  },
  verbose: true,
  strict: true,
});
