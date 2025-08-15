"use client";
import {
  deleteSingleApiWithAuthentication,
  getApiWithAuthentication,
} from "@/api/api";
import Card from "@/components/shared/Card/Card";
import DashboardTitle from "@/components/shared/DashboardTitle/DashboardTitle";
import Loading from "@/components/shared/Loading/Loading";
import { toast } from "@/components/shared/Tost/toast";
import { useEffect, useState } from "react";

const AllProperties = () => {
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const data = await getApiWithAuthentication("properties");
    setItems(data);
  };

  console.log("properties", items);

  const deleteProperty = async (id: string) => {
    // TODO: Alert implement
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
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <DashboardTitle name="All Properties" count={items?.length} />

        {items?.length > 0 ? (
          <div className="flex flex-wrap gap-4 sm:mt-10 mt-5">
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
      </div>
    </>
  );
};

export default AllProperties;
