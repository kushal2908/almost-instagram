import { useState } from "react";
import classNames from "classnames";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  placeholder?: string;
  type?: string;
}

export default function TextInput({ className, label, placeholder, type = "text", ...rest }: TextInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="relative w-full">
      {label && <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type === "password" && !isPasswordVisible ? "password" : "text"}
        className={classNames(
          "h-[38px] text-[12px] px-2 pt-2 border bg-gray-50 border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 placeholder:text-xs w-full",
          className
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />

      <div
        className={classNames("absolute left-2 transition-all duration-200 ease-out text-sm", {
          "bottom-2 left-[4px] transform scale-[calc(10/12)] translate-y-[-10px] font-medium text-gray-500 text-[12px]":
            isFocused || rest.value, // Floating effect when focused or has value
          "top-2 text-gray-400": !isFocused && !rest.value, // Default position
        })}
      >
        {placeholder}
      </div>

      {type === "password" && rest.value && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-1 px-2 py-1 text-sm text-gray-800 font-semibold hover:text-gray-400 focus:outline-none hover:cursor-pointer"
        >
          {isPasswordVisible ? <span>Hide</span> : <span>Show</span>}
        </button>
      )}
    </div>
  );
}
