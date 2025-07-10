"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import HomeSection from "./HomeSection";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Company Name",
    image: "/avater.png",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, Company Name",
    image: "/avater.png",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Marketing Director",
    image: "/avater.png",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const HomeTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="bg-gray-100 py-10 -mb-10">
      <HomeSection
        title="What People Are Saying"
        innerTitle="See what our customers love about Real Estate. Discover how we excel in efficiency, durability, and satisfaction. Join us for quality, innovation, and reliable support."
      >
        {/* only desktop view */}
        {/* <div className="sm:grid lg:grid-cols-3 grid-cols-2 hidden  gap-8 sm:mt-16 mt-8">
        {[...Array(6)].map((e, i) => (
          <TestimonialCard key={i} />
        ))}
      </div> */}
        {/* only mobile view */}
        {/* <div className="sm:hidden grid  gap-8 sm:mt-16 mt-8">
        {[...Array(3)].map((e, i) => (
          <TestimonialCard key={i} />
        ))}
      </div> */}

        <div className="">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-10 relative">
              {/* Testimonial Card */}
              <div className=" p-6  text-center">
                <Image
                  width={24}
                  height={24}
                  className="h-24 w-24 rounded-full mx-auto"
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                />
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].role}
                </p>
                <div className="flex justify-center my-2 gap-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-gray-600">
                  &quot;
                  {testimonials[currentIndex].quote} &quot;
                </p>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </HomeSection>
    </div>
  );
};

export default HomeTestimonial;
