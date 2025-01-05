import { timestamp } from 'drizzle-orm/pg-core';

export const timestamps = {
  createdAt: timestamp({ withTimezone: true, mode: 'string' }),
  updatedAt: timestamp({ withTimezone: true, mode: 'string' }),
  deletedAt: timestamp({ withTimezone: true, mode: 'string' }),
};
