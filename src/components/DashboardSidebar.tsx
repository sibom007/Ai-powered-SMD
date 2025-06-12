"use client";
import React from "react";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";
import { usePathname } from "next/navigation";

import {
  ChevronUp,
  LogOutIcon,
  MessageCircleMore,
  NotebookPen,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Separator } from "@/components//ui/separator";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

function DashboardSidebar() {
  const { data: session } = authClient.useSession();
  const username = session?.user.name ? session.user.name.slice(0, 2) : "";

  const pathname = usePathname();

  const links = [
    { title: "Message", link: "/", icons: <MessageCircleMore /> },
    { title: "Note", link: "/l", icons: <NotebookPen /> },
  ];

  return (
    <Sidebar className=" text-white">
      <SidebarHeader>
        <h1
          className={`text-3xl font-semibold text-center leading-6 ${robotoMono.className}`}>
          SMD
        </h1>
      </SidebarHeader>
      <Separator className="bg-gray-500/40" />
      <SidebarContent className="p-2 ">
        {links.map((link) => (
          <Link key={link.link} href={link.link}>
            <Button
              className={cn(
                "w-full flex justify-start bg-gradient-to-r from-chart-3/30 hover:from-chart-3/60 transition-colors duration-300",
                pathname === link.link &&
                  "bg-gradient-to-r from-chart-3/80 hover:from-chart-3"
              )}>
              {link.icons}
              <p className="tracking-widest">{link.title}</p>
            </Button>
          </Link>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-blue-950 p-2 rounded-lg">
            <div className="flex items-center justify-between gap-2">
              <Avatar>
                <AvatarImage src={session?.user.image ?? undefined} alt="Img" />
                <AvatarFallback className="bg-gray-700 uppercase">
                  {username}
                </AvatarFallback>
              </Avatar>
              <div>{session?.user.name}</div>
              <div>
                <ChevronUp className="text-gray-600" />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-blue-950 text-white">
            <DropdownMenuItem className="bg-blue-800 focus:bg-blue-900 focus:text-white">
              <LogOutIcon />
              LogOut
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default DashboardSidebar;
