import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LuTriangleRight } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import PropertiesDetailsSection from "./PropertiesDetailsSection";

const PropertyDetails = ({
  icon,
  value,
  title,
}: {
  icon?: React.ReactNode;
  value: number | string;
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-2 font-normal text-gray-500">
      <p className="font-semibold text-secondary items-flex-2">
        <span className="font-light text-gray-600 text-4xl">{icon}</span>{" "}
        {value}
      </p>
      {title}
    </div>
  );
};

const PropertiesDetailsOverview = ({
  property_type,
  beds,
  baths,
  sq_ft,
  year_built,
}: {
  property_type: string;
  beds: number;
  baths: number;
  sq_ft: number;
  year_built: number;
}) => {
  return (
    <PropertiesDetailsSection title="Overview">
      <div className="flex items-center gap-20 justify-center flex-wrap mt-3">
        <PropertyDetails value={property_type} title="Property Type" />
        <PropertyDetails icon={<IoBedOutline />} value={beds} title="Beds" />
        <PropertyDetails icon={<PiBathtub />} value={baths} title="Baths" />
        <PropertyDetails
          icon={<LuTriangleRight />}
          value={sq_ft}
          title="SqFt"
        />
        <PropertyDetails
          icon={<FaCalendarDays />}
          value={year_built}
          title="FaCalendarDays"
        />
      </div>
    </PropertiesDetailsSection>
  );
};

export default PropertiesDetailsOverview;
