import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { shortId } from "../../utils/shortId";

const discoverItems = [
  {
    id: shortId(),
    name: "Residential",
    to: "/",
    style: "",
  },
  {
    id: shortId(),
    name: "Apartment",
    to: "/",
    style: "ml-5",
  },
  {
    id: shortId(),
    name: "Single Family Home",
    to: "/",
    style: "ml-5",
  },
  {
    id: shortId(),
    name: "Villa",
    to: "/",
    style: "ml-5",
  },
];
const Footer = () => {
  return (
    <footer className="bg-secondary text-white text-base">
      <div className="max-w-screen-xl mx-auto pt-20 px-5  ">
        <div className="flex lg:flex-nowrap flex-wrap justify-between gap-10">
          <div className="flex flex-col gap-3 max-w-md">
            <p className="pb-4 text-xl">About Site</p>
            <div className="items-flex-2  font-light">
              <Image width={50} height={50} src={"/logo.png"} alt="logo" />{" "}
              <span className="font-light">Real estate</span>
            </div>
            <p className="text-sm">
              Houzez is a premium WordPress theme for real estate where modern
              aesthetics are combined with tasteful simplicity.
            </p>
            <Link
              href={"/contact-us"}
              className="mt-2 hover:text-primary items-flex-2"
            >
              Read More <FaChevronRight className="text-xs" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="pb-4 text-xl">Contact Us</p>
            <div className="items-flex-2">
              <CiLocationOn /> Gaibandha, Dhaka, Bangladesh
            </div>
            <a href="mailto:resalatislam5@gmail.com" className="items-flex-2">
              <MdEmail /> resalatislam5@gmail.com
            </a>

            <Link
              href={"/contact-us"}
              className="mt-2 hover:text-primary items-flex-2"
            >
              Contact Us <FaChevronRight className="text-xs" />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="pb-4 text-xl">Discover</p>

            {discoverItems.map((e) => (
              <Link
                key={e.id}
                href={e.to}
                className={`${e.style} hover:text-primary items-flex-2`}
              >
                <FaChevronRight className="text-xs" /> {e.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-10 w-full h-[1px] bg-gray-600 " />
        <div className="flex flex-wrap gap-2 justify-between py-8 text-gray-500">
          <p className="">Copyright © 2024 Proty - real estate. </p>
          <div className="">Created By - Resalat Islam</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
