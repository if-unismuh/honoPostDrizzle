-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
DO $$ BEGIN
 CREATE TYPE "dev"."jenis_kelamin" AS ENUM('L', 'P');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "dev"."status_kawin" AS ENUM('B', 'K', 'CM', 'CH');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."jenis_kelamin" AS ENUM('L', 'P');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."status_kawin" AS ENUM('B', 'K', 'CM', 'CH');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/