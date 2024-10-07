import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaApple, FaGooglePlay } from "react-icons/fa";

type Props = {};

export default function Form({}: Props) {
  return (
    <div className="w-[350px] text-center">
      <div className="bg-white p-12  border rounded-sm border-gray-300 ">
        <img src={"./logo.png"} alt="" width={160} className="mx-auto py-4" />
        <div className="flex flex-col gap-2">
          <input
            className="px-3 py-1 border text-sm bg-gray-50 border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 placeholder:text-sm"
            placeholder="Email"
          />
          <input
            type="password"
            className="px-3 py-1 border text-sm bg-gray-50 border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 placeholder:text-sm"
            placeholder="Password"
          />
          <button className="bg-blue-400 text-white font-medium px-3 py-1 rounded-lg mt-2">Log in</button>

          <div className="inline-flex items-center justify-center">
            <hr className="w-64 h-px my-6 bg-gray-400 border-0 " />
            <span className="absolute px-3 text-sm font-medium text-gray-600 -translate-x-[-215px] bg-white left-1/2 ">
              OR
            </span>
          </div>

          <div className="inline-flex items-center justify-center gap-2 text-sky-800">
            <BiLogoFacebookSquare size={20} />
            <span className="font-semibold text-sm">Login with Facebook</span>
          </div>
          <span className="font-medium text-xs text-center text-sky-800 mt-4">Forgot your password?</span>
        </div>
      </div>
      <div className="bg-white p-4 border rounded-sm border-gray-300  mt-4 ">
        <span className="text-sm">
          Dont have an account? <span className="text-sky-800 font-bold">Sign up</span>{" "}
        </span>
      </div>
      <div className="mt-2">
        <span className="text-sm">Get the app</span>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        <a href="#" className="flex justify-center items-center gap-0 bg-black rounded-md text-white p-2">
          <FaApple fill="#fff" size={36} />
          <div className="flex flex-col">
            <span className="text-xs">Download on the</span>
            <span className="text-sm font-bold">APPSTORE</span>
          </div>
        </a>
        <a href="#" className="flex justify-center items-center gap-0 bg-black rounded-md text-white p-2">
          <FaGooglePlay fill="#fff" size={30} />
          <div className="flex flex-col">
            <span className="text-xs">GET IT ON </span>
            <span className="text-sm font-bold">Google Play</span>
          </div>
        </a>
      </div>
    </div>
  );
}
