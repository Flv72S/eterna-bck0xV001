import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../../../packages/db/src/schema';

const connectionString = process.env.ETERNA_DATABASE_URL;
if (!connectionString) {
  throw new Error('ETERNA_DATABASE_URL is not defined');
}

const client = postgres(connectionString);
export const db = drizzle(client, { schema });

export default db; 