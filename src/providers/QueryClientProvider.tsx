"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a new QueryClient instance with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 10,
      staleTime: 1000 * 60 * 5,
    },
  },
});

const CustomQueryClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default CustomQueryClientProvider;
