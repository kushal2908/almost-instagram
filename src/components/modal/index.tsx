import classNames from "classnames";
import React, { useState } from "react";

interface IModalProps {
  show: boolean;
  className?: string;
}

const Modal: React.FunctionComponent<IModalProps> = ({ show, className }) => {
  console.log("showModal", show);
  return show ? (
    <div
      className={classNames(
        "justify-center items-center flex overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
        className
      )}
    ></div>
  ) : null;
};

export default Modal;
