import TextInput from "@/components/Inputs/TextInput";
import { auth } from "@/utils/firebase/firebase";
import { LOGIN_EROR } from "@/utils/firebase/firebaseErrors";
import { SET_TOKEN } from "@/utils/tokes";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const handleSignIn = async () => {
    if (!email || !password) return;

    try {
      const res: any = await signInWithEmailAndPassword(email, password);
      if (res) {
        SET_TOKEN(res?.user?.stsTokenManager?.accessToken);
      }
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {error && <p className="text-red-500 text-xs">{LOGIN_EROR}</p>}
      <TextInput placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-400 text-white font-medium px-3 py-1 rounded-lg mt-2 hover:bg-blue-500"
        onClick={handleSignIn}
        disabled={loading}
      >
        Log in
      </button>

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
  );
}
