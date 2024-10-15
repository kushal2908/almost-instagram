import Form from "@/components/pages/auth/Form";
import ImagePage from "@/components/pages/auth/ImagePage";
import { APP_URL } from "@/utils/app_urls";
import { auth } from "@/utils/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

type Props = {};

export default function AuthIndex({}: Props) {
  const [user, loading, _] = useAuthState(auth);

  if (user) {
    return <Navigate to={APP_URL.HOME} />;
  }

  return (
    <>
      {loading ? null : (
        <div className="bg-gray-50">
          <div className="flex justify-center items-center h-screen container mx-auto">
            <ImagePage />
            <Form />
          </div>
        </div>
      )}
    </>
  );
}
