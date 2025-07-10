"use client";

import { ReactNode, useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
interface PropsTypes {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  children: ReactNode;
}
const PopUpDetails = ({ isOpen, setIsOpen, children }: PropsTypes) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);
  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } inset-0 flex items-center justify-center duration-1000 z-40 `}
    >
      <div className="bg-black w-full h-full absolute opacity-35"></div>
      <div
        ref={ref}
        className="bg-white sm:p-10 p-5 rounded-lg border shadow-lg max-w-[800px] min-w-[320px] max-h-[70vh] overflow-auto flex flex-col sm:gap-10 gap-5 relative"
      >
        {children}
        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8"
        >
          <IoCloseSharp className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default PopUpDetails;
