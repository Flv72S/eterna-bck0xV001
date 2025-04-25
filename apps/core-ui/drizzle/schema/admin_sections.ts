import { pgTable, uuid, timestamp } from 'drizzle-orm/pg-core';
import { users } from './users';
import { eternaSections } from './eterna_sections';

export const adminSections = pgTable('admin_sections', {
  id: uuid('id').primaryKey().defaultRandom(),
  admin_id: uuid('admin_id').notNull().references(() => users.id),
  sezione_id: uuid('sezione_id').notNull().references(() => eternaSections.id),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
}); 