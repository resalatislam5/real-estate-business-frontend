"use client";

import CustomLink from "@/components/shared/CustomLink";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-lg mx-auto gap-8">
      <h1 className="text-3xl font-semibold">Something Went Wrong</h1>
      <p>
        Error Details:{" "}
        {error.message
          ? error.message
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nisi! Ratione minus earum cumque animi sunt accusantium repellendus sit repellat sed architecto? At, magnam? Minus non ut porro ea debitis!"}
      </p>
      <div className="flex gap-5">
        <CustomLink style="bg-primary text-white" to={"/"}>
          GO Back Home
        </CustomLink>
        <button
          className="cursor-pointer px-5 py-2 border border-primary text-primary font-semibold rounded-lg"
          onClick={reset}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default error;
