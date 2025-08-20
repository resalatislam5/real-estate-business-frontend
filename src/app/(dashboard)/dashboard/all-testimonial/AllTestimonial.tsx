"use client";
import {
  deleteSingleApiWithAuthentication,
  getApiWithAuthentication,
} from "@/api/api";
import useMiddlewareAuthLoading from "@/components/hooks/useMiddlewareAuthLoading";
import CustomLink from "@/components/shared/CustomLink";
import DashboardTitle from "@/components/shared/DashboardTitle/DashboardTitle";
import LoadingSuspense from "@/components/shared/Loading/LoadingSuspense";
import { toast } from "@/components/shared/Tost/toast";
import { testimonialTypes } from "@/constant/interfaceItems";
import Image from "next/image";
import { useEffect, useState } from "react";

const AllTestimonial = () => {
  const [isLocalLoading, setIsLocalLoading] = useState(false);
  const [items, setItems] = useState([]);

  // auth loading system hooks
  const { isLoading } = useMiddlewareAuthLoading(isLocalLoading);

  const fetchData = async () => {
    setIsLocalLoading(true);
    const data = await getApiWithAuthentication("testimonial");
    setItems(data);
    setIsLocalLoading(false);
  };

  const deleteTestimonial = async (id: string) => {
    if (confirm("Are You Sure")) {
      const data = await deleteSingleApiWithAuthentication("testimonial", id);

      if (data.error) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        // fetch data when data delete successful
        fetchData();
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // count spinner
  const countSpinner =
    items.length > 0 ? (
      items?.length
    ) : (
      <LoadingSuspense style="!w-5 inline-block !my-auto !h-5" />
    );
  return (
    <div>
      <DashboardTitle name="All Properties" count={countSpinner} />
      {!isLoading ? (
        <>
          {items?.length > 0 ? (
            <div className="flex flex-wrap gap-4 sm:mt-10 mt-5">
              {items.map((item: testimonialTypes, i) => (
                <div className="rounded-md relative max-w-80" key={i}>
                  <div className="bg-gradient-to-b to-gray-100 from-gray-50 absolute inset-0 -z-10 rounded-md" />
                  <div className="min-h-96 flex justify-center items-center flex-col gap-3 p-5 text-center">
                    <div className="">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="rounded-full w-[100px] h-[100px] object-fill"
                      />
                    </div>
                    <div className="">
                      <h2 className=" text-xl font-semibold">{item.name}</h2>
                      <p className=" text-sm text-gray-500">
                        {item.profession}
                      </p>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="space-y-2 px-5 pb-3">
                    <CustomLink
                      style="w-full"
                      to={`/dashboard/edit-testimonial/${item?._id}`}
                    >
                      Edit
                    </CustomLink>
                    <button
                      onClick={() => deleteTestimonial(`${item?._id}`)}
                      className="px-5 py-2 w-full bg-primary text-white rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="sm:mt-10 mt-5 italic">
              No items in your wishlist yet. Explore and save your favorites!
            </p>
          )}
        </>
      ) : (
        <div className="flex flex-wrap gap-4 sm:mt-10 mt-5">
          {[...Array(9)].map((_, i) => (
            <div
              className="md:!min-w-80 !min-w-60 mb-10 bg-gradient-to-b to-gray-100 from-gray-50 px-5 py-20 rounded-md"
              key={i}
            >
              <LoadingSuspense style="!h-24 !w-24 rounded-full !mx-auto !mb-10" />
              <LoadingSuspense />
              <LoadingSuspense />
              <LoadingSuspense />
              <LoadingSuspense />
              <LoadingSuspense />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTestimonial;
