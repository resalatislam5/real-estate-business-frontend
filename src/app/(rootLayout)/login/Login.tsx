"use client";
import { postApiWithNoAuthentication } from "@/api/api";
import useInputData from "@/components/hooks/useInputData";
import { toast } from "@/components/shared/Tost/toast";
import { addUser } from "@/store/slice/authSlice";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const { handleInputState, inputState } = useInputData(initialState);

  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const userdata = await postApiWithNoAuthentication(
      inputState,
      "auth/login"
    );
    setLoading(false);
    if (!userdata) {
      toast.error(userdata?.message);
      return;
    }
    if (userdata?.error) {
      toast.error(userdata?.message);
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
    toast.success(userdata?.message);

    // redirect("/");
    //! full reload page because cookie set in frontend not backend. then page not reload cookie not found
    window.location.href = "/";
  };

  return (
    <>
      <div className="max-w-[600px] sm:mx-auto mx-5 px-5 sm:mb-20 mb-10 py-10 sm:mt-40 mt-32 border rounded-lg">
        <div className="text-center">
          <h1 className="sm:text-4xl text-2xl font-semibold ">Welcome back</h1>
          <p className="sm:text-2xl text-lg text-gray-500 sm:mt-4 mt-2">
            Please enter your details to sign in.
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
          className="sm:text-lg text-base flex flex-col sm:gap-6 gap-4 sm:mt-8 mt-6"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="Email">Email</label>
            <input
              id="Email"
              className="w-full py-3 px-4 border rounded-lg"
              type="text"
              placeholder="Enter your email"
              name="email"
              onChange={handleInputState}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Email">Password</label>
            <input
              id="Email"
              className="w-full py-3 px-4 border rounded-lg"
              type="text"
              placeholder="Enter your password"
              name="password"
              onChange={handleInputState}
              required
            />
            <div className="mt-1 text-right">
              <Link href={"#"} className="hover:text-primary underline">
                Forget Password ?
              </Link>
            </div>
          </div>
          {isLoading ? (
            <button className="text-white bg-primary w-full py-3 rounded-lg">
              Loading...
            </button>
          ) : (
            <input
              type="submit"
              value="Login"
              className="text-white bg-primary w-full py-3 rounded-lg cursor-pointer"
            />
          )}
          <p className="mt-4 text-center">
            New to Real Estate?{" "}
            <Link className="text-primary" href={"/signup"}>
              Get Started
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
