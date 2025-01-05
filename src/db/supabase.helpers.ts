import { sql } from 'drizzle-orm';

import { pgRole, pgSchema, uuid, varchar } from 'drizzle-orm/pg-core';
import { timestamps } from './columns.helpers';

/* ------------------------------ Supabase emulation ------------------------------ */

export const anonRole = pgRole('anon');
export const authenticatedRole = pgRole('authenticated');
export const serviceRole = pgRole('service_role');
export const supabaseAuthAdminRole = pgRole('supabase_auth_admin');
export const auth = pgSchema('auth');
export const usersInAuth = auth.table('users', {
  id: uuid().primaryKey().notNull(),
  aud: varchar({
    length: 255,
  }).notNull(),
  role: varchar({
    length: 255,
  }).notNull(),
  email: varchar({
    length: 255,
  }).notNull(),
  ...timestamps,
});
export const authUid = sql`(select auth.uid())`;
