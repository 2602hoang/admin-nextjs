"use client";
import { uselogicLogin } from "@/app/(authLayout)/login/uselogicLogin";
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
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<number | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const [token, role, id] = [
      localStorage.getItem("userToken"),
      localStorage.getItem("userRole"),
      localStorage.getItem("userId"),
    ];
    setUserToken(token);
    setUserRole(role ? parseInt(role) : null);
    setUserId(id);
    if (!token) {
      router.push("/login");
    }
  }, [router]);
  const login = async (phone: string, password: string): Promise<void> => {
    const result = await uselogicLogin(phone, password);
    if (result.success) {
      const [token, role, id] = [
        localStorage.getItem("userToken"),
        localStorage.getItem("userRole"),
        localStorage.getItem("userId"),
      ];
      if (token) {
        setUserToken(token);
      }
      if (role) {
        setUserRole(parseInt(role));
      }
      setUserId(id);
    } else {
      console.log("Error", Error);
    }
  };
  const logout = () => {
    const itemsToRemove = ["userToken", "userId", "userRole"];
    itemsToRemove.forEach((item) => localStorage.removeItem(item));
    setUserToken(null);
    setUserId(null);
    setUserRole(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        userToken,
        userRole,
        userId,
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
