import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Button, Card, Modal, Statistic } from "antd";
import React from "react";
import CountUp from "react-countup";

interface ModalReportProps {
  open: boolean;
  handleCancel: () => void;
  successTotalQty: number;
  successTotalRevenue: number;
  failTotalQty: number;
  failTotalRevenue: number;
  cancelTotalQty: number;
  cancelTotalRevenue: number;
  successOrder: number;
  failOrder: number;
  cancelOrder: number;
}

const ModalReport: React.FC<ModalReportProps> = ({
  open,
  handleCancel,
  successTotalQty,
  successTotalRevenue,
  failTotalQty,
  failTotalRevenue,
  cancelTotalQty,
  cancelTotalRevenue,
  successOrder,
  failOrder,
  cancelOrder,
}) => {
  return (
    <Modal
      title={
        <h1 className="text-white text-center bg-brown">Transaction Details</h1>
      }
      onCancel={handleCancel}
      width={800}
      open={open}
      footer={
        <Button className="bg-white text-black" onClick={handleCancel}>
          OK
        </Button>
      }
    >
      <div className="flex flex-col w-full md:w-full justify-center items-center h-auto">
        <div className="flex md:flex-row flex-col space-x-8 mt-6 ">
          <div className="min-w-[300px] min-h-[500px]">
            <Card
              title={<h2 className="text-white">Successful Orders</h2>}
              bordered={false}
              className="bg-dark-slate-gray min-w-[300px] min-h-[450px] rounded-lg shadow-md"
            >
              <Statistic
                title={<h3 className="text-white">Revenue</h3>}
                valueRender={() => (
                  <CountUp end={successTotalRevenue} duration={2} />
                )}
                valueStyle={{
                  color: "green",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="VND"
              />
              <Statistic
                title={<h3 className="text-white">Total Quantity Sold</h3>}
                valueRender={() => (
                  <CountUp end={successTotalQty} duration={2} />
                )}
                valueStyle={{
                  color: "green",
                }}
              />
              <Statistic
                title={<h3 className="text-white">Total Orders Sold</h3>}
                valueRender={() => <CountUp end={successOrder} duration={2} />}
                valueStyle={{
                  color: "green",
                }}
              />
            </Card>
          </div>
          <div className="min-w-[300px] min-h-[400px]">
            <Card
              title={<h2 className="text-white">Failed and Canceled Orders</h2>}
              bordered={false}
              className="bg-dark-slate-gray rounded-lg min-w-[300px] min-h-[450px] shadow-md"
            >
              <Statistic
                title={
                  <h3 className="text-white">Refunds for Cancellations</h3>
                }
                valueRender={() => (
                  <CountUp end={cancelTotalRevenue} duration={2} />
                )}
                valueStyle={{
                  color: "red",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="VND"
              />
              <Statistic
                title={<h3 className="text-white">Refunds for Failures</h3>}
                valueRender={() => (
                  <CountUp end={failTotalRevenue} duration={2} />
                )}
                valueStyle={{
                  color: "red",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="VND"
              />
              <Statistic
                title={<h3 className="text-white">Total Canceled Orders</h3>}
                valueRender={() => <CountUp end={cancelOrder} duration={2} />}
                valueStyle={{
                  color: "red",
                }}
              />
              <Statistic
                title={<h3 className="text-white">Total Failed Orders</h3>}
                valueRender={() => <CountUp end={failOrder} duration={2} />}
                valueStyle={{
                  color: "red",
                }}
              />
              <Statistic
                title={<h3 className="text-white">Total Products Returned</h3>}
                valueRender={() => (
                  <CountUp end={cancelTotalQty + failTotalQty} duration={2} />
                )}
                valueStyle={{
                  color: "red",
                }}
              />
            </Card>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalReport;
