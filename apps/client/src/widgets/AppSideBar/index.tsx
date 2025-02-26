"use client";

import { Frame, GalleryVerticalEnd, PieChart } from "lucide-react";
import type * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@repo/ui/sidebar";
import { NavProjects } from "./NavProject";
import { NavUser } from "./NavUser";
import { TeamSwitcher } from "./TeamSwitcher";

const data = {
  teams: [
    {
      name: "My Team",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  projects: [
    {
      name: "Home",
      url: "/",
      icon: PieChart,
    },
    {
      name: "Upload",
      url: "/upload",
      icon: Frame,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = {
    name: "My Name",
    email: "my.email@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects title="AWS S3" projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
