import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../../../packages/db/src/schema';

// Database principale Eterna
const eternaConnectionString = process.env.ETERNA_DATABASE_URL;
if (!eternaConnectionString) {
  throw new Error('ETERNA_DATABASE_URL is not defined');
}

const eternaClient = postgres(eternaConnectionString);
export const eternaDb = drizzle(eternaClient, { schema });

// Database Eterna Pets
const eternaPetsConnectionString = process.env.ETERNA_PETS_DATABASE_URL;
if (!eternaPetsConnectionString) {
  throw new Error('ETERNA_PETS_DATABASE_URL is not defined');
}

const eternaPetsClient = postgres(eternaPetsConnectionString);
export const eternaPetsDb = drizzle(eternaPetsClient, { schema }); 