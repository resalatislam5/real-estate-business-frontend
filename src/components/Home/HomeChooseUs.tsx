import { chooseItems } from "@/constant";
import HomeSection from "./HomeSection";

const HomeChooseUs = () => {
  return (
    <HomeSection
      title="Why Choose Us"
      innerTitle="We provide full service at every step."
    >
      <div className="sm:mt-16 mt-8 grid sm:grid-cols-3 grid-cols-1 gap-7 text-center justify-items-center md:text-lg text-sm">
        {chooseItems.map((e) => (
          <div
            key={e.id}
            className="border rounded-lg px-5 py-7 hover:bg-primary hover:bg-gradient-to-r from-primary to-orange-600 transition-all duration-700 ease-in-out group"
          >
            <div className="text-primary group-hover:text-white text-7xl flex justify-center pb-5">
              {e.icon}
            </div>
            <div className="">
              <h1 className="md:text-2xl text-xl font-semibold mb-3 group-hover:text-white">
                {e.name}
              </h1>
              <p className="text-gray-500 group-hover:text-white">{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </HomeSection>
  );
};

export default HomeChooseUs;
