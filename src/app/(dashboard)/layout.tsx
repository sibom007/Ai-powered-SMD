import DashboardSidebar from "@/components/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
interface Props {
  children: React.ReactNode;
}

function DashboardLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <div>{children}</div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
