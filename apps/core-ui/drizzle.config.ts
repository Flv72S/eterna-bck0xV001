import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  schema: './db/schema/index.ts',
  out: './db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;

export default config; 