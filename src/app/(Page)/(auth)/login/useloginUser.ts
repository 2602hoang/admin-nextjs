import { URL } from "@/utils/index";
import axios from "axios";

export const useloginUser = async (
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
