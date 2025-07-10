import { shortId } from "@/components/utils/shortId";
import { FaBed } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LuHandshake } from "react-icons/lu";

// header text
export const navbarItems = [
  {
    id: shortId(),
    name: "Home",
    to: "/",
  },
  {
    id: shortId(),
    name: "Properties",
    to: "/properties",
  },
  {
    id: shortId(),
    name: "About US",
    to: "/about-us",
  },
  {
    id: shortId(),
    name: "Contact",
    to: "/contact",
  },
];

// home counter text

export const counterItems = [
  {
    id: shortId(),
    icon: <LuHandshake />,
    counter: "100K+",
    name: "Served Clients",
    style: "bg-[#FAEDCB]",
  },
  {
    id: shortId(),
    icon: <IoIosPeople />,
    counter: "120+",
    name: "Staff Members",
    style: "bg-[#D9EEE9]",
  },
  {
    id: shortId(),
    icon: <IoLocationOutline />,
    counter: "50+",
    name: "Locations",
    style: "bg-[#D7E7F8]",
  },
  {
    id: shortId(),
    icon: <FaBed />,
    counter: "428+",
    name: "Available Rooms",
    style: "bg-[#EADFFB]",
  },
];

export const chooseItems = [
  {
    id: shortId(),
    icon: <HiOutlineBuildingOffice2 />,
    name: "Wide Renge Of Properties",
    text: "With a robust selection of popular properties on hand, as well as leading properties from real estate experts.",
  },
  {
    id: shortId(),
    icon: <IoIosPeople />,
    name: "Trusted by thousands",
    text: "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
  },
  {
    id: shortId(),
    icon: <FaSackDollar />,
    name: "Financing made easy",
    text: "Our stress-free finance department that can find financial solutions to save you money.",
  },
];

export const searchByCityItems = [
  {
    id: shortId(),
    img: "/image7.png",
    name: "Islamabad",
    text: "Federal",
  },
  {
    id: shortId(),
    img: "/image.png",
    name: "Lahor",
    text: "Punjab",
  },
  {
    id: shortId(),
    img: "/image1.png",
    name: "Multan",
    text: "Punjab",
  },
  {
    id: shortId(),
    img: "/image4.png",
    name: "Karachi",
    text: "Sindh",
  },
  {
    id: shortId(),
    img: "/image5.png",
    name: "Peshawar",
    text: "KP",
  },
  {
    id: shortId(),
    img: "/image2.png",
    name: "Faisalabad",
    text: "Punjab",
  },
  {
    id: shortId(),
    img: "/image3.png",
    name: "Rwalpindi",
    text: "Punjab",
  },
  {
    id: shortId(),
    img: "/image6.png",
    name: "Sawat",
    text: "KP",
  },
];

export const AgentsItems = [
  {
    id: shortId(),
    img: "/agents-1.png",
    name: "Robert Fox",
    title: "Lead Designer",
  },
  {
    id: shortId(),
    img: "/agents-2.png",
    name: "Floyd Miles",
    title: "CEO, Director ",
  },
  {
    id: shortId(),
    img: "/agents-3.png",
    name: "Darle. Robertson",
    title: "Marketer",
  },
  {
    id: shortId(),
    img: "/agents-4.png",
    name: "Nguyen",
    title: "Project Manager",
  },
];

export const DivisionOptions = [
  {
    id: shortId(),
    name: "Dhaka",
  },
  {
    id: shortId(),
    name: "Khulna",
  },
  {
    id: shortId(),
    name: "Barisal",
  },
  {
    id: shortId(),
    name: "Rangpur",
  },
  {
    id: shortId(),
    name: "Chittagong",
  },
  {
    id: shortId(),
    name: "Rajshahi",
  },
  {
    id: shortId(),
    name: "Sylhet",
  },
  {
    id: shortId(),
    name: "Mymensingh",
  },
];
