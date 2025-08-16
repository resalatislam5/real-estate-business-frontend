"use client";
import useHandlePropertiesSearch from "@/components/hooks/useHandlePropertiesSearch";
import CustomLink from "@/components/shared/CustomLink";
import { shortId } from "@/components/utils/shortId";
import { propertiesSearchTypes } from "@/constant/interfaceItems";
import { AiOutlineClose } from "react-icons/ai";
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
    name: "property_status",
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

const PropertiesSearch = ({
  handleSearch,
  openSearchFilter,
  setOpenSearchFilter,
}: {
  handleSearch: (state: propertiesSearchTypes) => void;
  openSearchFilter: boolean;
  setOpenSearchFilter: (state: boolean) => void;
}) => {
  const {
    handleAdvancedSearch,
    handleInputState,
    setHandleOtherTags,
    inputState,
    handleOthersTags,
    advanceSearchRef,
    openAdvancedSearch,
  } = useHandlePropertiesSearch(handleSearch);

  return (
    <>
      {/* desktop view */}
      <section className="inner-main-width !my-10 text-gray-600 md:block hidden">
        <form className="flex flex-wrap lg:flex-nowrap lg:justify-between justify-center gap-5 relative">
          <input
            type="text"
            className="properties-search sm:min-w-80"
            placeholder="Enter your key..."
            name="title"
            onChange={handleInputState}
          />
          <select
            className="properties-search"
            id=""
            defaultValue={inputState.property_type}
            name="property_type"
            onChange={handleInputState}
          >
            <option value={""}>Property Type</option>
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
            id=""
            defaultValue={inputState.division}
            name="division"
            onChange={handleInputState}
          >
            <option value={""}>Location</option>
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
          <CustomLink style="text-nowrap sm:w-fit w-full">
            Search Now
          </CustomLink>
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
                    id=""
                    defaultValue={
                      inputState[e.name as keyof propertiesSearchTypes]
                    }
                    name={e.name}
                    onChange={handleInputState}
                  >
                    <option value={""}>
                      {e.name === "property_status"
                        ? "Property Status"
                        : e.name}
                    </option>
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
                      type="number"
                      className="border bg-[#F7F8FA] min-w-full py-4 px-2 rounded-lg"
                      placeholder="Min Price"
                      name="min_price"
                      defaultValue={inputState.min_price}
                      onChange={handleInputState}
                    />
                  </div>
                  <div className="">
                    <input
                      type="number"
                      className="border bg-[#F7F8FA] min-w-full py-4 px-2 rounded-lg"
                      placeholder="Max Price"
                      name="max_price"
                      defaultValue={inputState.max_price}
                      onChange={handleInputState}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 max-[420px]:grid-cols-1 gap-5 pt-3 md:pt-0">
                  {advancedSearchCheckItems.map((e) => (
                    <div key={e.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="tags"
                        name="tags"
                        onClick={(item) => {
                          const target = item.target as HTMLInputElement;
                          const tag = target.checked;
                          if (!tag) {
                            const newTags = handleOthersTags.tags.filter(
                              (tag) => tag !== e.name
                            );
                            setHandleOtherTags({ tags: newTags });
                          }
                          if (tag) {
                            setHandleOtherTags({
                              tags: [e.name, ...handleOthersTags["tags"]],
                            });
                          }
                        }}
                      />
                      <label htmlFor="tags">{e.name}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </form>
      </section>

      {/* mobile view */}
      <div
        className={`${
          openSearchFilter ? "flex" : "hidden"
        } md:hidden w-96 h-screen bg-white fixed top-0 left-0 z-10 overflow-y-auto pt-[100px] pb-10`}
      >
        <form className="flex flex-col px-3 gap-5  relative">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold text-black/80">
              Customize View
            </h1>
            <button onClick={() => setOpenSearchFilter(false)}>
              <AiOutlineClose />
            </button>
          </div>
          {/* <input
            type="text"
            className="properties-search sm:min-w-80"
            placeholder="Enter your key..."
            name="title"
            onChange={handleInputState}
          /> */}
          <select
            className="border bg-[#F7F8FA] min-w-full py-4 px-2 rounded-lg"
            id=""
            defaultValue={inputState.property_type}
            name="property_type"
            onChange={handleInputState}
          >
            <option value={""}>Property Type</option>
            {PropertiesItems.map((e) => {
              return (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              );
            })}
          </select>
          <select
            className="border bg-[#F7F8FA] min-w-full py-4 px-2 rounded-lg"
            id=""
            defaultValue={inputState.division}
            name="division"
            onChange={handleInputState}
          >
            <option value={""}>Location</option>
            {LocationItems.map((e) => {
              return (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              );
            })}
          </select>

          {/* TODO: Implement advance search*/}

          {AdvancedSearchSelectItems.map((e) => (
            <select
              key={e.id}
              className="border bg-[#F7F8FA] min-w-full py-4 px-2 rounded-lg"
              id=""
              defaultValue={inputState[e.name as keyof propertiesSearchTypes]}
              name={e.name}
              onChange={handleInputState}
            >
              <option value={""}>
                {e.name === "property_status" ? "Property Status" : e.name}
              </option>
              {e?.value?.map((e) => {
                return (
                  <option key={e.id} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          ))}
          <div className="">
            <input
              type="number"
              className="border bg-[#F7F8FA] min-w-full py-4 px-2 rounded-lg"
              placeholder="Min Price"
              name="min_price"
              defaultValue={inputState.min_price}
              onChange={handleInputState}
            />
          </div>
          <div className="">
            <input
              type="number"
              className="border bg-[#F7F8FA] min-w-full py-4 px-2 rounded-lg"
              placeholder="Max Price"
              name="max_price"
              defaultValue={inputState.max_price}
              onChange={handleInputState}
            />
            <div className="grid grid-cols-2 max-[420px]:grid-cols-1 gap-5 pt-3 md:pt-0">
              {advancedSearchCheckItems.map((e) => (
                <div key={e.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="tags"
                    name="tags"
                    onClick={(item) => {
                      const target = item.target as HTMLInputElement;
                      const tag = target.checked;
                      if (!tag) {
                        const newTags = handleOthersTags.tags.filter(
                          (tag) => tag !== e.name
                        );
                        setHandleOtherTags({ tags: newTags });
                      }
                      if (tag) {
                        setHandleOtherTags({
                          tags: [e.name, ...handleOthersTags["tags"]],
                        });
                      }
                    }}
                  />
                  <label htmlFor="tags">{e.name}</label>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => setOpenSearchFilter(false)}
            type="button"
            className="bg-primary text-white rounded-md py-3"
          >
            Close
          </button>
        </form>
      </div>
    </>
  );
};

export default PropertiesSearch;
