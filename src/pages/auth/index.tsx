import Form from "@/components/pages/auth/Form";
import ImagePage from "@/components/pages/auth/ImagePage";

type Props = {};

export default function AuthIndex({}: Props) {
  return (
    <>
      <div className="bg-gray-50">
        <div className="flex justify-center items-center h-screen container mx-auto">
          <ImagePage />
          <Form />
        </div>
      </div>
    </>
  );
}
