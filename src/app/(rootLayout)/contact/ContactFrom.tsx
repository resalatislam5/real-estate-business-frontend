"use client";
import { postApiWithNoAuthentication } from "@/api/api";
import useInputData from "@/components/hooks/useInputData";
import usePopUpData from "@/components/hooks/usePopUpData";
import PopUpAlert from "@/components/shared/PopUpAlert/PopUpAlert";
import Link from "next/link";
import { FormEvent } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMdLocate } from "react-icons/io";
import { MdEmail } from "react-icons/md";

// interface initialStateType extends Record<string, string> {
//   name: string;
//   number: string;
//   email: string;
//   message: string;
// }
const initialState = {
  name: "",
  number: "",
  email: "",
  message: "",
};
const ContactFrom = () => {
  // input handler hook
  const { handleInputState, inputState, resetInputState } =
    useInputData(initialState);
  // tost hook
  const { isOpen, setIsOpen, msg, setMsg } = usePopUpData();
  const {
    isOpen: isOpenError,
    setIsOpen: setIsOpenError,
    msg: msgError,
    setMsg: setMsgError,
  } = usePopUpData();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await postApiWithNoAuthentication(inputState, "contact");
    console.log("contact ", data);
    if (data?.error) {
      setIsOpenError(true);
      setMsgError(data?.message);
      return;
    }
    setIsOpen(true);
    setMsg(data.message);
    resetInputState();
  };
  return (
    <>
      <PopUpAlert isOpen={isOpen} setIsOpen={setIsOpen} text={msg} />
      <PopUpAlert
        isOpen={isOpenError}
        setIsOpen={setIsOpenError}
        text={msgError}
        success={false}
      />
      <div className="grid md:grid-cols-3 sm:gap-16 gap-8 items-center main-width sm:pt-16 pt-8">
        <div className="border rounded-lg sm:p-8 p-6 col-span-2">
          <div className="">
            <h1 className="text-xl font-semibold">We Are Here For You.</h1>
            <p className="mt-2">
              Sometimes you need a little help from your friends.
            </p>
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  className="contact-search !max-w-full"
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleInputState}
                  required
                  value={inputState.name}
                />
                <input
                  className="contact-search !max-w-full"
                  type="text"
                  placeholder="Number"
                  name="number"
                  onChange={handleInputState}
                  required
                  value={inputState.number}
                />
              </div>
              <input
                className="contact-search !max-w-full"
                type="email"
                placeholder="email"
                name="email"
                onChange={handleInputState}
                required
                value={inputState.email}
              />
              <textarea
                className="contact-search"
                placeholder="Message"
                rows={6}
                name="message"
                onChange={handleInputState}
                required
                value={inputState.message}
              ></textarea>

              <input
                className="w-fit bg-primary text-white hover:bg-white hover:!text-primary sm:px-20 sm:py-5 border border-primary font-semibold text-lg rounded-lg flex justify-center items-center gap-2 duration-500 cursor-pointer"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-lg">
          <h2 className="text-2xl font-semibold">Contact Sales</h2>
          <Link
            href={"tel: +8801765975545"}
            className="items-flex-2 !gap-5 hover:text-primary"
          >
            <FaPhoneAlt />
            +8801765975545
          </Link>
          <Link
            href={"https://wa.me/01765975545"}
            className="items-flex-2 !gap-5 hover:text-primary"
          >
            <FaWhatsapp />
            01765975545
          </Link>
          <Link
            href={"mailto: resalatislam5@gmail.com"}
            className="items-flex-2 !gap-5 hover:text-primary"
          >
            <MdEmail />
            resalatislam5@gmail.com
          </Link>
          <Link
            href={"mailto: resalatislam5@gmail.com"}
            className="items-flex-2 !gap-5 hover:text-primary"
          >
            <IoMdLocate />
            Gaibandha, Rangpur, Bangladesh
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactFrom;
