'use client';

import { SupabaseBrowserClient } from '@/utils/supabase/client';
import React from 'react';

export const SupabaseContext =
  React.createContext<SupabaseBrowserClient | null>(null);

export function useSupabase() {
  const context = React.useContext(SupabaseContext);

  if (!context) {
    throw new Error('useSupabase must be used within a <SupabaseProvider>');
  }

  return context;
}
