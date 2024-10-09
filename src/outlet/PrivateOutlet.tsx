import React from "react";
import { Outlet } from "react-router-dom";

type props = {
  children: React.ReactNode;
};
export default function PrivateOutlet({ children }: props) {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
}
