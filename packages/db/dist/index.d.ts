import * as schema from './schema';
export declare const db: import("drizzle-orm/postgres-js").PostgresJsDatabase<typeof schema>;
export * from './schema';
export default db;
