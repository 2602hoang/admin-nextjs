import { URL } from "@/utils/index";
import axios from "axios";

// const URL = "https://server-api-lime.vercel.app/api/v1/auth/login";

export const loginUser = async (
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
    } else if (data.mes === "Đăng nhập thành công" || data.access_token) {
      alert("Login successful");
      const token = data.access_token!;
      const userId = data.id_user!;

      localStorage.setItem("userToken", token);
      localStorage.setItem("userId", userId);
      return { success: true };
    } else if (data.error === 1) {
      return { success: false, error: "Invalid phone" };
    } else if (data.error === 2) {
      return { success: false, error: "Invalid password" };
    }
    return { success: false, error: "Login failed" };
  } catch (error) {
    console.error("Login error: ", error);
    return { success: false, error: "Information cannot be left blank 😓😓😓" };
  }
};
