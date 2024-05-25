import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  username: varchar("username", { length: 20 }).notNull(),
  password: varchar("password", { length: 150 }).notNull(),
  role: varchar("role", { length: 10 }).notNull(),
  created_at: timestamp("created_at", { mode: "string" }).defaultNow(),
  updated_at: timestamp("updated_at", { mode: "string" }).defaultNow(),
});

export const mhs = pgTable("mahasiswa", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  nim: varchar("nim", { length: 15 }),
  nama: varchar("nama", { length: 100 }),
  prodi: varchar("prodi", { length: 10 }),
  created_at: timestamp("created_at", { mode: "string" }),
  updated_at: timestamp("updated_at", { mode: "string" }),
});
