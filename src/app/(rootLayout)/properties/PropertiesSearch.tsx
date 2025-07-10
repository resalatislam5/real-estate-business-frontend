"use client";
import CustomLink from "@/components/shared/CustomLink";
import { shortId } from "@/components/utils/shortId";
import { useEffect, useRef, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

const PropertiesItems = [
  { id: shortId(), name: "Family House" },
  { id: shortId(), name: "Apartment" },
  { id: shortId(), name: "Villa" },
  { id: shortId(), name: "Office" },
  { id: shortId(), name: "Land" },
];
const LocationItems = [
  { id: shortId(), name: "Dhaka" },
  { id: shortId(), name: "Chittagong" },
  { id: shortId(), name: "Sylhet" },
  { id: shortId(), name: "Khulna" },
  { id: shortId(), name: "Rajshahi" },
  { id: shortId(), name: "Barishal" },
  { id: shortId(), name: "Rangpur" },
  { id: shortId(), name: "Mymensingh" },
];

const AdvancedSearchSelectItems = [
  {
    id: shortId(),
    name: "Property Status",
    value: [
      { id: shortId(), name: "For Sale" },
      { id: shortId(), name: "For Rent" },
    ],
  },
  {
    id: shortId(),
    name: "Bedrooms",
    value: [
      { id: shortId(), name: "1" },
      { id: shortId(), name: "2" },
      { id: shortId(), name: "3" },
      { id: shortId(), name: "4" },
      { id: shortId(), name: "5" },
    ],
  },
  {
    id: shortId(),
    name: "Bathrooms",
    value: [
      { id: shortId(), name: "1" },
      { id: shortId(), name: "2" },
      { id: shortId(), name: "3" },
      { id: shortId(), name: "4" },
      { id: shortId(), name: "5" },
    ],
  },
];

const advancedSearchCheckItems = [
  {
    id: shortId(),
    name: "Air Conditioning",
  },
  {
    id: shortId(),
    name: "Swimming Pool",
  },
  {
    id: shortId(),
    name: "Central Heating",
  },
  {
    id: shortId(),
    name: "Laundry Room",
  },
  {
    id: shortId(),
    name: "Gym",
  },
  {
    id: shortId(),
    name: "Alarm",
  },
  {
    id: shortId(),
    name: "Window Covering",
  },
];
const PropertiesSearch = () => {
  const [openAdvancedSearch, setOpenAdvancedSearch] = useState(false);
  const advanceSearchRef = useRef<HTMLDivElement>(null);

  const handleAdvancedSearch = () => {
    setOpenAdvancedSearch(!openAdvancedSearch);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      advanceSearchRef.current &&
      !advanceSearchRef.current.contains(e.target as Node)
    ) {
      setOpenAdvancedSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section className="inner-main-width !my-10 text-gray-600">
      <form
        action=""
        className="flex flex-wrap lg:flex-nowrap lg:justify-between justify-center gap-5 relative"
      >
        <input
          type="text"
          className="properties-search sm:min-w-80"
          placeholder="Enter your key..."
        />
        <select
          className="properties-search"
          name=""
          id=""
          defaultValue={"test"}
        >
          <option>Property Type</option>
          {PropertiesItems.map((e) => {
            return (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
        <select
          className="properties-search"
          name=""
          id=""
          defaultValue={"test"}
        >
          <option>Location</option>
          {LocationItems.map((e) => {
            return (
              <option key={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
        <div
          onClick={handleAdvancedSearch}
          className="properties-search items-flex-2 justify-between cursor-pointer"
        >
          Advanced Search <CiMenuKebab />
        </div>
        <CustomLink style="text-nowrap sm:w-fit w-full">Search Now</CustomLink>
        {/* TODO: Implement advance search*/}
        {openAdvancedSearch && (
          <div
            ref={advanceSearchRef}
            className="absolute lg:top-16 sm:top-28 top-64 left-0 min-w-full bg-white shadow-lg p-5 z-20 "
          >
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
              {AdvancedSearchSelectItems.map((e) => (
                <select
                  key={e.id}
                  className="border bg-[#F7F8FA] min-w-full py-4 px-2 rounded-lg"
                  name=""
                  id=""
                  defaultValue={"test"}
                >
                  <option>{e.name}</option>
                  {e?.value?.map((e) => {
                    return (
                      <option key={e.id} value={e.name}>
                        {e.name}
                      </option>
                    );
                  })}
                </select>
              ))}
            </div>
            <div className="grid  md:grid-cols-2 pt-8 lg:gap-20 gap-5">
              <div className="flex flex-col gap-5">
                <div className="">
                  <input
                    type="text"
                    className="border bg-[#F7F8FA] min-w-full py-4 px-2 rounded-lg"
                    placeholder="Min Price"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="border bg-[#F7F8FA] min-w-full py-4 px-2 rounded-lg"
                    placeholder="Max Price"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 max-[420px]:grid-cols-1 gap-5 pt-3 md:pt-0">
                {advancedSearchCheckItems.map((e) => (
                  <div key={e.id} className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">{e.name}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </form>
    </section>
  );
};

export default PropertiesSearch;
