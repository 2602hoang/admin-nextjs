import React from "react";
import {
  Loading,
  ErrorComponent,
  NoData,
} from "@/components/state/StateCallApi";

interface LayoutStateHandlerProps {
  isLoading: boolean;
  error: any;
  data: any;
  children: React.ReactNode;
}

const LayoutStateHandler: React.FC<LayoutStateHandlerProps> = ({
  isLoading,
  error,
  data,
  children,
}) => {
  if (isLoading) {
    return (
      <div className="z-40 w-full h-screen   bg-opacity-50 opacity-50 ">
        <Loading />
      </div>
    );
  }

  if (error) {
    const errorMessage = error.message;
    return (
      <div className="z-40 w-full h-screen   bg-opacity-50 opacity-50 ">
        <ErrorComponent message={errorMessage} />
      </div>
    );
  }

  const isEmptyArray = Array.isArray(data) && data.length === 0;
  const isEmptyObject =
    typeof data === "object" && data !== null && Object.keys(data).length === 0;

  if (isEmptyArray || isEmptyObject) {
    return (
      <div className="z-40 w-full h-screen   bg-opacity-50 opacity-50 ">
        <NoData />
      </div>
    );
  }

  return <div className=" w-full">{children}</div>;
};

export default LayoutStateHandler;
