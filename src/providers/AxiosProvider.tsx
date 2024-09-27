"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
import axios, { AxiosInstance } from "axios";
import HttpError from "../errors/HttpError";
import { useAuth } from "../contexts/AuthContext";
import { URL } from "@/utils/index";

interface AxiosContextType {
  axiosInstance: AxiosInstance;
  updateToken: (token: string) => void;
}

const AxiosContext = createContext<AxiosContextType | undefined>(undefined);

interface AxiosProviderProps {
  children: ReactNode;
}

export const AxiosProvider: React.FC<AxiosProviderProps> = ({ children }) => {
  const { userToken } = useAuth();
  const [token, setToken] = useState<string | null>(userToken || null);

  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: URL,
      timeout: 3000,
    });

    instance.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    instance.interceptors.response.use(
      (response) => {
        if (!response.data) {
          throw new HttpError(204, "No Content: No data found");
        }
        return response;
      },
      (error) => {
        if (error.response) {
          const status = error.response.status;
          const messages: { [key: number]: string } = {
            400: "400 || Bad Request: The request was invalid or cannot be served",
            401: "401 || Unauthorized: Authentication failed",
            403: "403 || Forbidden: The request is not allowed",
            404: "404 || Not Found: The requested resource could not be found",
            500: "500 || Internal Server Error: Something went wrong on the server",
          };
          // if (status === 401) {
          //   localStorage.removeItem("token");
          //   setToken(null);
          // }
          throw new HttpError(
            status,
            messages[status] || `An error occurred: ${error.message}`
          );
        } else if (error.request) {
          throw new HttpError(
            0,
            "Network Error: No response received from the server"
          );
        } else {
          throw new HttpError(0, `Error: ${error.message}`);
        }
      }
    );

    return instance;
  }, [token]);

  const updateToken = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  useEffect(() => {
    if (userToken) {
      updateToken(userToken);
    }
  }, [userToken]);

  return (
    <AxiosContext.Provider value={{ axiosInstance, updateToken }}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = (): AxiosContextType => {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error("useAxios must be used within an AxiosProvider");
  }
  return context;
};
