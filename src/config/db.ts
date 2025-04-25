import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = 'postgres://postgres:N0nn0c4rl0!!@localhost:5432/eterna';
const client = postgres(connectionString);
export const db = drizzle(client); 