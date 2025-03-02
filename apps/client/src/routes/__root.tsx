import { createRootRoute } from "@tanstack/react-router";
import { Providers } from "../app/Providers";
import { SideBarLayout } from "../app/SideBarLayout";
import "../app/index.css";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Providers>
      <SideBarLayout />
    </Providers>
  );
}
