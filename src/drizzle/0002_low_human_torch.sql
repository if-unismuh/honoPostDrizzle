ALTER TABLE "user" ADD COLUMN "username" varchar(20) NOT NULL;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "usernmae";