"use client";

import { patchApiWithAuthentication, postApiImage } from "@/api/api";
import useInputData from "@/components/hooks/useInputData";
import usePopUpData from "@/components/hooks/usePopUpData";
import PopUpAlert from "@/components/shared/PopUpAlert/PopUpAlert";
import { DivisionOptions } from "@/constant";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const EditProperty = ({
  initialState,
}: {
  initialState: Record<string, string | number>;
}) => {
  // show image
  const [image, setImage] = useState<File | null>(null);
  //   handle input state
  const { handleInputState, inputState } = useInputData(initialState);

  // popup error state
  const {
    isOpen: isOpenError,
    msg: msgError,
    setIsOpen: setIsOpenError,
    setMsg: setMsgError,
  } = usePopUpData();

  // popup success
  const { isOpen, msg, setIsOpen, setMsg } = usePopUpData();
  //   extract state
  const {
    address,
    baths,
    beds,
    city,
    country,
    description,
    garage,
    price,
    title,
    garage_size: garageSize,
    property_status: propertyStatus,
    property_type: propertyType,
    sq_ft: sqFt,
    year_built: yearBuilt,
    zip_code: zipCode,
    video,
    division,
  } = inputState;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let imageData = undefined;
    if (image) {
      const imageForm = new FormData();
      imageForm.append("file", image);
      imageData = await postApiImage(imageForm, "?folder=properties");
    }

    const newData = {
      address,
      baths: +baths,
      beds: +beds,
      city,
      country,
      description,
      garage: +garage,
      price: +price,
      title,
      garage_size: +garageSize,
      property_status: propertyStatus,
      property_type: propertyType,
      sq_ft: +sqFt,
      year_built: +yearBuilt,
      zip_code: +zipCode,
      video,
      division,
      image: initialState?.image,
      newImage: imageData?.path,
    };
    console.log("newData", newData);

    const data = await patchApiWithAuthentication(
      newData,
      `properties/${initialState._id}`
    );
    console.log("patch-properties", data, imageData);

    if (data.error) {
      setIsOpenError(true);
      setMsgError(data.message);
      return;
    }
    setIsOpen(true);
    setMsg(data.message);
    redirect("/dashboard/all-properties");
  };

  return (
    <>
      <PopUpAlert
        isOpen={isOpenError}
        setIsOpen={setIsOpenError}
        text={msgError}
        success={false}
      />
      <PopUpAlert isOpen={isOpen} setIsOpen={setIsOpen} text={msg} />
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
            {image ? (
              <Image
                src={URL.createObjectURL(image)}
                alt=""
                width={300}
                height={300}
              />
            ) : (
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${initialState.image}`}
                alt=""
                width={300}
                height={300}
              />
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
          {/* title */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="title">
              2. Title
            </label>
            <input
              className="post-input-style"
              type="text"
              name="title"
              placeholder="Enter Your Title"
              onChange={handleInputState}
              value={title}
              required
            />
          </div>
          {/* Price */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="price">
              4. Price
            </label>
            <input
              className="post-input-style"
              type="number"
              name="price"
              placeholder="Enter Your Price"
              onChange={handleInputState}
              id="price"
              value={price}
              required
            />
          </div>
          {/* sq ft */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="sq-ft">
              5. Area sq ft
            </label>
            <input
              className="post-input-style"
              type="number"
              name="sq_ft"
              placeholder="Enter Your Area sq ft"
              onChange={handleInputState}
              id="sq-ft"
              value={sqFt}
              required
            />
          </div>
          <h2 className="col-span-2 text-3xl">Overview</h2>
          {/* Property Type */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="property-type">
              Property Type
            </label>
            <input
              className="post-input-style"
              type="text"
              name="property_type"
              placeholder="Enter Your Property Type"
              onChange={handleInputState}
              id="property-type"
              value={propertyType}
              required
            />
          </div>
          {/* Beds */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="beds">
              Beds
            </label>
            <input
              className="post-input-style"
              type="number"
              name="beds"
              placeholder="Enter Your Beds"
              onChange={handleInputState}
              id="beds"
              value={beds}
              required
            />
          </div>
          {/* Baths */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="baths">
              Baths
            </label>
            <input
              className="post-input-style"
              type="number"
              name="baths"
              placeholder="Enter Your Baths"
              onChange={handleInputState}
              id="baths"
              value={baths}
              required
            />
          </div>
          {/* Year Built */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="year-built">
              Year Built
            </label>
            <input
              className="post-input-style"
              type="number"
              name="year_built"
              placeholder="Enter Your Year Built"
              onChange={handleInputState}
              id="year-built"
              value={yearBuilt}
              required
            />
          </div>
          <div className="flex flex-col gap-3 col-span-2">
            <label className="text-xl font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="post-input-style"
              rows={7}
              placeholder="Enter Your Description"
              onChange={handleInputState}
              value={description}
              required
            ></textarea>
          </div>
          <h2 className="col-span-2 text-3xl">Details</h2>
          {/* Garage */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="garage">
              Garage
            </label>
            <input
              className="post-input-style"
              type="number"
              name="garage"
              placeholder="Enter Your Garage"
              onChange={handleInputState}
              id="garage"
              value={garage}
              required
            />
          </div>
          {/* Garage Size */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="garage-size">
              Garage Size
            </label>
            <input
              className="post-input-style"
              type="number"
              name="garage_size"
              placeholder="Enter Your Garage sq ft"
              onChange={handleInputState}
              id="garage-size"
              value={garageSize}
              required
            />
          </div>
          {/* Property Status */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="property-status">
              Property Status
            </label>
            <select
              name="property_status"
              className="post-input-style"
              onChange={handleInputState}
              id="property-status"
              value={propertyStatus}
            >
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>
          {/* Video */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="video">
              Youtube Video URl
            </label>
            <input
              className="post-input-style"
              type="text"
              name="video"
              placeholder="Enter Your  Youtube Video URl"
              onChange={handleInputState}
              id="video"
              value={video}
              required
            />
          </div>
          <h2 className="col-span-2 text-3xl">Address</h2>
          {/* Address */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="address">
              Address
            </label>
            <input
              className="post-input-style"
              type="text"
              name="address"
              placeholder="Enter Your Address"
              onChange={handleInputState}
              id="address"
              value={address}
              required
            />
          </div>
          {/* City */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="city">
              City
            </label>
            <input
              className="post-input-style"
              type="text"
              name="city"
              placeholder="Enter Your City"
              onChange={handleInputState}
              id="city"
              value={city}
              required
            />
          </div>
          {/* State */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="division">
              Division
            </label>
            <select
              name="division"
              className="post-input-style"
              onChange={handleInputState}
              id="division"
            >
              {DivisionOptions.map((e) => (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          {/* Zip Code */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="zip-code">
              Zip Code
            </label>
            <input
              className="post-input-style"
              type="number"
              name="zip_code"
              placeholder="Enter Your Zip Code"
              onChange={handleInputState}
              id="zip-code"
              value={zipCode}
              required
            />
          </div>
          {/* Country */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="country">
              Country
            </label>
            <input
              className="post-input-style"
              type="text"
              name="country"
              placeholder="Enter Your Country"
              onChange={handleInputState}
              id="country"
              value={country}
            />
          </div>
          <input
            type="submit"
            value="Update"
            className="col-span-2 mt-4 bg-primary w-full py-3 rounded-lg text-white text-lg cursor-pointer"
          />
        </form>
      </div>
    </>
  );
};

export default EditProperty;
