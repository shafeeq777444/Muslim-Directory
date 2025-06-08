// components/ClientProviders.js
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function ClientProviders({ children }) {
  // Create QueryClient *inside* the client component
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster reverseOrder={false} />
      {children}
    </QueryClientProvider>
  );
}
