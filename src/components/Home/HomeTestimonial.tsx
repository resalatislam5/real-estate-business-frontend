"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeSection from "./HomeSection";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getApiWithAuthentication } from "@/api/api";
import { testimonialTypes } from "@/constant/interfaceItems";

// const testimonials = [
//   {
//     name: "John Doe",
//     role: "CEO, Company Name",
//     image: "/avater.png",
//     quote:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     name: "Jane Smith",
//     role: "CTO, Company Name",
//     image: "/avater.png",
//     quote:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     name: "Alice Johnson",
//     role: "Marketing Director",
//     image: "/avater.png",
//     quote:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   },
//   {
//     name: "Alice Johnson",
//     role: "Marketing Director",
//     image: "/avater.png",
//     quote:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   },
//   {
//     name: "Alice Johnson",
//     role: "Marketing Director",
//     image: "/avater.png",
//     quote:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   },
// ];

const HomeTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    (async function () {
      const data = await getApiWithAuthentication("testimonial");
      console.log("testimonial", data);

      setTestimonials(data);
    })();
  }, []);

  return (
    <div className="bg-gray-100 py-10 -mb-10">
      <HomeSection
        title="What People Are Saying"
        innerTitle="See what our customers love about Real Estate. Discover how we excel in efficiency, durability, and satisfaction. Join us for quality, innovation, and reliable support."
      >
        <Swiper
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            980: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper mt-10 max-w-[900px]"
        >
          {testimonials.map((item: testimonialTypes, i) => (
            <SwiperSlide className="rounded-md relative" key={i}>
              <div className="bg-gradient-to-b to-gray-100 from-gray-50 absolute inset-0 -z-10 rounded-md" />
              <div className="min-h-96 flex justify-center items-center flex-col gap-3 p-5 text-center">
                <div className="">
                  <Image
                    src={item?.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-full w-[100px] h-[100px] object-fill"
                  />
                </div>
                <div className="">
                  <h2 className=" text-xl font-semibold">{item.name}</h2>
                  <p className=" text-sm text-gray-500">{item.profession}</p>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </HomeSection>
    </div>
  );
};

export default HomeTestimonial;
