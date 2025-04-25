import { pgTable, serial, text, timestamp, varchar, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: text('password').notNull(),
  name: varchar('name', { length: 255 }),
  surname: varchar('surname', { length: 255 }),
  phone: varchar('phone', { length: 20 }),
  pin: text('pin').notNull(),
  role: varchar('role', { length: 50 }).default('user'),
  email_verified: boolean('email_verified').default(false),
  phone_verified: boolean('phone_verified').default(false),
  version: varchar('version', { length: 50 }).default('free'),
  seriale_gioiello: varchar('seriale_gioiello', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const tokens = pgTable('tokens', {
  id: serial('id').primaryKey(),
  token: text('token').notNull(),
  type: varchar('type', { length: 50 }).notNull(),
  user_id: serial('user_id').references(() => users.id),
  expires_at: timestamp('expires_at').notNull(),
  used_at: timestamp('used_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const otps = pgTable('otps', {
  id: serial('id').primaryKey(),
  userId: serial('user_id').references(() => users.id),
  code: varchar('code', { length: 6 }).notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  used: boolean('used').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const sessions = pgTable('sessions', {
  id: serial('id').primaryKey(),
  userId: serial('user_id').references(() => users.id),
  token: text('token').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Aggiungi qui altri schemi se necessario 