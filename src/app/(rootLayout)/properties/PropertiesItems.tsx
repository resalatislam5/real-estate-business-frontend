"use client";
import Card from "@/components/shared/Card/Card";
import { propertiesDetailsTypes } from "@/constant/interfaceItems";
import { useEffect, useRef, useState } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const PropertiesItems = ({ items }: { items: propertiesDetailsTypes[] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const [itemsCount, setItemsCount] = useState(12);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% of the component is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  console.log(isVisible);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isVisible) {
        setItemsCount((prev) => prev + 12);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [isVisible]);
  return (
    <section className="inner-main-width !mb-0 sm:pb-20 pb-10  sm:text-lg text-base">
      <div className="flex flex-wrap gap-3 justify-between items-center">
        <p className="">
          <span className="font-semibold">{items?.length}</span> Search Result
        </p>
        <div className="items-flex-2">
          <label
            htmlFor="shorting"
            className="items-flex-2 uppercase font-semibold"
          >
            <HiAdjustmentsHorizontal />
            <p>SHORT BY: </p>
          </label>
          <div className="">
            <select
              className="bg-transparent text-gray-600"
              name=""
              id="shorting"
              defaultValue={"test"}
            >
              <option>Top Selling</option>
              <option>Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className="sm:mt-16 mt-8 sm:grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {items.map((e) => (
          <Card key={e._id} item={e} />
        ))}
      </div>
      {items.length > itemsCount && (
        <div ref={elementRef} className="">
          {isVisible && (
            <div className="flex justify-center items-center sm:mt-16 mt-8">
              Loading...
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default PropertiesItems;
