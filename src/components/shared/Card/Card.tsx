"use client";
import { propertiesDetailsTypes } from "@/constant/interfaceItems";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsBookmarkDash, BsBookmarkPlus } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import CustomLink from "../CustomLink";
import PopUpAlert from "../PopUpAlert/PopUpAlert";

const Card = ({
  style,
  wishlist = false,
  deleteProperty,
  item,
}: {
  style?: string;
  wishlist?: boolean;
  deleteProperty?: (id: string) => void;
  item: propertiesDetailsTypes;
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [removeWishlist, setRemoveWishlist] = useState(false);
  // const dispatch = useDispatch();
  // const dataDispatch = (id: string) => {};
  return (
    <>
      <PopUpAlert
        text="Successfully added to wishlist"
        isOpen={showAlert}
        setIsOpen={setShowAlert}
      />
      <PopUpAlert
        text="Successfully removed to wishlist"
        isOpen={removeWishlist}
        setIsOpen={setRemoveWishlist}
      />
      <div
        className={`${style} rounded-lg border text-gray-500 relative text-lg group cursor-pointer`}
      >
        <div className="overflow-hidden relative rounded-t-lg">
          <Image
            width={600}
            height={300}
            className="rounded-t-lg group-hover:scale-125 duration-1000 w-[600px] h-[300px]"
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item?.image}`}
            alt="p"
          />
          <div className="group-hover:flex hidden w-full h-full bg-black opacity-40 absolute top-0 rounded-t-lg"></div>
          {/*  */}
          <div className="group-hover:block hidden absolute top-[50%] left-[48%]">
            {wishlist ? (
              <button
                onClick={() => {
                  setRemoveWishlist(true);
                }}
                className=" "
              >
                <BsBookmarkDash className="text-white text-2xl hover:text-[26px] hover:text-primary" />
              </button>
            ) : (
              <button
                onClick={() => {
                  // dataDispatch();
                  setShowAlert(true);
                }}
                className=" "
              >
                <BsBookmarkPlus className="text-white text-2xl hover:text-[26px] hover:text-primary" />
              </button>
            )}
          </div>
        </div>
        {/* top button */}
        <div className="absolute top-2 left-2 text-sm font-semibold flex gap-3 flex-wrap">
          <button className="px-4 py-1 bg-primary text-white rounded-full">
            Featured
          </button>
          <button className="px-4 py-1 bg-gray-400 text-white rounded-full">
            {item?.property_status}
          </button>
        </div>
        <div className="p-4">
          <Link
            href={`/properties/${item?._id}`}
            className="text-xl font-semibold text-black hover:text-primary"
          >
            {/* The Terraces Claremont */}
            {item?.title?.length > 22
              ? `${item?.title?.slice(0, 22)}...`
              : item?.title}
          </Link>
          <p className="flex items-center gap-1 mt-2">
            <IoLocationOutline /> {item?.address}
          </p>
          <div className="flex gap-4 mt-3 flex-wrap">
            <p className="flex gap-1 font-normal text-gray-500">
              <span className="font-semibold text-secondary">{item?.beds}</span>
              Beds
            </p>
            <p className="flex gap-1 font-normal text-gray-500">
              <span className="font-semibold text-secondary">
                {item?.baths}{" "}
              </span>
              Baths
            </p>
            <p className="flex gap-1 font-normal text-gray-500">
              <span className="font-semibold text-secondary">
                {item?.year_built}
              </span>
              SqFt
            </p>
          </div>
          <hr className="my-5" />
          <div className="flex items-center justify-between flex-wrap gap-3">
            <p className="text-2xl text-primary font-semibold">
              ${item?.price}
            </p>
            {!deleteProperty && (
              <CustomLink to={`/properties/${item?._id}`}>Details</CustomLink>
            )}
            {deleteProperty && (
              <>
                <CustomLink
                  style="w-full"
                  to={`/dashboard/edit-property/${item?._id}`}
                >
                  Edit
                </CustomLink>
                <button
                  onClick={() => deleteProperty(`${item?._id}`)}
                  className="px-5 py-2 w-full bg-primary text-white rounded-lg"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
