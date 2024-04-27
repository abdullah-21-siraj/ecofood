import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { sql } from "@vercel/postgres";
import * as schema from '@/lib/db/schema'

export const db = drizzle(sql, { schema });
migrate(db, { migrationsFolder: "src/lib/db/migrations" });