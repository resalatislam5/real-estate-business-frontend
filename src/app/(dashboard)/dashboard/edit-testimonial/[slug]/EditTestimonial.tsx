"use client";
import { patchApiWithAuthentication } from "@/api/api";
import useHandleImageUpload from "@/components/hooks/useHandleImageUpload";
import useInputData from "@/components/hooks/useInputData";
import { toast } from "@/components/shared/Tost/toast";
import { testimonialTypes } from "@/constant/interfaceItems";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

const EditTestimonial = ({
  initialState,
}: {
  initialState: testimonialTypes;
}) => {
  // show image
  const [oldImage, setOldImage] = useState<File | null>(null);

  const [isLoading, setLoading] = useState(false);

  //   handle input state
  const { handleInputState, inputState } = useInputData({ ...initialState });
  // initialState
  const { description, image, name, profession } = inputState;

  // handle image
  const { handleImageUpload } = useHandleImageUpload();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const inputImage = form.elements.namedItem(
      "image"
    ) as HTMLInputElement | null;
    const imageFile = inputImage?.files?.[0];
    let ImageUrlData;
    if (imageFile) {
      ImageUrlData = await handleImageUpload(imageFile);
    }

    const newData = {
      name,
      profession,
      description,
      image: ImageUrlData ?? image,
    };

    const data = await patchApiWithAuthentication(
      newData,
      `testimonial/${initialState?._id}`
    );
    console.log("post-testimonial", data);

    if (data.error) {
      setLoading(false);
      toast.error(data.message);
      return;
    }
    toast.success(data.message);
    setLoading(false);
    setOldImage(null);
  };

  return (
    <div className="">
      <form
        className="gap-5 md:grid grid-cols-2 flex flex-col sm:w-full w-[250px]"
        onSubmit={handleSubmit}
      >
        {/* image */}
        <div className="flex flex-col gap-3 col-span-2">
          <label className="text-xl font-medium" htmlFor="image">
            1. Image*
          </label>
          {oldImage ? (
            <Image
              src={URL.createObjectURL(oldImage)}
              alt=""
              width={300}
              height={300}
            />
          ) : (
            <Image src={image} alt="" width={300} height={300} />
          )}
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files[0]) {
                setOldImage(e.target.files[0]);
              }
            }}
            type="file"
            name="image"
            id="image"
            accept="image/*"
          />
        </div>
        {/* name */}
        <div className="flex flex-col gap-3">
          <label className="text-xl font-medium" htmlFor="name">
            2. Name
          </label>
          <input
            id="name"
            className="post-input-style"
            type="text"
            name="name"
            placeholder="Enter His Name"
            onChange={handleInputState}
            value={name}
            required
          />
        </div>
        {/* Profession */}
        <div className="flex flex-col gap-3">
          <label className="text-xl font-medium" htmlFor="profession">
            4. Profession
          </label>
          <input
            className="post-input-style"
            type="text"
            name="profession"
            placeholder="Enter Her/His Profession"
            onChange={handleInputState}
            id="profession"
            value={profession}
            required
          />
        </div>
        {/* description */}
        <div className="flex flex-col gap-3 col-span-2">
          <label className="text-xl font-medium" htmlFor="des">
            5. Description
          </label>
          <textarea
            name="description"
            id="description"
            className="post-input-style w-full"
            rows={7}
            placeholder="Enter Your Description"
            onChange={handleInputState}
            value={description}
            required
          ></textarea>
        </div>

        {isLoading ? (
          <button
            type="button"
            className="col-span-2 mt-4 bg-primary w-full py-3 rounded-lg text-white text-lg cursor-wait"
          >
            Loading...
          </button>
        ) : (
          <input
            type="submit"
            value="Submit"
            className="col-span-2 mt-4 bg-primary w-full py-3 rounded-lg text-white text-lg cursor-pointer"
          />
        )}
      </form>
    </div>
  );
};

export default EditTestimonial;
