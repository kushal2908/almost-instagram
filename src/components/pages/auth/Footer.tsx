import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
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
