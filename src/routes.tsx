import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NotFound from "./components/NotFound";
import Auth from "./pages/auth";
import { APP_URL } from "./utils/app_urls";
import Layout from "./components/layout/Layout";
import Home from "./pages/home";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" errorElement={<NotFound />}>
        <Route index path={APP_URL.AUTH} element={<Auth />} />
        <Route element={<Layout />}>
          <Route path={APP_URL.HOME} element={<Home />} />
        </Route>
      </Route>
    </>
  )
);
