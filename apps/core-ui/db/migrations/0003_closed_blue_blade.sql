CREATE TABLE IF NOT EXISTS "users_pro" (
	"user_id" uuid PRIMARY KEY NOT NULL,
	"profession_type" varchar(100) NOT NULL,
	"specialization" varchar(150),
	"business_name" varchar(255),
	"vat_number" varchar(50),
	"address" varchar(255),
	"city" varchar(100),
	"region" varchar(100),
	"cap" varchar(20),
	"website" varchar(255),
	"license_number" varchar(100),
	"license_country" varchar(100),
	"license_verified" boolean DEFAULT false,
	"profile_image_url" text,
	"approved_by_admin" boolean DEFAULT false,
	"eterna_section" varchar(100)
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_pro" ADD CONSTRAINT "users_pro_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
