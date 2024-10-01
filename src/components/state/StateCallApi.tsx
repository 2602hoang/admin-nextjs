export const Loading = () => (
  <div className="place-items-center gap-y-4 pt-10 grid place-content-center ">
    <div className="w-full gap-x-2 flex justify-center items-center">
      <div className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full "></div>
      <div className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full "></div>
      <div className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full "></div>
    </div>

    <h1 className="text-3xl text-clip bg-gradient-to-r from-violet-500 to-red-500 bg-clip-text text-transparent">
      Loading...
    </h1>
    <p className="text-zinc-600 dark:text-zinc-400">
      Your adventure is about to begin
    </p>
  </div>
);

interface ErrorComponentProps {
  message: string;
}

export const ErrorComponent = ({ message }: ErrorComponentProps) => (
  <div className="grid h-screen place-content-center px-4">
    <h1 className="uppercase tracking-widest text-gray-500">{message}</h1>
  </div>
);

export const NoData = () => <div>No data available.</div>;
