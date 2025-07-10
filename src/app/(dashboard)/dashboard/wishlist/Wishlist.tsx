"use client";
import Card from "@/components/shared/Card/Card";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const items = useSelector((store: RootState) => store.wishlist);
  console.log("items,", items);

  return (
    <div className="max-w-screen-2xl">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">
          Wishlist{" "}
          <span className="text-gray-500">{items.totalWishlistItems}</span>
        </h2>
      </div>
      {items?.wishlist?.length > 0 ? (
        <div className="flex flex-wrap gap-4 sm:mt-10 mt-5">
          {items?.wishlist?.map((e, i) => (
            <Card wishlist={true} style="md:max-w-80" link={5} key={i} />
          ))}
        </div>
      ) : (
        <p className="sm:mt-10 mt-5 italic">
          No items in your wishlist yet. Explore and save your favorites!
        </p>
      )}
    </div>
  );
};

export default Wishlist;
