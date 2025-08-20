"use client";
import { getApiWithAuthentication } from "@/api/api";
import useMiddlewareAuthLoading from "@/components/hooks/useMiddlewareAuthLoading";
import CustomLink from "@/components/shared/CustomLink";
import LoadingSuspense from "@/components/shared/Loading/LoadingSuspense";
import { toast } from "@/components/shared/Tost/toast";
import { RootState } from "@/store/store";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const [state, setState] = useState<Record<string, string>>({});
  const user = useSelector((state: RootState) => state.user.user);
  // loading state
  const [isLoadingLocal, setIsLoadingLocal] = useState(false);
  const fetchData = async () => {
    setIsLoadingLocal(true);
    const data = await getApiWithAuthentication(`auth/${user._id}`);

    if (data.error) {
      toast.error(data.message ?? "Something went wrong");
      setIsLoadingLocal(false);
      return;
    }
    setState(data);
    setIsLoadingLocal(false);
  };

  // middleware auth loading
  const { isLoading } = useMiddlewareAuthLoading(isLoadingLocal);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <form className="gap-5 md:grid grid-cols-2 flex flex-col sm:w-full w-[250px]">
          <div className="flex flex-col gap-3 col-span-2 mb-10">
            <label className="text-xl font-medium mb-2" htmlFor="image">
              1. Image*
            </label>
            {state.image ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${state.image}`}
                alt=""
                width={300}
                height={300}
                className="w-80 h-80 rounded-full"
              />
            ) : (
              <>
                {" "}
                <div className="w-80 h-80 bg-gray-300 rounded-full flex justify-center items-center">
                  <p>NO Image Found</p>
                </div>
              </>
            )}
          </div>
          {/*  */}
          {/* Name */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="title">
              Name
            </label>
            {isLoading ? <LoadingSuspense /> : <p>- {state.name}</p>}
          </div>
          {/* Email */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="title">
              Email
            </label>
            <Suspense fallback={<LoadingSuspense />}>
              {isLoading ? <LoadingSuspense /> : <p>- {state.email}</p>}
            </Suspense>
          </div>
          {/* Number */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="title">
              Number
            </label>
            {isLoading ? <LoadingSuspense /> : <p>- {state.number}</p>}
          </div>
          {/* address */}
          <div className="flex flex-col gap-3">
            <label className="text-xl font-medium" htmlFor="title">
              Address
            </label>
            {isLoading ? <LoadingSuspense /> : <p>- {state.address}</p>}
          </div>
          <CustomLink to={`/dashboard/profile/${state._id}`} style="w-fit mt-5">
            Edit Profile
          </CustomLink>
        </form>
      </div>
    </>
  );
};

export default Profile;
