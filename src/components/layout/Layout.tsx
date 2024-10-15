import { APP_URL } from "@/utils/app_urls";
import { auth } from "@/utils/firebase/firebase";
import { GET_TOKEN } from "@/utils/tokes";
import {
  IconBrandSafari,
  IconHeart,
  IconHome,
  IconSearch,
  IconSend,
  IconSquareRoundedPlus,
  IconUser,
} from "@tabler/icons-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, Outlet } from "react-router-dom";

export default function Layout() {
  const [user, _, error] = useAuthState(auth);

  if (!user || error) {
    return <Navigate to={APP_URL.AUTH} />;
  }
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white flex flex-col border-e border-gray-300">
          <nav className="flex-1 p-4">
            <ul>
              <li className="mb-2"></li>
              {menu?.map((d: any) => (
                <li key={d?.label} className="mb-4">
                  <Link to={d?.link} className="flex gap-2 py-2 hover:text-gray-700">
                    {d?.label === "Notifications" ? (
                      <div className="relative inline-block">
                        {d?.icon}
                        <span className="absolute top-0 right-0 block h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
                      </div>
                    ) : (
                      d?.icon
                    )}
                    {d?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 px-6 py-4  max-w-[800px] mx-auto">
          <Outlet />
        </main>
        <aside className="w-64  flex flex-col"></aside>
      </div>
    </div>
  );
}

const menu = [
  {
    label: "Home",
    icon: <IconHome />,
    link: APP_URL.HOME,
  },
  {
    label: "Search",
    icon: <IconSearch />,
    link: "#",
  },
  {
    label: "Explore",
    icon: <IconBrandSafari />,
    link: "#",
  },
  {
    label: "Messages",
    icon: <IconSend />,
    link: "#",
  },
  {
    label: "Notifications",
    icon: <IconHeart />,
    link: "#",
  },
  {
    label: "Create",
    icon: <IconSquareRoundedPlus />,
    link: "#",
  },
  {
    label: "Profile",
    icon: <IconUser />,
    link: "#",
  },
];
