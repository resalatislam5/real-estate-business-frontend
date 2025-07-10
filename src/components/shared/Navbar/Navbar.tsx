"use client";
import { navbarItems } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";
import { IoArrowUpOutline, IoCloseSharp } from "react-icons/io5";
import CustomLink from "../CustomLink";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Navbar = () => {
  // responsive navbar open and close state
  const [open, setOpen] = useState(false);
  // when scrolling then show button
  const [showButton, setShowButton] = useState(false);

  //  login user
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled
      if (window.scrollY > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      // Hide the button after 9 seconds
      // setTimeout(() => {
      //   setShowButton(false);
      // }, 9000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const wishlistCount = useSelector(
    (data: RootState) => data.wishlist.totalWishlistItems
  );
  // active path
  const pathName = usePathname();
  return (
    <header
      id="scrool-top"
      className={`${open && "!mb-0"} relative sm:mb-[100px] mb-[80px]`}
    >
      {/* responsive mobile navbar */}
      <div
        className={`${
          open ? "w-full block" : "w-0 hidden"
        } bg-white h-screen fixed overflow-y-scroll pb-5 z-20`}
      >
        {/* logo */}
        <div className="flex justify-between items-center p-5 shadow-lg ">
          <Link className="flex gap-2 items-center  font-light" href={"/"}>
            <Image width={50} height={50} src={"/logo.png"} alt="logo" />{" "}
            <span className="font-light">Real estate</span>
          </Link>
          {/* close button */}
          <button onClick={() => setOpen(false)} className="text-xl">
            <IoCloseSharp />
          </button>
        </div>
        <div className="p-5">
          {/* main items */}
          <div className="flex flex-col gap-5 mt-4">
            {navbarItems.map((e) => (
              <Link
                onClick={() => setOpen(false)}
                className="hover:text-primary"
                key={e.id}
                href={e.to}
              >
                {e.name}
                <hr className="mt-3" />
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <h1 className="text-3xl text-gray-600">Contact Us</h1>
            <div>
              <p className="text-primary">Email address</p>
              <a href="mailto:resalatislam5@gmail.com">
                resalatislam5@gmail.com
              </a>
            </div>
            <CustomLink style="w-fit" to="/login">
              Login
            </CustomLink>
          </div>
        </div>
      </div>
      {/* main navbar */}
      <div
        className={`${
          open && "hidden"
        } fixed top-0 left-0 min-w-full z-50 bg-white  shadow-sm`}
      >
        <div className="max-w-screen-2xl mx-auto px-5 flex justify-between items-center gap-5 lg:py-7 py-4 xl:text-lg lg:text-sm text-lg text-secondary">
          {/* logo */}
          <div>
            <Link
              className="flex flex-wrap gap-2 items-center  font-light"
              href={"/"}
            >
              <Image width={50} height={50} src={"/logo.png"} alt="logo" />{" "}
              <span className="font-light">Real estate</span>
            </Link>
          </div>
          {/* main items */}
          <div className="lg:flex hidden items-center xl:gap-10 gap-7">
            {navbarItems.map((e) => (
              <Link
                className={`${
                  pathName === e.to && "text-primary"
                } hover:text-primary`}
                key={e.id}
                href={e.to}
              >
                {e.name}
              </Link>
            ))}
          </div>
          {/* login */}
          <div className="flex sm:gap-8 gap-5 items-center">
            <a
              href={"tel:+8801765975545"}
              className="flex items-center gap-2 hover:text-primary"
            >
              <span className="text-primary sm:border-none border border-primary p-2 rounded-lg hover:bg-secondary sm:hover:bg-transparent text-sm sm:text-lg">
                <FaPhoneAlt />
              </span>
              <span className="sm:flex hidden">+8801765975545</span>
            </a>
            <Link className="relative group" href={"/dashboard/wishlist"}>
              <GiSelfLove className="text-2xl text-primary" />
              <p className="absolute text-xs -top-1 -right-1 bg-primary text-white w-4 h-4 flex justify-center items-center rounded-full">
                {wishlistCount}
              </p>
            </Link>
            {user?.token ? (
              <CustomLink
                style="sm:flex hidden hover:bg-white hover:!text-primary"
                to="/dashboard/wishlist"
              >
                Dashboard
              </CustomLink>
            ) : (
              <CustomLink style="sm:flex hidden" to="/login">
                Login
              </CustomLink>
            )}
            <button
              onClick={() => setOpen(!open)}
              className="text-primary text-3xl flex lg:hidden"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </div>

      {/* top-scroll-button */}
      {showButton && (
        <Link
          href={"#scrool-top"}
          className="fixed sm:bottom-8 bottom-5 sm:right-8 right-5 bg-white shadow-md p-2 rounded-full z-50"
        >
          <IoArrowUpOutline className="text-2xl font-light" />
        </Link>
      )}
    </header>
  );
};

export default Navbar;
