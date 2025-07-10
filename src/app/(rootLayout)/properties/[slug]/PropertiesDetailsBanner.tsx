import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

const PropertiesDetailsBanner = ({
  title,
  property_status,
  address,
  price,
  sq_ft,
  image,
}: {
  title: string;
  property_status: string;
  address: string;
  price: number;
  sq_ft: number;
  image: string;
}) => {
  return (
    <div className="my-10">
      <div className="flex justify-between mt-8 sm:flex-nowrap flex-wrap gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="sm:text-4xl text-2xl font-normal">{title}</h1>
          <div className="text-sm font-semibold flex gap-3">
            <button className="px-4 py-1 bg-primary text-white rounded-sm">
              Featured
            </button>
            <button className="px-4 py-1 bg-gray-400 text-white rounded-sm">
              {property_status}
            </button>
          </div>
          <p className="flex items-center gap-1 text-gray-600">
            <IoLocationOutline /> {address}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="sm:text-6xl text-4xl">{price}</h1>
          <p className="text-gray-500 text-lg">{sq_ft}/sq ft</p>
        </div>
      </div>
      <div className="sm:mt-10 mt-5">
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`}
          alt={title}
          width={1280}
          height={600}
          className="max-h-[600px]"
        />
      </div>
    </div>
  );
};

export default PropertiesDetailsBanner;
