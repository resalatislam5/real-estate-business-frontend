import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const PopUpAlert = ({
  isOpen,
  setIsOpen,
  text,
  style,
  success = true,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  text: string;
  style?: string;
  success?: boolean;
}) => {
  if (isOpen) {
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  }
  return (
    <>
      {Array.isArray(text) ? (
        text.map((e, i) => (
          <React.Fragment key={i}>
            {isOpen && (
              <div
                className={`${style} fixed top-4 left-1/2 transform -translate-x-1/2 ${
                  success ? "bg-green-500" : "bg-red-500"
                } text-white px-6 py-3 rounded-lg shadow-lg z-50`}
                style={{ marginTop: `${i * 60}px` }} // Stack messages vertically
              >
                <p className="flex gap-2 items-center">
                  {success ? (
                    <FaCheckCircle className=" text-xl" />
                  ) : (
                    <IoMdCloseCircle className=" text-xl" />
                  )}
                  {e}
                </p>
              </div>
            )}
          </React.Fragment>
        ))
      ) : (
        <>
          {isOpen && (
            <div
              className={`${style} fixed top-4 left-1/2 transform -translate-x-1/2 ${
                success ? "bg-green-500" : "bg-red-500"
              } text-white px-6 py-3 rounded-lg shadow-lg z-50`}
            >
              <p className="flex gap-2 items-center">
                {success ? (
                  <FaCheckCircle className=" text-xl" />
                ) : (
                  <IoMdCloseCircle className=" text-xl" />
                )}
                {text}
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PopUpAlert;
