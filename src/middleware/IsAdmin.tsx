"use client";
import { useAuth } from "@/contexts/AuthContext";
import React from "react";

interface IsAdminProps {
  children: React.ReactNode;
  isNotAdmin: React.ReactNode;
}

export const IsAdmin: React.FC<IsAdminProps> = ({ children, isNotAdmin }) => {
  const { userRole } = useAuth();

  return userRole === 123 ? <>{children}</> : <>{isNotAdmin}</>;
};
