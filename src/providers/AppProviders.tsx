"use client";
import { ReactNode } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { AxiosProvider } from "@/providers/AxiosProvider";
import CustomQueryClientProvider from "@/providers/QueryClientProvider";
import { ReportProvider } from "@/contexts/ReportDataContext";

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <AxiosProvider>
        <CustomQueryClientProvider>
          <ReportProvider>{children}</ReportProvider>
        </CustomQueryClientProvider>
      </AxiosProvider>
    </AuthProvider>
  );
};

export default AppProviders;
