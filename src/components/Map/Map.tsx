import React from "react";

const Map = () => {
  return (
    <section className="main-width">
      <h1 className="text-center sm:text-4xl text-2xl sm:py-12 py-6 font-medium text-gray-800">
        Connect with one of our global offices
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.3492194475193!2d89.58421467509487!3d25.32606002646964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd3d00bd12d2f3%3A0x64a5b8aa1273f030!2sModoner%20Para%20Primary%20School!5e0!3m2!1sen!2sbd!4v1740903360335!5m2!1sen!2sbd"
        width="100%"
        height="500"
        className="border-none sm:h-[500px] h-[250px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="Description of the iframe content"
      ></iframe>
    </section>
  );
};

export default Map;
