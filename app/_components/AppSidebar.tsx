import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Calendar,
  CreditCard,
  Home,
  Inbox,
  Paintbrush,
  Search,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Workspace",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Design",
    url: "/designs",
    icon: Paintbrush,
  },
  {
    title: "Credits",
    url: "/credits",
    icon: CreditCard,
  },
];

export function AppSidebar() {
  const path = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex flex-col">
          <div className="p-4">
            <span className="text-2xl font-bold text-slate-900 block">draw2<span className="text-[#7621ff]">dev</span></span>
            <h2 className="text-sm text-gray-400 top-4 left-20 text-left">
              Build Effortlessly
            </h2>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  className={`p-4 m-3 text-lg flex gap-3 items-center rounded-xl transition-all 
              hover:bg-gray-100 dark:hover:bg-gray-800 
              ${
                path === item.url
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/20 backdrop-blur-md"
                  : ""
              }
            `}
                >
                  <item.icon className="h-5 w-5 text-current" />
                  <span>{item.title}</span>
                </a>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
