import { searchByCityItems } from "@/constant";
import HomeSection from "./HomeSection";
import Image from "next/image";

const HomeExploreApartment = () => {
  return (
    <HomeSection
      title="Explore Apartment Types"
      innerTitle="Explore all the different types of apartments so you can choose the best option for you"
    >
      <div className="mt-[48px] grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-[14px]">
        {searchByCityItems.map((e, i) => (
          <div
            className={`group rounded-[25px] relative cursor-pointer ${
              (i === 0 || i === 3) && "sm:row-span-2 sm:h-full"
            }`}
            key={e.id}
          >
            <div className={`sm:h-full w-full overflow-hidden rounded-xl`}>
              <Image
                className="w-full sm:h-full group-hover:scale-125 h-52 rounded-xl duration-500 "
                src={e.img}
                alt={e.name}
                width={200}
                height={208}
              />
              <div className="w-full h-full bg-black opacity-20 absolute top-0 rounded-xl"></div>
            </div>
            <h3 className="mt-2 sm:text-2xl text-xl font-semibold absolute bottom-5 text-white left-5">
              {e.name}
            </h3>
          </div>
        ))}
      </div>
    </HomeSection>
  );
};

export default HomeExploreApartment;
