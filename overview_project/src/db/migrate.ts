import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import 'dotenv/config';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import * as schema from './schema/index';

const pool = new Pool({
  connectionString: 'postgres://nest_user:nest_password@localhost:5432/nest_db',
});

const db = drizzle(pool, { schema });

async function main() {
  try {
    console.log('migration started...');
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('migration successfully completed...');
  } catch (e) {
    throw new Error('migration un-succesfull...');
  }
}

main().then(() => {
  pool.end();
});
