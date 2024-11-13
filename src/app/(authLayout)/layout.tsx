"use client";
import { LoadingPage } from "@/components/loading/LoadingPage";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userToken) {
      return router.push("/");
    }
  }, [userToken]);

  return (
    <>
      {userToken === null && (
        <div className="text-white bg-brown flex justify-center z-50 h-screen fixed w-full overflow-hidden">
          <LoadingPage />
          {children}
        </div>
      )}
    </>
  );
}
