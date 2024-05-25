CREATE TABLE IF NOT EXISTS "user" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "usernmae" varchar(20) NOT NULL,
  "password" varchar(50) NOT NULL,
  "role" varchar(10) NOT NULL,
  "created_at" timestamp DEFAULT now(),
  "updated_at" timestamp DEFAULT now(),
  CONSTRAINT "user_usernmae_unique" UNIQUE("usernmae")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "mhs" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "nim" varchar(15),
  "nama" varchar(100),
  "prodi" varchar(10),
  "created_at" timestamp,
  "updated_at" timestamp
);
