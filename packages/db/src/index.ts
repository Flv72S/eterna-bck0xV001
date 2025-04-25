import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = 'postgres://postgres:N0nn0c4rl0!!@localhost:5432/eterna';
const client = postgres(connectionString);
export const db = drizzle(client, { schema });

// Export all schema objects
export * from './schema';
export default db; 