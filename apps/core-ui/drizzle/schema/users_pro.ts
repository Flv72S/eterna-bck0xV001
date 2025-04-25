import { pgTable, serial, varchar, text, integer, timestamp, boolean } from 'drizzle-orm/pg-core';
import { eternaSections } from './eterna_sections';
import { users } from './users';

export const usersPro = pgTable('users_pro', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id').notNull().references(() => users.id),
  tipo_professione: varchar('tipo_professione', { length: 100 }),
  specializzazione: varchar('specializzazione', { length: 100 }),
  nome_attivita: varchar('nome_attivita', { length: 255 }),
  partita_iva: varchar('partita_iva', { length: 50 }),
  indirizzo: varchar('indirizzo', { length: 255 }),
  città: varchar('città', { length: 100 }),
  regione: varchar('regione', { length: 100 }),
  cap: varchar('cap', { length: 20 }),
  licenza: text('licenza'),
  sezione_id: integer('sezione_id').references(() => eternaSections.id),
  approvato_admin: boolean('approvato_admin').default(false),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow()
}); 