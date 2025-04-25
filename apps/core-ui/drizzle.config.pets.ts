import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  schema: './db/schema/pets.ts',
  out: './db/migrations/pets',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_PETS_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;

export default config; 