import { GET_TOKEN } from "@/utils/tokes";
import {
  IconBrandSafari,
  IconCirclePlus,
  IconCompass,
  IconHeart,
  IconHome,
  IconSearch,
  IconSend,
  IconSquarePlus,
  IconSquareRoundedPlus,
  IconUser,
} from "@tabler/icons-react";
import { Navigate } from "react-router-dom";

type Props = {
  children: any;
};

export default function Layout({ children }: Props) {
  const hasToken = GET_TOKEN;

  //   if (!hasToken) {
  //     return <Navigate to="/" />;
  //   }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white flex flex-col">
          <nav className="flex-1 p-4">
            <ul>
              <li className="mb-2"></li>
              {menu?.map((d: any) => (
                <li key={d?.label} className="mb-4">
                  <a href="#" className="flex gap-2 py-2 hover:text-gray-700">
                    {d?.label === "Notifications" ? (
                      <div className="relative inline-block">
                        {d?.icon}
                        <span className="absolute top-0 right-0 block h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
                      </div>
                    ) : (
                      d?.icon
                    )}
                    {d?.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-10 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}

const menu = [
  {
    label: "Home",
    icon: <IconHome />,
    link: "#",
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
