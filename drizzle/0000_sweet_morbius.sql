CREATE TABLE "draw2dev" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "draw2dev_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"uid" varchar,
	"imageUrl" varchar,
	"model" varchar,
	"description" varchar,
	"code" json,
	"createdBy" varchar
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"credits" integer DEFAULT 0,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
