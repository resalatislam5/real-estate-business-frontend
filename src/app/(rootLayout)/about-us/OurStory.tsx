import AboutUsSection from "./AboutUsSection";
import { FaQuoteLeft } from "react-icons/fa";

const OurStory = () => {
  return (
    <AboutUsSection title="Our Story" style="sm:pt-16 pt-8">
      <div className="flex md:flex-row flex-col gap-10 font-light">
        <div className="flex flex-col sm:gap-5 gap-2 relative">
          <FaQuoteLeft className="absolute text-gray-200 -z-10 text-5xl" />
          <p className="z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris
            ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend
            dapibus. Cras sagittis, ex euismod lacinia tempor, lectus orci
            elementum augue, eget auctor metus ante sit amet velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris
            ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend
            dapibus. Cras sagittis, ex euismod lacinia tempor, lectus orci
            elementum augue, eget auctor metus ante sit amet velit.
          </p>
        </div>
        <div className="flex flex-col sm:gap-5 gap-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris
            ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend
            dapibus. Cras sagittis, ex euismod lacinia tempor, lectus orci
            elementum augue, eget auctor metus ante sit amet velit.
          </p>
          <p>
            Maecenas quis viverra metus, et efficitur ligula. Nam congue augue
            et ex congue, sed luctus lectus congue. Integer convallis
            condimentum sem. Duis elementum tortor eget condimentum tempor.
            Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero
            ligula. Vivamus semper at orci at placerat.
          </p>
        </div>
      </div>
    </AboutUsSection>
  );
};

export default OurStory;
