ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "pin" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "token" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "token" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "version" SET DATA TYPE varchar(20);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "version" SET DEFAULT 'free';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "version" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "seriale_gioiello" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "nome" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "nome" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "cognome" SET DATA TYPE varchar(100);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "cognome" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "updated_at" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "ruolo" varchar(30) DEFAULT 'utente';--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "attivatore_validato" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "nfc_supportato" boolean DEFAULT true;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "registrazione_via_nfc" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "otp" varchar(10);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "otp_scadenza" timestamp;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "verificato_email" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "verificato_telefono" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "ultima_login" timestamp DEFAULT now();