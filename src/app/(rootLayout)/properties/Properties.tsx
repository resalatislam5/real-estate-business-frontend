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
  // openSearchFilter
  const [openSearchFilter, setOpenSearchFilter] = useState(false);

  const BreadcrumbItems = [
    { id: shortId(), name: "Home", to: "/" }, // Home page
    { id: shortId(), name: "property", to: "#" }, // Property page
  ];

  // handle search functionality
  const handleSearch = (value: propertiesSearchTypes) => {
    console.log("handleSearch", value);

    const filteredItems = items.filter((e) => {
      const title = e?.title
        ?.toLocaleLowerCase()
        ?.includes(value?.title?.toLocaleLowerCase() || "");
      const propertyTypes = e?.property_type
        ?.toLocaleLowerCase()
        ?.includes(value?.property_type?.toLocaleLowerCase() || "");
      const location = e?.division
        ?.toLocaleLowerCase()
        ?.includes(value?.division?.toLocaleLowerCase() || "");
      const propertyStatus = e?.property_status
        ?.toLocaleLowerCase()
        ?.includes(value.property_status?.toLocaleLowerCase() || "");
      console.log("propertyStatus", propertyStatus, value.property_status);

      const beds = e?.beds
        ?.toString()
        ?.toLocaleLowerCase()
        ?.includes(value.Bedrooms?.toLocaleLowerCase() || "");
      const bath = e?.baths
        ?.toString()
        ?.toLocaleLowerCase()
        ?.includes(value?.Bathrooms?.toLocaleLowerCase() || "");
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
    <div className="relative">
      <Breadcrumb items={BreadcrumbItems} style="!my-0" />
      <PropertiesSearch
        openSearchFilter={openSearchFilter}
        setOpenSearchFilter={setOpenSearchFilter}
        handleSearch={handleSearch}
      />
      <PropertiesItems
        items={newItems}
        setOpenSearchFilter={setOpenSearchFilter}
      />
    </div>
  );
};

export default Properties;
