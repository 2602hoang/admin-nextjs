"use client";
import React, { createContext, useContext, ReactNode } from "react";
import axios, { AxiosInstance } from "axios";
import HttpError from "../errors/HttpError";
import { useAuth } from "../contexts/AuthContext";
import { SERVER_URLS } from "@/utils";

interface AxiosContextType {
  axiosInstance: (serverIndex: number) => AxiosInstance;
}

const AxiosContext = createContext<AxiosContextType | undefined>(undefined);

interface AxiosProviderProps {
  children: ReactNode;
}

export const AxiosProvider: React.FC<AxiosProviderProps> = ({ children }) => {
  const { userToken } = useAuth();
  const serverList = SERVER_URLS;
  const createAxiosInstance = (serverIndex: number) => {
    const instance = axios.create({
      baseURL: serverList[serverIndex],
      timeout: 6000,
    });

    instance.interceptors.request.use(
      (config) => {
        if (SERVER_URLS[0] && userToken) {
          config.headers["Authorization"] = `Bearer ${userToken}`;
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
            304: "304 || Not Modified: The request was not modified",
            400: "400 || Bad Request: The request was invalid or cannot be served",
            401: "401 || Unauthorized: Authentication failed",
            403: "403 || Forbidden: The request is not allowed",
            404: "404 || Not Found: The requested resource could not be found",
            500: "500 || Internal Server Error: Something went wrong on the server",
            409: "409 || Conflict: The request could not be completed due to a conflict",
          };
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
  };

  return (
    <AxiosContext.Provider value={{ axiosInstance: createAxiosInstance }}>
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
