"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessions = exports.otps = exports.tokens = exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    email: (0, pg_core_1.varchar)('email', { length: 255 }).notNull().unique(),
    password: (0, pg_core_1.text)('password').notNull(),
    name: (0, pg_core_1.varchar)('name', { length: 255 }),
    surname: (0, pg_core_1.varchar)('surname', { length: 255 }),
    phone: (0, pg_core_1.varchar)('phone', { length: 20 }),
    pin: (0, pg_core_1.text)('pin').notNull(),
    role: (0, pg_core_1.varchar)('role', { length: 50 }).default('user'),
    email_verified: (0, pg_core_1.boolean)('email_verified').default(false),
    phone_verified: (0, pg_core_1.boolean)('phone_verified').default(false),
    version: (0, pg_core_1.varchar)('version', { length: 50 }).default('free'),
    seriale_gioiello: (0, pg_core_1.varchar)('seriale_gioiello', { length: 100 }),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)('updated_at').defaultNow().notNull(),
});
exports.tokens = (0, pg_core_1.pgTable)('tokens', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    token: (0, pg_core_1.text)('token').notNull(),
    type: (0, pg_core_1.varchar)('type', { length: 50 }).notNull(),
    user_id: (0, pg_core_1.serial)('user_id').references(() => exports.users.id),
    expires_at: (0, pg_core_1.timestamp)('expires_at').notNull(),
    used_at: (0, pg_core_1.timestamp)('used_at'),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow().notNull(),
});
exports.otps = (0, pg_core_1.pgTable)('otps', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    userId: (0, pg_core_1.serial)('user_id').references(() => exports.users.id),
    code: (0, pg_core_1.varchar)('code', { length: 6 }).notNull(),
    expiresAt: (0, pg_core_1.timestamp)('expires_at').notNull(),
    used: (0, pg_core_1.boolean)('used').default(false),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow().notNull(),
});
exports.sessions = (0, pg_core_1.pgTable)('sessions', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    userId: (0, pg_core_1.serial)('user_id').references(() => exports.users.id),
    token: (0, pg_core_1.text)('token').notNull(),
    expiresAt: (0, pg_core_1.timestamp)('expires_at').notNull(),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow().notNull(),
});
// Aggiungi qui altri schemi se necessario 
