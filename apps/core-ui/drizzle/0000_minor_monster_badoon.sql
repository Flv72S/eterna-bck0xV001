CREATE TABLE IF NOT EXISTS "admin_sections" (
	"id" serial PRIMARY KEY NOT NULL,
	"admin_id" integer,
	"sezione_id" integer,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "eterna_sections" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" varchar(100) NOT NULL,
	"slug" varchar(100) NOT NULL,
	"descrizione" text,
	"stato" varchar(20) DEFAULT 'attivo' NOT NULL,
	"ordine" integer DEFAULT 0 NOT NULL,
	"configurazione" jsonb DEFAULT '{}'::jsonb,
	"colore_primario" varchar(7),
	"colore_secondario" varchar(7),
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "eterna_sections_nome_unique" UNIQUE("nome"),
	CONSTRAINT "eterna_sections_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_pro" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"tipo_professione" varchar(100),
	"specializzazione" varchar(100),
	"nome_attivita" varchar(255),
	"partita_iva" varchar(50),
	"indirizzo" varchar(255),
	"città" varchar(100),
	"regione" varchar(100),
	"cap" varchar(20),
	"licenza" text,
	"sezione_id" integer,
	"approvato_admin" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"pin" varchar(255) NOT NULL,
	"nome" varchar(100),
	"cognome" varchar(100),
	"versione" varchar(50),
	"seriale_gioiello" varchar(255),
	"sezione_id" integer,
	"email_verificata" boolean DEFAULT false,
	"telefono_verificato" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin_sections" ADD CONSTRAINT "admin_sections_admin_id_users_id_fk" FOREIGN KEY ("admin_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "admin_sections" ADD CONSTRAINT "admin_sections_sezione_id_eterna_sections_id_fk" FOREIGN KEY ("sezione_id") REFERENCES "eterna_sections"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_pro" ADD CONSTRAINT "users_pro_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_pro" ADD CONSTRAINT "users_pro_sezione_id_eterna_sections_id_fk" FOREIGN KEY ("sezione_id") REFERENCES "eterna_sections"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_sezione_id_eterna_sections_id_fk" FOREIGN KEY ("sezione_id") REFERENCES "eterna_sections"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
