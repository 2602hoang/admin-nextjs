import { useAuth } from "@/contexts/AuthContext";
import { useAxios } from "@/providers/AxiosProvider";
import { SERVER_URLS } from "@/utils";
import { notification } from "antd";
import axios from "axios";
import { useState } from "react";

let hasNotified = false;
export const uselogicLogin = async (
  phone: string,
  password: string
): Promise<{ success: boolean }> => {
  hasNotified = false;
  try {
    const response = await axios.post(`${SERVER_URLS[0]}api/v1/auth/login`, {
      phone,
      password,
    });
    const data = response.data;

    if (data.status === 1) {
      return { success: false };
    }

    if (data.mes === "Đăng nhập thành công") {
      const { access_token: token, id_user: userId, id_role: userRole } = data;
      localStorage.setItem("userToken", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("userRole", userRole);
      if (!hasNotified) {
        notification.success({
          message: "Notification",
          description: "Login successful",
          showProgress: true,
          duration: 1,
        });
      }
      return (hasNotified = true), { success: true };
    }

    switch (data.error) {
      case 1:
        notification.error({
          message: "Notification",
          description: "Invalid phone",
          showProgress: true,
          duration: 1.5,
        });
        return { success: false };
      case 2:
        notification.error({
          message: "Notification",
          description: "Invalid password",
          showProgress: true,
          duration: 1.5,
        });
        return { success: false };
      default:
        notification.error({
          message: "Notification",
          description: "Error, Invalid phone or password",
          showProgress: true,
          duration: 1.5,
        });
        return { success: false };
    }
  } catch (error) {
    notification.error({
      message: "Notification",
      description: `Login failed ||  ${error}`,
      showProgress: true,
      duration: 1.5,
    });
    return { success: false };
  }
};
export const actionLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, userToken } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (values: { phone: string; password: string }) => {
    const { phone, password } = values;
    await login(phone, password);
  };
  return {
    showPassword,
    setShowPassword,
    phone,
    userToken,
    setPhone,
    password,
    setPassword,
    handleSubmit,
    togglePasswordVisibility,
  };
};
