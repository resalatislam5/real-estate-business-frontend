"use client";
import { useState } from "react";
import { BsWechat } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const ChatOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-8 bottom-20"
      >
        <BsWechat className="text-4xl text-primary" />
      </button>
      {isOpen && (
        <div className="fixed sm:w-96 max-w-96 h-[70vh] sm:right-12 right-5 mx-5 bottom-32 bg-white shadow-2xl rounded-xl z-50">
          <div className="relative h-full">
            {/*  */}
            <div className="bg-orange-200 rounded-t-xl flex justify-between px-5 py-3">
              {/* <Image src={"/logo.png"} width={70} height={20} alt="logo" /> */}
              <p className="text-2xl text-slate-600 ">
                Real Estate{" "}
                <span className="text-sm font-light pl-2">Live Chat</span>
              </p>
              <button onClick={() => setIsOpen(false)} className="">
                <IoCloseSharp className="text-2xl" />
              </button>
            </div>
            {/*  */}
            <div className="flex flex-col gap-5 p-4 mt-2">
              <div className="flex gap-3">
                <div className="min-w-10 h-10 bg-gray-400 rounded-full"></div>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex gap-2 items-center bottom-2 left-2 absolute w-[94%]">
              <input
                placeholder="Write your queries "
                type="text"
                className="border w-full px-4 py-3 rounded-xl"
              />
              <button>
                <IoMdSend className="text-3xl text-primary" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatOption;
