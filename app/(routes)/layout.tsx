import React from "react";
import DashboardProvider from "./provider";
import ProtectedRoute from "@/components/protected-route";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <DashboardProvider>{children}</DashboardProvider>
    </ProtectedRoute>
  );
}

export default DashboardLayout;
