import { Navigate } from "react-router-dom";
import { GET_TOKEN } from "./tokes";

export default function ProtectecRoutes({ children }: any) {
  const hasToken = GET_TOKEN;
  if (!hasToken) {
    return <Navigate to="/" />;
  }
  return children;
}
