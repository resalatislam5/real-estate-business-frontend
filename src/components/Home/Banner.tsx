"use client";
import CustomLink from "@/components/shared/CustomLink";
import {
  setHomeSearchProperties,
  setProperties,
} from "@/store/slice/propertiesSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import useInputData from "../hooks/useInputData";
import { getApiWithAuthentication } from "@/api/api";

const fromState = {
  property_status: "rent",
  location: "",
};
const Banner = () => {
  const { searchProperties } = useSelector(
    (state: RootState) => state.properties
  );

  const { handleInputState, inputState } = useInputData(fromState);
  // handle search from

  // dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const data = await getApiWithAuthentication("properties");
      dispatch(setProperties(data));
    })();
  }, [dispatch]);

  useEffect(() => {
    dispatch(setHomeSearchProperties(inputState));
    console.log(inputState);
  }, [inputState, dispatch]);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <section className="banner-image sm:h-[650px] h-[380px] flex justify-center items-center text-lg">
        <div className="px-5 z-10">
          <div className="text-center text-white">
            <h1 className="sm:text-7xl text-5xl max-[370px]:text-3xl">
              Find Your Perfect Home
            </h1>
            <p className="max-[370px]:text-sm mt-3">
              Thousands of luxury home enthusiasts just like you visit our
              website.
            </p>
          </div>
          {/*  */}
          <div className="relative">
            <div className="bg-white rounded-lg p-3 mt-8 flex gap-3 max-w-4xl mx-auto sm:text-lg text-sm">
              {/* select */}
              <select
                name="property_status"
                onChange={handleInputState}
                className="sm:px-5 focus:outline-none"
              >
                <option defaultChecked className="" value="rent">
                  For Rent
                </option>
                <option value="sale">For Sale</option>
              </select>
              <div className="max-h-[50%] w-[2px] bg-gray-400" />
              {/* input */}
              <input
                className="px-2 focus:outline-none w-full"
                type="text"
                placeholder="Search by place"
                name="location"
                onChange={handleInputState}
              />

              <CustomLink style="bg-primary text-white sm:!px-6 !px-2 hover:!bg-white hover:!text-primary">
                <span className="sm:block hidden">Search</span> <IoSearch />
              </CustomLink>
            </div>
            {/* show search data */}
            <div className="w-full bg-white absolute rounded-md">
              {searchProperties?.slice(0, 4).map((item, i) => (
                <Link
                  href={`/properties/${item._id}`}
                  className="flex gap-5 p-2 group"
                  key={i}
                >
                  <div className="">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${item?.image}`}
                      alt={item.title}
                      width={100}
                      height={50}
                      className="rounded-md max-h-[60px]"
                    />
                  </div>
                  <div className="">
                    {/* show only laptop */}
                    <h3 className="lg:block hidden  group-hover:text-primary">
                      {item?.title?.length > 70
                        ? item.title.slice(0, 70) + "..."
                        : item.title}
                    </h3>
                    {/* show only tablet */}
                    <h3 className="lg:hidden sm:block hidden group-hover:text-primary">
                      {item?.title?.length > 55
                        ? item.title.slice(0, 55) + "..."
                        : item.title}
                    </h3>
                    {/* show only tablet */}
                    <h3 className="sm:hidden text-base group-hover:text-primary">
                      {item?.title?.length > 30
                        ? item.title.slice(0, 30) + "..."
                        : item.title}
                    </h3>
                    <p className="text-gray-500 text-sm group-hover:text-primary">
                      {item.address}, {item.country}
                    </p>
                  </div>
                </Link>
              ))}

              {searchProperties?.length > 4 && (
                <Link
                  href={"/properties"}
                  className="text-sm flex justify-end text text-primary mr-5 mb-2"
                >
                  See More
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
