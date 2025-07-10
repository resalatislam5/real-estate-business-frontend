import { AgentsItems } from "@/constant";
import HomeSection from "./HomeSection";
import Image from "next/image";

const HomeAgents = () => {
  return (
    <HomeSection
      title="Meet Our Agents"
      innerTitle="See what our customers love about Real Estate. Discover how we excel in efficiency, durability, and satisfaction. Join us for quality, innovation, and reliable support."
    >
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-8 gap-16 sm:mt-16 mt-8">
        {AgentsItems.map((e, i) => (
          <div className="relative" key={i}>
            <Image width={500} height={500} src={e.img} alt="" />
            <div className="flex justify-center text-center ">
              <div className="absolute -bottom-6 bg-white shadow-md px-7 py-2 rounded-md">
                <h1 className="text-p-m-f font-bold">{e.name}</h1>
                <p className="text-p-s-f text-pc">{e.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </HomeSection>
  );
};

export default HomeAgents;
