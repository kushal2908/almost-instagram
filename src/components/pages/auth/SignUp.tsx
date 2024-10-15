import TextInput from "@/components/Inputs/TextInput";
import { auth } from "@/utils/firebase/firebase";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { BiLogoFacebookSquare } from "react-icons/bi";

export default function SignUp({ isSuccess }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const handleSignUp = () => {
    if (!email || !password) return;

    createUserWithEmailAndPassword(email, password)
      .then(() => {
        if (user?.user) {
          isSuccess();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p className="font-medium text-gray-500">Sign up to see photos and videos from your friends.</p>
      <button className="bg-blue-400 text-white font-medium px-3 py-1 rounded-lg mt-2 w-full hover:bg-blue-500 mb-4">
        <div className="flex items-center justify-center gap-2 py-1">
          <BiLogoFacebookSquare size={20} />
          <span className="font-semibold text-sm">Login with Facebook</span>
        </div>
      </button>
      {error && <p className="text-red-500 text-xs">{error.message}</p>}
      <div className="flex flex-col gap-2">
        <TextInput placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className=" w-full bg-blue-400 text-white font-medium px-2 py-1 rounded-lg mt-4 hover:bg-blue-500"
        onClick={handleSignUp}
        disabled={loading}
      >
        Sign up
      </button>
      <p className="text-xs text-gray-500 mt-6">
        People who use our service may have uploaded your contact information to Instagram.{" "}
        <span className="text-sky-800">Learn more</span>
      </p>
      <p className="text-xs text-gray-500 mt-6">
        By signing up, you agree to our <span className="text-sky-800">Terms, </span>
        <span className="text-sky-800">Privacy Policy </span> and <span className="text-sky-800">Cookies Policy</span>
      </p>
    </div>
  );
}
