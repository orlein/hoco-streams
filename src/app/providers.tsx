"use client";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import React from "react";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "./lib/store";
import { SupabaseContext } from "./lib/use-supabase";
import { createClient, SupabaseBrowserClient } from "@/utils/supabase/client";

export function Providers({ children }: PropsWithChildren) {
  const storeRef = React.useRef<AppStore | null>(null);
  const supabaseRef = React.useRef<SupabaseBrowserClient | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  if (!supabaseRef.current) {
    supabaseRef.current = createClient();
  }

  return (
    <SupabaseContext.Provider value={supabaseRef.current}>
      <Provider store={storeRef.current}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </Provider>
      <Toaster />
    </SupabaseContext.Provider>
  );
}
