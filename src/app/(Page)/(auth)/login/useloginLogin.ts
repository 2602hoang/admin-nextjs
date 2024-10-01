import { useAuth } from "@/contexts/AuthContext";
import { URL } from "@/utils/index";
import axios from "axios";
import { useEffect, useState } from "react";

export const uselogicLogin = async (
  phone: string,
  password: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await axios.post(`${URL}api/v1/auth/login`, {
      phone,
      password,
    });

    const data = response.data;

    if (data.status === 1) {
      return { success: false, error: "Tài khoản đã bị khóa" };
    }
    if (data.mes === "Đăng nhập thành công" || data.access_token) {
      const { access_token: token, id_user: userId } = data;
      localStorage.setItem("userToken", token);
      localStorage.setItem("userId", userId);
      return { success: true };
    }
    switch (data.error) {
      case 1:
        return { success: false, error: "Invalid phone" };
      case 2:
        return { success: false, error: "Invalid password" };
      default:
        return { success: false, error: "Login failed" };
    }
  } catch (error) {
    console.error("Login error: ", error);
    return { success: false, error: "Information cannot be left blank 😓😓😓" };
  }
};
export const actionLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [localError, setLocalError] = useState<string | null>(null);
  const [prevError, setPrevError] = useState<string | null>(null);
  const { login, error, userToken } = useAuth();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(phone, password);
  };
  useEffect(() => {
    if (error && error !== prevError && error.trim() !== "") {
      setLocalError(error);
      setPrevError(error);
      const timer = setTimeout(() => {
        setLocalError(null);
      }, 100);
      return () => clearTimeout(timer);
    } else if (error.trim() === "") {
      setLocalError(null);
    }
  }, [error, prevError]);
  return {
    showPassword,
    setShowPassword,
    phone,
    userToken,
    setPhone,
    password,
    setPassword,
    localError,
    setLocalError,
    handleSubmit,
    togglePasswordVisibility,
  };
};

