"use client";
import useLogout from "@/components/hooks/useLogout";
import { shortId } from "@/components/utils/shortId";
import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import { HiOutlineLogout, HiUsers } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
import { LuArrowRight, LuMessagesSquare } from "react-icons/lu";
import {
  MdAddHomeWork,
  MdHomeWork,
  MdOutlineKeyboardArrowDown,
  MdRateReview,
  MdReviews,
} from "react-icons/md";
import { useSelector } from "react-redux";

const dashBoardNavItems = {
  user: [
    {
      id: shortId(),
      name: "Home",
      icon: <FaHome />,
      to: "/",
    },
    {
      id: shortId(),
      name: "Wishlist",
      icon: <GiSelfLove />,
      to: "/dashboard/wishlist",
    },
    {
      id: shortId(),
      name: "Profile",
      icon: <ImProfile />,
      to: "/dashboard/profile",
    },
  ],
  admin: [
    {
      id: shortId(),
      name: "Home",
      icon: <FaHome />,
      to: "/",
    },
    {
      id: shortId(),
      name: "Wishlist",
      icon: <GiSelfLove />,
      to: "/dashboard/wishlist",
    },
    {
      id: shortId(),
      name: "Profile",
      icon: <ImProfile />,
      to: "/dashboard/profile",
    },
    {
      id: shortId(),
      name: "Message",
      icon: <LuMessagesSquare />,
      to: "/dashboard/message",
    },
    {
      id: shortId(),
      name: "All Properties",
      icon: <MdHomeWork />,
      to: "/dashboard/all-properties",
    },
    {
      id: shortId(),
      name: "Create Properties",
      icon: <MdAddHomeWork />,
      to: "/dashboard/post-home",
    },
    {
      id: shortId(),
      name: "All Users",
      icon: <HiUsers />,
      to: "/dashboard/all-users",
    },
    {
      id: shortId(),
      name: "All Testimonial",
      icon: <MdReviews />,
      to: "/dashboard/all-testimonial",
    },
    {
      id: shortId(),
      name: "Create Testimonial",
      icon: <MdRateReview />,
      to: "/dashboard/create-testimonial",
    },
  ],
};
const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);
  const path = usePathname();

  const user = useSelector((state: RootState) => state.user.user);

  const { logOut } = useLogout();

  return (
    <div className="flex relative">
      {/* menu */}
      <div
        className={`${
          isOpen ? "w-24" : "w-80"
        }  bg-[#F1F2F7] text-[#9EA3AB] h-screen fixed duration-300 z-40`}
      >
        {/* logo */}
        <div
          className={`flex ${
            isOpen ? "gap-2" : "justify-between h-16 gap-4"
          } p-4 border-b justify-between`}
        >
          {isOpen ? (
            <Image width={30} height={20} src={"/logo.png"} alt="logo" />
          ) : (
            <p className="text-3xl">Real Estate</p>
          )}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <LuArrowRight className="text-xl" />
            ) : (
              <FiAlignJustify className="text-3xl" />
            )}
          </button>
        </div>
        {/* menu */}
        <div
          className={`mt-10 ${
            isOpen ? "px-4" : "px-8"
          } flex flex-col gap-3 text-lg`}
        >
          <p className="text-sm mb-4">Menu</p>
          {dashBoardNavItems[user?.role as "user" | "admin"]?.map((e) => (
            <Link
              className={`${
                path === e.to && "text-primary bg-orange-100 rounded-lg py-2"
              } flex gap-2 items-center ${
                isOpen ? "p-1 text-2xl justify-center" : "px-3"
              } `}
              key={e.id}
              href={e.to}
            >
              {e.icon}
              {!isOpen && <>{e.name}</>}
            </Link>
          ))}
        </div>
      </div>
      {/* top menu */}
      <div>
        <div
          className={`${
            isOpen ? "pl-[112px]" : "pl-[112px] sm:pl-[336px]"
          } bg-white w-screen h-16 border-b sm:pr-[50px] pr-5`}
        >
          {/*  */}
          <div className=" flex justify-end items-center h-full gap-3 relative text-lg">
            {/*  */}
            <div
              onClick={() => setIsLogOut(!isLogOut)}
              className="flex justify-end items-center h-full gap-3"
            >
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>

              <p className="">{user?.name}</p>
              <MdOutlineKeyboardArrowDown />
            </div>
            {/*  */}
            {isLogOut && (
              <div className="absolute top-14 right-0 bg-white shadow-lg py-2 text-gray-500 px-8  w-48 rounded-lg">
                <button
                  onClick={() => logOut()}
                  className="flex items-center gap-2"
                >
                  <HiOutlineLogout />
                  Log out
                </button>
              </div>
            )}
          </div>
          {/*  */}
        </div>
        {/*  */}
        <div
          className={`${
            isOpen ? "pl-[112px] sm:pl-[146px]" : "pl-[112px] sm:pl-[370px]"
          }   sm:pr-[50px] pr-5 sm:mt-10 mt-5 w-full sm:pb-10 pb-5 max-w-[2500px]`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
