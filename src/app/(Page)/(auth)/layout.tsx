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
      router.back();
    }
  }, [userToken, router]);
  if (userToken === null) {
    return (
      <div className="text-white bg-brown flex justify-center z-50 h-screen fixed w-full overflow-hidden">
        {userToken ? null : children}
      </div>
    );
  }
  return <LoadingPage />;
}
