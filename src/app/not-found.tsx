"use client";
import { IconNotFound } from "@/icon/DataIcon";
import { useRouter } from "next/navigation";
const NotFound = () => {
  const router = useRouter();
  return (
    <div className="grid h-screen w-full fixed place-content-center bg-brown px-4">
      <div className="text-center">
        <IconNotFound />
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>
        <p className="mt-4 text-gray-500">We can not find that page.</p>

        <button
          onClick={() => router.back()}
          className="relative inline-flex h-12 mt-5 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-brown px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                d="M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67"
              ></path>
            </svg>
            Go Back
          </span>
        </button>
      </div>
    </div>
  );
};
export default NotFound;
