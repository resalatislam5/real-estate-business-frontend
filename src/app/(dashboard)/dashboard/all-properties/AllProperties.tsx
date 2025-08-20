"use client";
import {
  deleteSingleApiWithAuthentication,
  getApiWithAuthentication,
} from "@/api/api";
import useMiddlewareAuthLoading from "@/components/hooks/useMiddlewareAuthLoading";
import Card from "@/components/shared/Card/Card";
import DashboardTitle from "@/components/shared/DashboardTitle/DashboardTitle";
import LoadingSuspense from "@/components/shared/Loading/LoadingSuspense";
import { toast } from "@/components/shared/Tost/toast";
import { useEffect, useState } from "react";

const AllProperties = () => {
  const [isLocalLoading, setIsLocalLoading] = useState(false);
  const [items, setItems] = useState([]);

  // auth loading system hooks
  const { isLoading } = useMiddlewareAuthLoading(isLocalLoading);
  const fetchData = async () => {
    setIsLocalLoading(true);
    const data = await getApiWithAuthentication("properties");
    setItems(data);
    setIsLocalLoading(false);
  };

  const deleteProperty = async (id: string) => {
    if (window.confirm("Are you sure?")) {
      const data = await deleteSingleApiWithAuthentication("properties", id);
      if (data.error) {
        toast.error(data.message);
        return;
      }
      toast.success(data.message);
      const newData = items.filter(
        (item: Record<string, string | number>) => item._id !== id
      );
      setItems(newData);
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
    <>
      <div>
        <DashboardTitle name="All Properties" count={countSpinner} />
        {!isLoading ? (
          <>
            {items?.length > 0 ? (
              <div className="flex flex-wrap gap-4 sm:mt-10 mt-5 ">
                {items?.map((e, i) => (
                  <Card
                    style="md:max-w-80"
                    key={i}
                    deleteProperty={deleteProperty}
                    item={e}
                  />
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
              <div className="md:!min-w-80 !min-w-60 mb-10" key={i}>
                <LoadingSuspense style="!h-40" />
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
    </>
  );
};

export default AllProperties;
