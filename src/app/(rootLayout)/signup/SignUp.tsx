"use client";
import { postApiWithNoAuthentication } from "@/api/api";
import useInputData from "@/components/hooks/useInputData";
import { toast } from "@/components/shared/Tost/toast";
import { addUser } from "@/store/slice/authSlice";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";

const initialState = {
  name: "",
  email: "",
  password: "",
};
const SignUp = () => {
  const { handleInputState, inputState } = useInputData(initialState);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const userdata = await postApiWithNoAuthentication(
      inputState,
      "auth/signup"
    );
    setLoading(false);
    if (!userdata) {
      toast.error("Something Wrong");
      return;
    }
    if (userdata.error) {
      toast.error(userdata.message);
      return;
    }
    dispatch(
      addUser({
        _id: userdata?.data?._id,
        image: userdata?.data?.image,
        name: userdata?.data?.name,
        token: userdata?.data?.jwtToken,
        role: userdata?.data?.role,
      })
    );
    toast.success(userdata.message);
    redirect("/");
  };

  return (
    <>
      <div className="max-w-[600px] sm:mx-auto mx-5 px-5 sm:mb-20 mb-10 py-10 sm:mt-40 mt-32 border rounded-lg">
        <div className="text-center">
          <h1 className="sm:text-4xl text-2xl font-semibold ">
            Create your account
          </h1>
          <p className="sm:text-2xl text-lg text-gray-500 sm:mt-4 mt-2">
            Enjoy your credentials to access your account
          </p>
        </div>
        <button className="flex justify-center border items-center gap-4 rounded-full py-3 sm:mt-16 mt-8 font-semibold text-lg  duration-300 w-full">
          <FcGoogle /> Login with Google
        </button>
        <div className="flex gap-2 items-center text-gray-500 sm:mt-8 mt-6">
          <div className="h-[1px] bg-gray-400 w-full" />
          OR
          <div className="h-[1px] bg-gray-400 w-full" />
        </div>
        <form
          className="sm:text-lg text-base flex flex-col sm:gap-5 gap-4 sm:mt-8 mt-6"
          onSubmit={handleSignUp}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="w-full py-3 px-4 border rounded-lg"
              type="text"
              placeholder="Enter your Name"
              name="name"
              onChange={handleInputState}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Email">Email</label>
            <input
              id="Email"
              className="w-full py-3 px-4 border rounded-lg"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleInputState}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="w-full py-3 px-4 border rounded-lg"
              type="text"
              placeholder="Enter your password"
              name="password"
              onChange={handleInputState}
              required
            />
            <div className="mt-1 flex gap-3">
              <input
                onClick={() => setAgree(!agree)}
                id="checkbox"
                type="checkbox"
                className="w-4 cursor-pointer"
                name=""
              />
              <label htmlFor="checkbox" className="cursor-pointer">
                I agree to all Term, Privacy Policy and Fees
              </label>
            </div>
          </div>
          {isLoading ? (
            <button className="text-white bg-primary w-full py-3 rounded-lg ">
              Loading...
            </button>
          ) : (
            <input
              type="submit"
              value="Sign Up"
              className={`text-white  w-full py-3 rounded-lg bg-primary ${
                agree ? "cursor-pointer" : " bg-opacity-80"
              }`}
              disabled={!agree}
            />
          )}
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link className="text-primary" href={"/login"}>
              Log in
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
