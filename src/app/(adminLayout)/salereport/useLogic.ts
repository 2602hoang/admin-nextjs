import { useReportContext } from "@/contexts/ReportDataContext";
import { useAxios } from "@/providers/AxiosProvider";
import { useState } from "react";
import { useQueries } from "react-query";

export interface Report {
  successfulOrders: number;
  totalQuantity: number;
  totalRevenue: number;
}

interface ReportResponse {
  successfulOrders: number;
  totalQuantity: number;
  totalRevenue: number;
  report: Report;
}

const useLogicReportOrder = () => {
  const { axiosInstance } = useAxios();
  const { reportData, setReportData } = useReportContext();
  const [open, setOpen] = useState<boolean>(false);

  const openModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const queries = useQueries([
    {
      queryKey: ["orderSuccess"],
      queryFn: async () => {
        const res = await axiosInstance(0).get<ReportResponse>(
          `api/v1/thongke/order/thanhcong`
        );
        return res.data;
      },
      onSuccess: (data: ReportResponse) => {
        setReportData((prev) => ({
          ...prev,
          successOrder: data.successfulOrders,
          successTotalQty: data.totalQuantity,
          successTotalRevenue: data.totalRevenue,
        }));
      },
    },
    {
      queryKey: ["orderFail"],
      queryFn: async () => {
        const res = await axiosInstance(0).get<ReportResponse>(
          `api/v1/thongke/order/thatbai`
        );
        return res.data;
      },
      onSuccess: (data: ReportResponse) => {
        setReportData((prev) => ({
          ...prev,
          failOrder: data.successfulOrders,
          failTotalQty: data.totalQuantity,
          failTotalRevenue: data.totalRevenue,
        }));
      },
    },
    {
      queryKey: ["orderCancel"],
      queryFn: async () => {
        const res = await axiosInstance(0).get<ReportResponse>(
          `api/v1/thongke/order/huy`
        );
        return res.data;
      },
      onSuccess: (data: ReportResponse) => {
        setReportData((prev) => ({
          ...prev,
          cancelOrder: data.successfulOrders,
          cancelTotalQty: data.totalQuantity,
          cancelTotalRevenue: data.totalRevenue,
        }));
      },
    },
  ]);

  const isLoading = queries.some((query) => query.isLoading);
  const error = queries.find((query) => query.error)?.error;

  const dataCharts = [
    {
      name: "Orders",
      Success: reportData.successTotalRevenue,
      Failed: reportData.failTotalRevenue,
      Canceled: reportData.cancelTotalRevenue,
    },
  ];
  const dataCharts1 = [
    {
      name: "Quantity Products",
      Success: reportData.successTotalQty,
      Failed: reportData.failTotalQty,
      Canceled: reportData.cancelTotalQty,
    },
  ];

  const dataChartsPie = [
    { name: "Success Orders", value: reportData.successOrder },
    { name: "Failed Orders", value: reportData.failOrder },
    { name: "Canceled Orders", value: reportData.cancelOrder },
  ];

  return {
    ...reportData,
    reportData,
    isLoading,
    error,
    dataCharts,
    dataCharts1,
    dataChartsPie,
    openModal,
    handleCancel,
    open,
  };
};

export default useLogicReportOrder;
