import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import AboutUsCard from "./AboutUsCard";
import AboutUsSection from "./AboutUsSection";
import HomeSection from "@/components/Home/HomeSection";

const Our_Team = () => {
  return (
    <>
      <AboutUsSection title="Meet Our Team">
        {/* ceo */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 items-center justify-items-center gap-10  max-w-[1200px] mx-auto">
          <div className="">
            <Image
              className="lg:min-h-[600px] h-[400px] lg:w-full w-[400px] rounded-lg"
              src={"/man.jpg"}
              width={500}
              height={1000}
              alt="Resalat"
            />
          </div>
          <div className="xl:col-span-2 flex flex-col sm:gap-10 gap-5 text-center lg:text-left sm:text-lg text-sm">
            <div className="">
              <h1 className="sm:text-4xl text-2xl">Resalat Islam, CEO</h1>
              <p className="sm:text-lg text-sm text-gray-500 font-semibold mt-2">
                Visionary leader and strategic architect
              </p>
            </div>
            <p className="">
              Mark Jane, our CEO, brings extensive experience and innovative
              strategies to real estate. With a proven track record in property
              management and development, he has led our firm to significant
              growth in residential and commercial markets. Known for visionary
              leadership, Mark drives our success. He holds a Master’s in Real
              Estate Management from the University of California, providing him
              with deep industry insight.
            </p>
            {/* social media link   */}
            <div className="">
              <h3 className="font-medium text-xl">Get to Know Our CEO</h3>
              <div className="mt-2 flex justify-center lg:justify-start gap-2">
                <Link className="bg-blue-600 p-3" href="/">
                  <FaFacebookF className="text-white" />
                </Link>
                <Link className="bg-red-900 p-3" href="/">
                  <FaYoutube className="text-white" />
                </Link>
                <Link className="bg-blue-900 p-3" href="/">
                  <FaLinkedinIn className="text-white" />
                </Link>
              </div>
            </div>
            {/* contact info */}
            <div className="">
              <h3 className="font-medium text-xl">Contact Information</h3>
              <div className="mt-2 flex flex-col gap-2">
                <Link
                  href={"tel:+8801765975545"}
                  className="hover:text-primary"
                >
                  +8801765975545
                </Link>
                <Link
                  href={"mailto:resalatislam5@gmail.com"}
                  className="hover:text-primary"
                >
                  resalatislam5@gmail.com
                </Link>
                <p className="">518-520 5th AveNew York, USA</p>
              </div>
            </div>
          </div>
        </div>
        {/* others */}
      </AboutUsSection>
      <div className="bg-[#EEF1F3] py-8">
        <HomeSection
          title="Teamwork in Action"
          innerTitle="Meet the professionals behind your success. Our team blends expertise with passion to consistently deliver reliable results. Committed to excellence, we tailor solutions to meet your real estate needs."
        >
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 sm:mt-16 mt-8">
            {[...Array(4)].map((e, i) => (
              <AboutUsCard key={i} />
            ))}
          </div>
        </HomeSection>
      </div>
    </>
  );
};

export default Our_Team;
