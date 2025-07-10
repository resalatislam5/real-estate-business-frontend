import { counterItems } from "@/constant";
import HomeSection from "./HomeSection";

const HomeFeatures = () => {
  return (
    <HomeSection
      title="Where hospitality meets your dreams"
      innerTitle="At RealHomes, we believe in the power of exceptional experiences. With
          a passion for hospitality, we strive to create moments that linger in
          your heart long after your stay."
    >
      {/* counter */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full gap-5 sm:mt-16 mt-8">
        {counterItems.map((e) => (
          <div
            key={e.id}
            className={`bg-primary text-white flex sm:justify-start flex-col sm:flex-row text-center sm:text-left justify-center items-center rounded-lg px-4 py-6 sm:gap-3 gap-2 w-full`}
          >
            <div className="sm:text-2xl text-lg bg-white p-4 rounded-full text-primary">
              {e.icon}
            </div>
            <div className="">
              <h1 className="sm:text-4xl text-2xl sm:mb-2 mb-1">{e.counter}</h1>
              <p className="sm:text-lg text-sm">{e.name}</p>
            </div>
          </div>
        ))}
      </div>
    </HomeSection>
  );
};

export default HomeFeatures;
