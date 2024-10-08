"use client";
import { ReactNode } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { AxiosProvider } from "@/providers/AxiosProvider";
import CustomQueryClientProvider from "@/providers/QueryClientProvider";

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <AxiosProvider>
        <CustomQueryClientProvider>{children}</CustomQueryClientProvider>
      </AxiosProvider>
    </AuthProvider>
  );
};

export default AppProviders;
