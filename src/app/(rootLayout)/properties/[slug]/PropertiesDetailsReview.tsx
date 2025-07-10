import Image from "next/image";
import PropertiesDetailsSection from "./PropertiesDetailsSection";
import Rating from "@/components/shared/Rating/Rating";
import { IoLinkOutline } from "react-icons/io5";

const PropertiesDetailsReview = () => {
  return (
    <PropertiesDetailsSection title="Write a Review">
      <div className="flex justify-between flex-wrap gap-5 items-center mt-5">
        <div className="flex items-center gap-4">
          <div className="">
            <Image
              src={"/avater.png"}
              width={50}
              height={50}
              alt="avater"
              className="rounded-full"
            />
          </div>
          <div className="">
            <h2 className="text-lg font-medium">Post as Guest</h2>
            <p className="text-gray-500 text-base">Your opinion matters</p>
          </div>
        </div>
        {/*  */}
        <Rating />
      </div>
      {/*  */}
      <div className="mt-10 pb-5 flex flex-col gap-3">
        <label
          htmlFor="image"
          className="items-flex-2 cursor-pointer hover:text-primary"
        >
          <IoLinkOutline />
          <h2 className="text-sm font-medium">Add Photos</h2>
          <input type="file" id="image" className="hidden" />
        </label>
        <input
          type="text"
          className="properties-search min-w-full !bg-[#F7F8FA]"
          placeholder="Name"
        />
        <textarea
          className="properties-search min-w-full !bg-[#F7F8FA]"
          placeholder="Write a review"
          rows={20}
        ></textarea>
        <button className="bg-primary text-white py-3 rounded-lg mt-4 w-fit px-5">
          Post Review
        </button>
      </div>
    </PropertiesDetailsSection>
  );
};

export default PropertiesDetailsReview;
