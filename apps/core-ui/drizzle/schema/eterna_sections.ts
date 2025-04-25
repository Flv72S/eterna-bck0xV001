import { pgTable, text, uuid, timestamp } from 'drizzle-orm/pg-core';

export const eternaSections = pgTable('eterna_sections', {
  id: uuid('id').primaryKey().defaultRandom(),
  nome: text('nome').notNull(),
  slug: text('slug').notNull().unique(),
  descrizione: text('descrizione'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
}); 