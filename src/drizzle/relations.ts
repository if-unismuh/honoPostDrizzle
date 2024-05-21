import { serial, text, timestamp, pgTable, uuid } from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";
export const user = pgTable("user", {
  id: uuid("id").primaryKey().$default(uuidv4),
  nim: text("nim"),
  email: text("email"),
  password: text("password"),
  role: text("role"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
export default user;

export const mhs = pgTable("mhs", {
  id: uuid("id").default("").primaryKey(),
  nim: text("nim"),
  nama: text("nama"),
  prodi: text("prodi"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
