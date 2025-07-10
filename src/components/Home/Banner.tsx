import CustomLink from "@/components/shared/CustomLink";
import { IoSearch } from "react-icons/io5";

const Banner = () => {
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
          <div className="bg-white rounded-lg p-3 mt-8 flex gap-3 max-w-4xl mx-auto sm:text-lg text-sm">
            {/* select */}
            <select className="sm:px-5 focus:outline-none">
              <option className="" value="rent">
                For Rent
              </option>
              <option value="sell">For Sell</option>
            </select>
            <div className="max-h-[50%] w-[2px] bg-gray-400" />
            {/* input */}
            <input
              className="px-2 focus:outline-none w-full"
              type="text"
              placeholder="Search by place"
            />
            <CustomLink style="bg-primary text-white sm:!px-6 !px-2 hover:!bg-white hover:!text-primary">
              <span className="sm:block hidden">Search</span> <IoSearch />
            </CustomLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
