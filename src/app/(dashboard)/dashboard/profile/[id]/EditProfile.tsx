"use client";
import useInputData from "@/components/hooks/useInputData";
import { patchApiWithAuthentication, postApiImage } from "@/api/api";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "@/components/shared/Tost/toast";
import { redirect } from "next/navigation";

const EditProfile = ({
  initialState,
}: {
  initialState: Record<string, string>;
}) => {
  // show image
  const [image, setImage] = useState<File | null>(null);
  // show image
  const [oldImage, setOldImage] = useState<string | null>(initialState.image);
  // handle Loading
  const [isLoading, setIsLoading] = useState(false);

  //   handle input state
  const { handleInputState, inputState } =
    useInputData<Record<string, string>>(initialState);

  console.log("inputState", inputState);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // loading true
    setIsLoading(true);
    let imageData = undefined;
    if (image) {
      const imageForm = new FormData();
      imageForm.append("file", image);
      imageData = await postApiImage(imageForm, "?folder=profile");
    }

    const data = await patchApiWithAuthentication(
      {
        name: inputState.name,
        number: inputState.number,
        address: inputState.address,
        image: oldImage,
        newImage: imageData?.path,
      },
      `auth/${initialState._id}`
    );
    // loading false
    setIsLoading(false);
    if (data.error) {
      toast.error(data.message);
      return;
    }
    toast.success(data.message);
    redirect("/dashboard/profile");
  };

  return (
    <div>
      <form
        className="gap-5 md:grid grid-cols-2 flex flex-col sm:w-full w-[250px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3 col-span-2">
          <label className="text-xl font-medium" htmlFor="image">
            1. Image*
          </label>
          {image ? (
            <Image
              src={URL.createObjectURL(image)}
              alt=""
              width={300}
              height={300}
            />
          ) : (
            <>
              {oldImage && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${oldImage}`}
                  alt=""
                  width={300}
                  height={300}
                />
              )}
            </>
          )}
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files[0]) {
                setImage(e.target.files[0]);
              }
            }}
            type="file"
            name="image"
            id="image"
            accept="image/*"
          />
        </div>
        {/*  */}
        {/* Name */}
        <div className="flex flex-col gap-3">
          <label className="text-xl font-medium" htmlFor="title">
            Name
          </label>
          <input
            className="post-input-style"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={handleInputState}
            value={inputState.name}
          />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-3">
          <label className="text-xl font-medium" htmlFor="title">
            Email
          </label>
          <p className="post-input-style bg-red-600">{inputState.email}</p>
        </div>
        {/* Number */}
        <div className="flex flex-col gap-3">
          <label className="text-xl font-medium" htmlFor="title">
            Number
          </label>
          <input
            className="post-input-style"
            type="text"
            name="number"
            placeholder="Enter Your number"
            onChange={handleInputState}
            value={inputState.number}
          />
        </div>
        {/* address */}
        <div className="flex flex-col gap-3">
          <label className="text-xl font-medium" htmlFor="title">
            Address
          </label>
          <input
            className="post-input-style"
            type="text"
            name="address"
            placeholder="Enter Your number"
            onChange={handleInputState}
            value={inputState.address}
          />
        </div>
        {isLoading ? (
          <button className="col-span-2 mt-4 bg-primary w-full py-3 rounded-lg text-white text-lg cursor-pointer">
            Loading...
          </button>
        ) : (
          <input
            type="submit"
            value="Update"
            className="col-span-2 mt-4 bg-primary w-full py-3 rounded-lg text-white text-lg cursor-pointer"
          />
        )}
      </form>
    </div>
  );
};

export default EditProfile;
