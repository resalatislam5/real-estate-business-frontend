"use client";
import Breadcrumb from "@/components/shared/Breadcrumb/Breadcrumb";
import PropertiesSearch from "./PropertiesSearch";
import PropertiesItems from "./PropertiesItems";
import { shortId } from "@/components/utils/shortId";
import {
  propertiesDetailsTypes,
  propertiesSearchTypes,
} from "@/constant/interfaceItems";
import { useState } from "react";

const Properties = ({ items }: { items: propertiesDetailsTypes[] }) => {
  const [newItems, setNewItems] = useState(items);
  const BreadcrumbItems = [
    { id: shortId(), name: "Home", to: "/" }, // Home page
    { id: shortId(), name: "property", to: "#" }, // Property page
  ];

  // handle search functionality
  const handleSearch = (value: propertiesSearchTypes) => {
    console.log("handleSearch", value);
    const filteredItems = items.filter((e) => {
      const title = e?.title?.includes(value.title || "");
      const propertyTypes = e?.property_type?.includes(
        value.property_type || ""
      );
      const location = e?.division?.includes(value.division || "");
      const propertyStatus = e?.property_status?.includes(
        value.property_status || ""
      );

      const beds = e?.beds?.toString()?.includes(value.Bedrooms || "");
      const bath = e?.baths?.toString()?.includes(value.Bathrooms || "");
      let min_price = true;
      if (value.min_price) {
        min_price = e?.price >= Number(value.min_price);
      }
      let max_price = true;
      if (value.max_price) {
        max_price = e?.price <= Number(value.max_price);
      }

      return (
        title &&
        propertyTypes &&
        location &&
        propertyStatus &&
        beds &&
        bath &&
        min_price &&
        max_price
      );
    });
    setNewItems(filteredItems);
  };

  return (
    <>
      <Breadcrumb items={BreadcrumbItems} style="!my-0" />
      <PropertiesSearch handleSearch={handleSearch} />
      <PropertiesItems items={newItems} />
    </>
  );
};

export default Properties;
