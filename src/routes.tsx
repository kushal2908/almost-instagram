import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NotFound from "./components/NotFound";
import Auth from "./pages/auth";
import ProtectecRoutes from "./utils/ProtectecRoutes";
import Home from "./pages/home/Home";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" errorElement={<NotFound />}>
        <Route index path={"/"} element={<Auth />} />
        <Route
          path={"/home"}
          element={
            <ProtectecRoutes>
              <Home />
            </ProtectecRoutes>
          }
        />
      </Route>
    </>
  )
);
