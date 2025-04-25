import { pgTable, serial, text, timestamp, varchar, uuid, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  pin: text('pin').notNull(),
  token: text('token'),
  version: varchar('version', { length: 20 }).default('free'),
  seriale_gioiello: varchar('seriale_gioiello', { length: 100 }),
  nome: varchar('nome', { length: 100 }),
  cognome: varchar('cognome', { length: 100 }),
  ruolo: varchar('ruolo', { length: 30 }).default('utente'),
  attivatore_validato: boolean('attivatore_validato').default(false),
  nfc_supportato: boolean('nfc_supportato').default(true),
  registrazione_via_nfc: boolean('registrazione_via_nfc').default(false),
  otp: varchar('otp', { length: 10 }),
  otp_scadenza: timestamp('otp_scadenza'),
  verificato_email: boolean('verificato_email').default(false),
  verificato_telefono: boolean('verificato_telefono').default(false),
  ultima_login: timestamp('ultima_login').defaultNow(),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

export const usersPro = pgTable('users_pro', {
  user_id: uuid('user_id').primaryKey().references(() => users.id),
  nome: varchar('nome', { length: 100 }).notNull(),
  cognome: varchar('cognome', { length: 100 }).notNull(),
  profession_type: varchar('profession_type', { length: 100 }).notNull(),
  specialization: varchar('specialization', { length: 150 }),
  business_name: varchar('business_name', { length: 255 }),
  vat_number: varchar('vat_number', { length: 50 }),
  address: varchar('address', { length: 255 }),
  city: varchar('city', { length: 100 }),
  region: varchar('region', { length: 100 }),
  cap: varchar('cap', { length: 20 }),
  website: varchar('website', { length: 255 }),
  license_number: varchar('license_number', { length: 100 }),
  license_country: varchar('license_country', { length: 100 }),
  license_verified: boolean('license_verified').default(false),
  profile_image_url: text('profile_image_url'),
  approved_by_admin: boolean('approved_by_admin').default(false),
  eterna_section: varchar('eterna_section', { length: 100 })
});

export const tokens = pgTable('tokens', {
  id: serial('id').primaryKey(),
  user_id: serial('user_id').references(() => users.id),
  token: varchar('token', { length: 255 }).notNull(),
  type: varchar('type', { length: 50 }).notNull(),
  expires_at: timestamp('expires_at').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

export const pets = pgTable('pets', {
  id: serial('id').primaryKey(),
  user_id: serial('user_id').references(() => users.id),
  name: varchar('name', { length: 255 }).notNull(),
  type: varchar('type', { length: 50 }).notNull(),
  breed: varchar('breed', { length: 255 }),
  birth_date: timestamp('birth_date'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),
});

export const pet_medical_records = pgTable('pet_medical_records', {
  id: serial('id').primaryKey(),
  pet_id: serial('pet_id').references(() => pets.id),
  record_type: varchar('record_type', { length: 50 }).notNull(),
  description: text('description'),
  date: timestamp('date').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
}); 