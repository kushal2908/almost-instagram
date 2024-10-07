import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NotFound from "./components/NotFound";
import Auth from "./pages/auth";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" errorElement={<NotFound />}>
        <Route index path={"/"} element={<Auth />} />
      </Route>
    </>
  )
);
