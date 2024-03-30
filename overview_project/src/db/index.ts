import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import 'dotenv/config'
import * as schema from './schema/index';

const client = new Client({
  connectionString: process.env.CONNECTION_STRING,
});

async function main(){
    try{
        console.log('connecting...')
        await client.connect();
        console.log('connected')
    }catch(e:any){
        throw new Error(e)
    }
}

// connecting to db;
main()

export const db = drizzle(client, {schema});
