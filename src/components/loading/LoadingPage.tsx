import React from "react";

export const LoadingPage = () => {
  return (
    <div className="flex flex-row gap-3 w-full h-screen justify-center orverflow-hidden bg-brown items-center text-center">
      <h1 className="text-3xl text-red-500">Loading...</h1>
      <div className="size-8 rounded-full bg-red-500 animate-bounce"></div>
      <div className="size-8 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
      <div className="size-8 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
};
