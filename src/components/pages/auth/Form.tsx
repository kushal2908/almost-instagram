import { useState } from "react";
import Footer from "./Footer";
import Login from "./Login";
import SignUp from "./SignUp";

type Props = {};

export default function Form({}: Props) {
  const [isLoginForm, setIsLoginForm] = useState(true);
  return (
    <div className="w-full mx-14 md:mx-0 md:w-[350px] text-center">
      <div className="bg-white p-12  border rounded-sm border-gray-300 ">
        <img src={"./logo.png"} alt="" width={160} className="mx-auto py-4" />
        {isLoginForm ? <Login /> : <SignUp />}
      </div>
      <div className="bg-white p-4 border rounded-sm border-gray-300  mt-4 ">
        <span className="text-sm">
          {isLoginForm ? "Don't have an account?" : "Have an account?"}{" "}
          <span className="text-sky-800 font-bold cursor-pointer" onClick={() => setIsLoginForm(!isLoginForm)}>
            {isLoginForm ? "Sign up" : "Log in"}
          </span>
        </span>
      </div>
      <Footer />
    </div>
  );
}
