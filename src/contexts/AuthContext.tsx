"use client";
import { useloginUser } from "@/app/auth/Login/useloginUser";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  login: (phone: string, password: string) => Promise<void>;
  logout: () => void;
  userToken: string | null;
  userRole: number | null;
  userId: string | null;
  error: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<number | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const role = localStorage.getItem("userRole");
    const id = localStorage.getItem("userId");
    setUserToken(token);
    setUserRole(role ? parseInt(role) : null);
    setUserId(id);
    if (!token) {
      router.push("/auth/Login");
    }
  }, [router]);
  const login = async (phone: string, password: string): Promise<void> => {
    const result = await useloginUser(phone, password);

    if (result.success) {
      const token = localStorage.getItem("userToken");
      const role = localStorage.getItem("userRole");
      const id = localStorage.getItem("userId");

      if (token) {
        setUserToken(token);
      }
      // Set the user token and role if it exists
      if (role) {
        setUserRole(parseInt(role));
      }
      setUserId(id);
      setError("");
      router.push("/");
    } else {
      setError(result.error || "Login failed");
    }
  };
  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userRole");
    // Set the error if the login fails
    setUserToken(null);
    setUserRole(null);
    setUserId(null);
    router.push("/Login");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        userToken,
        userRole,
        userId,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider };
