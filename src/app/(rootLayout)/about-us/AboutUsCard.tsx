"use client";
import CustomLink from "@/components/shared/CustomLink";
import PopUpDetails from "@/components/shared/PopUpDetails/PopUpDetails";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaStar, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiExpand } from "react-icons/gi";

const AboutUsCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PopUpDetails isOpen={isOpen} setIsOpen={setIsOpen}>
        {/* first */}
        <div className="flex gap-4 items-center">
          <Image
            src="/man-1.jpg"
            width={200}
            height={200}
            className="rounded-full w-[100px] h-[100px]"
            alt=""
          />
          <div className="sm:text-lg text-base">
            <p className="text-gray-500">Customer Advisor</p>
            <p className="sm:text-2xl text-xl">Resalat Islam</p>
            <div className="flex gap-2 items-center">
              <p className="">4.6</p>
              <div className="flex gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="flex flex-col gap-1 sm:text-lg text-base">
          <p className="sm:text-2xl text-xl  font-semibold sm:mb-3 mb-2">
            Contact Info
          </p>
          <div className="flex gap-8">
            <p className="min-w-16">Number: </p>
            <p className="text-gray-500">+8801765975545</p>
          </div>
          <div className="flex gap-8">
            <p className="min-w-16">Email: </p>
            <p className="text-gray-500">resalatislam5@gmail.com</p>
          </div>
          <div className="flex gap-8">
            <p className="min-w-16">Address: </p>
            <p className="text-gray-500">Dhaka, Bangladesh</p>
          </div>
          <CustomLink to="https://wa.me/+8801765975545" style="w-fit mt-4">
            WhatsApp
          </CustomLink>
        </div>
        {/* third */}
        <div className="sm:text-lg text-sm sm:mt-0 mt-3">
          <p className="sm:text-2xl text-xl font-semibold sm:mb-3 mb-2">
            Details
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aut
            voluptates distinctio alias, explicabo ducimus id nobis vero
            expedita modi quia, velit voluptas hic facilis fuga aliquam? Dolorum
            doloremque ipsum quas dignissimos vitae quam suscipit blanditiis
            reiciendis, repellat culpa sint quidem enim rem ratione porro modi
            illum perspiciatis tenetur. Quos maiores odit a? Assumenda
            voluptatibus distinctio maiores, quaerat quidem sit ratione id
            officiis recusandae quasi, nulla dignissimos nemo. Porro voluptas
            alias quisquam tenetur, ducimus esse officiis ut corporis nostrum
            magni earum, magnam, iste laudantium nesciunt quas laborum harum?
            Saepe fugit, dicta dolor perferendis ratione quidem ipsa. Et culpa
            consequatur recusandae!
          </p>
        </div>
      </PopUpDetails>
      {/* card */}
      <div className="group">
        <div
          onClick={() => setIsOpen(true)}
          className="overflow-hidden relative cursor-pointer"
        >
          <Image
            src="/man-1.jpg"
            width={700}
            height={300}
            className="lg:h-[250px] group-hover:scale-125 duration-1000"
            alt=""
          />
          <div className="group-hover:flex hidden w-full h-full bg-black opacity-40 absolute top-0 rounded-t-lg"></div>
          {/*  */}
          <div className="group-hover:block hidden absolute top-[50%] left-[48%]">
            <button className=" ">
              <GiExpand className="text-white text-2xl" />
            </button>
          </div>
        </div>
        <div className="py-9 bg-white text-center">
          <h2 className="text-2xl">Sophia Nell</h2>
          <p className="text-lg text-primary">Customer Advisor</p>
          {/*  */}
          <div className="mt-4 flex flex-col gap-2">
            <Link href={"tel:+8801765975545"} className="hover:text-primary">
              +8801765975545
            </Link>
            <Link
              href={"mailto:resalatislam5@gmail.com"}
              className="hover:text-primary"
            >
              resalatislam5@gmail.com
            </Link>
          </div>
          {/*  */}
          <div className="flex gap-3 px-3 justify-center mt-6">
            <Link className=" p-2 rounded-full border" href="/">
              <FaFacebookF />
            </Link>
            <Link className=" p-2 rounded-full border" href="/">
              <FaYoutube />
            </Link>
            <Link className=" p-2 rounded-full border" href="/">
              <FaLinkedinIn />
            </Link>
            <Link className=" p-2 rounded-full border" href="/">
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsCard;
