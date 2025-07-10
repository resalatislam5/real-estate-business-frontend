const PropertiesContact = () => {
  return (
    <div className="bg-white md:my-10 h-fit md:sticky md:top-32 p-5 rounded-lg">
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 rounded-full bg-gray-500"></div>
        <div className="flex flex-col gap-[2px]">
          <h2 className="text-2xl">Resalat Islam</h2>
          <p className="text-gray-400 text-base">CEO</p>
        </div>
      </div>
      {/* <h1 className="text-3xl mb-8">Contact Us</h1> */}
      <form className="flex flex-col gap-3 mt-8" action="">
        <input
          type="text"
          className="properties-search min-w-full"
          placeholder="Name"
        />
        <input
          type="text"
          className="properties-search min-w-full"
          placeholder="Phone"
        />
        <input
          type="email"
          className="properties-search min-w-full"
          placeholder="Email"
        />
        <textarea
          className="properties-search min-w-full"
          name=""
          id=""
          rows={5}
          placeholder="Hello, I am interested ..."
        ></textarea>
        <button className="bg-primary text-white py-3 rounded-lg mt-4">
          Send Message
        </button>
        <a
          className="border border-primary text-center py-3 rounded-lg hover:bg-primary hover:text-white duration-500"
          href="https://wa.me/01765975545"
          target="_blank"
        >
          Whatsapp
        </a>
      </form>
    </div>
  );
};

export default PropertiesContact;
