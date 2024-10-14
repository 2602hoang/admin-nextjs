import React, { createContext, useContext, useState, ReactNode } from "react";

export interface ReportData {
  successOrder: number;
  failOrder: number;
  cancelOrder: number;
  successTotalQty: number;
  successTotalRevenue: number;
  failTotalQty: number;
  failTotalRevenue: number;
  cancelTotalQty: number;
  cancelTotalRevenue: number;
}

interface ReportContextType {
  reportData: ReportData;
  setReportData: React.Dispatch<React.SetStateAction<ReportData>>;
}

const ReportContext = createContext<ReportContextType | undefined>(undefined);

export const ReportProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [reportData, setReportData] = useState<ReportData>({
    successOrder: 0,
    failOrder: 0,
    cancelOrder: 0,
    successTotalQty: 0,
    successTotalRevenue: 0,
    failTotalQty: 0,
    failTotalRevenue: 0,
    cancelTotalQty: 0,
    cancelTotalRevenue: 0,
  });

  return (
    <ReportContext.Provider value={{ reportData, setReportData }}>
      {children}
    </ReportContext.Provider>
  );
};

export const useReportContext = (): ReportContextType => {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error("useReportContext must be used within a ReportProvider");
  }
  return context;
};
