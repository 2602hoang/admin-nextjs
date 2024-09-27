// LayoutStateHandler.tsx
import React from "react";
import {
  Loading,
  ErrorComponent,
  NoData,
} from "@/components/state/StateCallApi";

interface LayoutStateHandlerProps {
  isLoading: any;
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
      <div className="z-50 w-full h-screen   bg-opacity-50 opacity-50 ">
        <Loading />
      </div>
    );
  }

  if (error) {
    const errorMessage = error.message; // Adjust if your error has a different structure
    return (
      <div className="z-50 w-full h-screen   bg-opacity-50 opacity-50 ">
        <ErrorComponent message={errorMessage} />
      </div>
    );
  }

  const isEmptyArray = Array.isArray(data) && data.length === 0;
  const isEmptyObject =
    typeof data === "object" && data !== null && Object.keys(data).length === 0;

  if (isEmptyArray || isEmptyObject) {
    return (
      <div className="z-50 w-full h-screen   bg-opacity-50 opacity-50 ">
        <NoData />
      </div>
    );
  }

  return <>{children}</>; // Render children if everything is okay
};

export default LayoutStateHandler;
