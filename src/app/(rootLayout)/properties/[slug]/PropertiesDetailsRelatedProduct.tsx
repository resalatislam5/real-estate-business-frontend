import Card from "@/components/shared/Card/Card";

const PropertiesDetailsRelatedProduct = () => {
  return (
    <div className="sm:py-16 py-8">
      <h1 className="sm:text-4xl text-2xl">More Related Properties</h1>
      {/* mobile */}
      <div className="sm:mt-8 mt-6 grid lg:grid-cols-3 sm:grid-cols-2 gap-5 grid-cols-1 ">
        {[...Array(3)].map((e, i) => (
          <Card link={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesDetailsRelatedProduct;
