import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,
    varchar,
    integer,
    bigint,
    decimal as pgDecimal,
  } from "drizzle-orm/pg-core";
 
  export const db = drizzle(sql);

export const UsersTable = pgTable(
  'eco_users',
  {
    id: text('id').primaryKey(),
    email: text('email').unique(),
    password: text('password'),
    username: text('username'),
    fname: text('fname'),
    lname: text('lname'),
    gender: text("gender"),
    dob: text("dob"),
    created_at: timestamp('created_at').defaultNow().notNull(),
  }
);


