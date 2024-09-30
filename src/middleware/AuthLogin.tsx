"use client";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

interface AuthLoginProps {
  children: React.ReactNode;
}

const AuthLogin: React.FC<AuthLoginProps> = ({ children }) => {
  const router = useRouter();
  const { userToken } = useAuth();

  return <>{!userToken ? <> {children}</> : router.push("/")}</>;
};

export default AuthLogin;
