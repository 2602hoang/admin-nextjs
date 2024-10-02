"use client";
import { LoadingPage } from "@/components/loading/LoadingPage";
import { useAuth } from "@/contexts/AuthContext";
import { user } from "@nextui-org/theme";
import { redirect, useRouter } from "next/navigation";
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
      return router.back();
    }
  }, [userToken, router]);

  return (
    <>
      {!userToken ? (
        <div className="text-white bg-brown flex justify-center z-50 h-screen fixed w-full overflow-hidden">
          <LoadingPage />
          {children}
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}
