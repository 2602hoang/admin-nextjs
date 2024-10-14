"use client";
import React from "react";
import useLogicReportOrder from "./useLogic";
import { Button, Card, Statistic } from "antd";
import CountUp from "react-countup";

import {
  ChartsColumnReport,
  ChartsPieReport,
} from "../useLogicHome/componentHome/AllCharts";
import Charts from "../../../components/charts/ComponentCharts";
import LayoutStateHandler from "@/components/layout/LayoutState";
import ModalReport from "./componentReport/ModalReport";

const Salereport = () => {
  const {
    successOrder,
    failOrder,
    reportData,
    cancelOrder,
    successTotalQty,
    successTotalRevenue,
    failTotalQty,
    failTotalRevenue,
    cancelTotalQty,
    cancelTotalRevenue,
    isLoading,
    error,
    dataCharts,
    dataChartsPie,
    dataCharts1,
    openModal,
    handleCancel,
    open,
  } = useLogicReportOrder();

  return (
    <LayoutStateHandler isLoading={isLoading} error={error} data={reportData}>
      <div className="grid grid-cols-12 gap-6 px-4 h-min-[600px] py-6 overflow-hidden">
        <div className=" bg-dark-slate-gray col-span-12 lg:col-span-4   rounded-xl">
          <Card
            type="inner"
            className=" bg-dark-slate-gray  text-white rounded-lg"
            title={
              <div className="flex justify-between">
                <h1 className="text-white  font-bold text-start">Overview</h1>
                <Button onClick={openModal}>Detail</Button>
              </div>
            }
            bordered={false}
          >
            <Statistic
              title={
                <h3 className="text-white  font-bold text-start">
                  Total transaction amount
                </h3>
              }
              valueRender={() => (
                <CountUp
                  end={
                    successTotalRevenue +
                    (cancelTotalRevenue + failTotalRevenue)
                  }
                  duration={2}
                />
              )}
              valueStyle={{
                color: "white",
              }}
              suffix="VND"
              className="text-white"
            />
            <Statistic
              title={
                <h3 className="text-white font-medium ">
                  Total Cancelled and Failed Transaction Amount
                </h3>
              }
              valueRender={() => (
                <CountUp
                  end={cancelTotalRevenue + failTotalRevenue}
                  duration={2}
                />
              )}
              valueStyle={{
                color: "white",
              }}
              suffix="VND"
            />
            <Statistic
              title={<h3 className="text-white font-medium ">Revenue</h3>}
              valueRender={() => (
                <CountUp end={successTotalRevenue} duration={2} />
              )}
              valueStyle={{
                color: "white",
              }}
              suffix="VND"
            />
            <Statistic
              title={<h3 className="text-white font-medium ">Success rate</h3>}
              valueRender={() => (
                <CountUp
                  end={
                    (successTotalRevenue /
                      (successTotalRevenue +
                        cancelTotalRevenue +
                        failTotalRevenue)) *
                    100
                  }
                  duration={2}
                />
              )}
              valueStyle={{
                color: "white",
              }}
              suffix="%"
            />
            <Statistic
              title={
                <h3 className="text-white font-medium ">Total orders sold</h3>
              }
              valueStyle={{
                color: "white",
              }}
              valueRender={() => (
                <CountUp
                  end={successOrder + cancelOrder + failOrder}
                  duration={2}
                />
              )}
            />
            <Statistic
              title={
                <h3 className="text-white font-medium ">
                  Total number of products sold
                </h3>
              }
              valueStyle={{
                color: "white",
              }}
              valueRender={() => (
                <CountUp
                  end={successTotalQty + cancelTotalQty + failTotalQty}
                  duration={2}
                />
              )}
            />
          </Card>
        </div>
        <div className="lg:col-span-8 col-span-12 overflow-x-auto bg-dark-slate-gray   rounded-xl">
          <Charts
            title={"Order"}
            charts={<ChartsPieReport dataChartsPie={dataChartsPie} />}
          />
        </div>

        <div className="bg-dark-slate-gray col-span-12  overflow-x-auto lg:col-span-6 rounded-xl">
          <Charts
            title={"Revenue"}
            charts={<ChartsColumnReport dataCharts={dataCharts} />}
          />
        </div>
        <div className="bg-dark-slate-gray  overflow-x-auto col-span-12 lg:col-span-6 rounded-xl">
          <Charts
            title={"Quantity Product"}
            charts={<ChartsColumnReport dataCharts={dataCharts1} />}
          />
        </div>

        <ModalReport
          successOrder={successOrder}
          failOrder={failOrder}
          cancelOrder={cancelOrder}
          successTotalQty={successTotalQty}
          successTotalRevenue={successTotalRevenue}
          failTotalQty={failTotalQty}
          failTotalRevenue={failTotalRevenue}
          cancelTotalQty={cancelTotalQty}
          cancelTotalRevenue={cancelTotalRevenue}
          open={open}
          handleCancel={handleCancel}
        />
      </div>
    </LayoutStateHandler>
  );
};

export default Salereport;
