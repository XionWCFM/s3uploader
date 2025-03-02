import { SidebarTrigger } from "@repo/ui/sidebar";
import { SidebarInset } from "@repo/ui/sidebar";
import { SidebarProvider } from "@repo/ui/sidebar";
import { Outlet } from "@tanstack/react-router";
import { AppSidebar } from "../widgets/AppSideBar";

export const SideBarLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <div className="flex flex-1 flex-col p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
