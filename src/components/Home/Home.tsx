import Banner from "./Banner";
import HomeChooseUs from "./HomeChooseUs";
import HomeContact from "./HomeContact";
import HomeExploreApartment from "./HomeExploreApartment";
import HomeFeatures from "./HomeFeatures";
import HomeProducts from "./HomeProducts";
import HomeTestimonial from "./HomeTestimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeFeatures />
      <HomeProducts />
      <HomeChooseUs />
      <HomeExploreApartment />
      <HomeTestimonial />
      <HomeContact />
    </>
  );
};

export default Home;
