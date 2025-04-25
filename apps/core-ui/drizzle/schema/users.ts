import { pgTable, text, uuid, timestamp } from 'drizzle-orm/pg-core';
import { eternaSections } from './eterna_sections';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  nome: text('nome').notNull(),
  cognome: text('cognome').notNull(),
  password_hash: text('password_hash').notNull(),
  ruolo: text('ruolo').notNull().default('user'),
  sezione_id: uuid('sezione_id').references(() => eternaSections.id),
  phone: text('phone'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
}); 