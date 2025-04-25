import { pgTable, serial, text, timestamp, varchar, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  nome: varchar('nome', { length: 100 }),
  cognome: varchar('cognome', { length: 100 }),
  eterna_section: varchar('eterna_section', { length: 100 }),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

export const pets = pgTable('pets', {
  id: serial('id').primaryKey(),
  user_id: uuid('user_id').references(() => users.id),
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