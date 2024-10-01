export const Loading = () => (
  <div className="text-center place-content-center  ">
    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
    <h2 className="text-white text-2xl dark:text-white mt-4">Loading...</h2>
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
