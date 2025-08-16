import Card from "@/components/shared/Card/Card";
import HomeSection from "./HomeSection";
import CustomLink from "@/components/shared/CustomLink";
import { getApiWithAuthentication } from "@/api/api";
import { propertiesDetailsTypes } from "@/constant/interfaceItems";

const HomeProducts = async () => {
  const items = await getApiWithAuthentication("properties");

  return (
    <HomeSection
      title="Luxury Home Listings"
      innerTitle="Thousands of luxury home enthusiasts just like you visit our website"
    >
      {/* desktop view */}
      <div className="sm:mt-16 mt-8 sm:grid hidden gap-8 lg:grid-cols-3 sm:grid-cols-2 ">
        {items?.slice(0, 6)?.map((e: propertiesDetailsTypes) => (
          <Card item={e} key={e._id} />
        ))}
      </div>
      {/* mobile */}
      <div className="sm:mt-16 mt-8 sm:hidden grid gap-5 grid-cols-1 ">
        {items?.slice(0, 3)?.map((e: propertiesDetailsTypes) => (
          <Card item={e} key={e._id} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <CustomLink
          to="/properties"
          style="w-fit bg-primary hover:!bg-white hover:!text-primary text-white"
        >
          View More
        </CustomLink>
      </div>
    </HomeSection>
  );
};

export default HomeProducts;
