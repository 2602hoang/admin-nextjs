import React, { useState, useEffect } from "react";

export const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }
  return (
    <div className="flex flex-col gap-3 w-full h-screen fixed z-50 justify-center orverflow-hidden bg-brown items-center text-center">
      <div className="flex flex-row gap-2">
        <div
          style={{
            backgroundImage:
              "conic-gradient(from 0deg, violet, indigo 30%, blue 50%, green 60%, yellow 70%, orange 80%, red 100%)",
          }}
          className="w-14 h-14 rounded-full bg-radial bg-gradient-to-tr animate-spin"
        ></div>
      </div>
      <h1 className="text-3xl text-clip bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent">
        Loading...
      </h1>
    </div>
  );
};
