import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import NarvBar from "../components/NavBar";

export const Route = createRootRoute({
  component: () => (
    <>
      <NarvBar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
