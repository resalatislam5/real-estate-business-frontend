const HomeContact = () => {
  return (
    <section className="bg-primary mt-10">
      <div
        className={`container mx-auto flex flex-col md:gap-20 gap-10  items-center sm:py-20 py-10`}
      >
        <div className="flex flex-col text-center items-center gap-3 text-white">
          <h1 className="md:text-5xl text-3xl font-bold">
            Become a Real Estate Agent
          </h1>
          <p className="md:text-xl text-lg">
            We only work with the best companies around the globe
          </p>
          <a
            className="md:w-64 md:h-16 hover:bg-secondary hover:text-white md:mt-8 px-5 py-3 md:text-xl text-lg  text-primary bg-white flex justify-center items-center gap-2 rounded-md duration-500"
            href={"#"}
          >
            REGISTER NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
