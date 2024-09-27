"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

interface NoAuthLoginProps {
  children: React.ReactNode;
}

const AuthLogin: React.FC<NoAuthLoginProps> = ({ children }) => {
  const router = useRouter();
  const { userToken } = useAuth();

  return <>{!userToken ? <> {children}</> : router.push("/")}</>;
};

export default AuthLogin;
