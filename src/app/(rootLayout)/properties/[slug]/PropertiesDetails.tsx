import Breadcrumb from "@/components/shared/Breadcrumb/Breadcrumb";
import { shortId } from "@/components/utils/shortId";
import { propertiesDetailsTypes } from "@/constant/interfaceItems";
import PropertiesDetailsBanner from "./PropertiesDetailsBanner";
import PropertiesDetailsDescription from "./PropertiesDetailsDescription";
import PropertiesDetailsInner from "./PropertiesDetailsInner";
import PropertiesDetailsOverview from "./PropertiesDetailsOverview";
import PropertiesDetailsVideo from "./PropertiesDetailsVideo";
import PropertiesDetailsReview from "./PropertiesDetailsReview";
import PropertiesContact from "./PropertiesContact";

const PropertiesDetails = async ({
  item,
}: {
  item: propertiesDetailsTypes;
}) => {
  const BreadcrumbItems = [
    { id: shortId(), name: "Home", to: "/" }, // Home page
    { id: shortId(), name: "property", to: "/properties" }, // Property page
    { id: shortId(), name: `${item?._id}`, to: "#" }, // Property page
  ];

  const detailsItems = [
    {
      id: shortId(),
      title: "Property Id",
      value: item?._id?.slice(0, 5),
    },
    {
      id: shortId(),
      title: "Garage",
      value: item?.garage,
    },
    {
      id: shortId(),
      title: "Price",
      value: `$${item?.price}`,
    },
    {
      id: shortId(),
      title: "Garage Size",
      value: `${item?.garage_size} SqFt`,
    },
    {
      id: shortId(),
      title: "Property Type",
      value: item?.property_type,
    },
    {
      id: shortId(),
      title: "Beds",
      value: item?.beds,
    },
    {
      id: shortId(),
      title: "Baths",
      value: item?.baths,
    },
    {
      id: shortId(),
      title: "SqFt",
      value: item?.sq_ft,
    },
    {
      id: shortId(),
      title: "Year Built",
      value: item?.year_built,
    },
    {
      id: shortId(),
      title: "Property Status",
      value: item?.property_status,
    },
  ];

  const addressItems = [
    {
      id: shortId(),
      title: "Address",
      value: item?.address,
    },
    {
      id: shortId(),
      title: "City",
      value: item?.city,
    },
    {
      id: shortId(),
      title: "Division",
      value: item?.division,
    },
    {
      id: shortId(),
      title: "Zip Code",
      value: item?.zip_code,
    },
    {
      id: shortId(),
      title: "Country",
      value: item?.country,
    },
  ];
  return (
    <>
      <Breadcrumb items={BreadcrumbItems} />
      <div className="max-w-7xl mx-auto px-5 ">
        <PropertiesDetailsBanner
          title={item?.title}
          address={item?.address}
          price={item?.price}
          sq_ft={item?.sq_ft}
          property_status={item?.property_status}
          image={item?.image}
        />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 -mt-10">
          <div className="md:col-span-2">
            {/*  */}
            <PropertiesDetailsOverview
              baths={item?.baths}
              beds={item?.beds}
              property_type={item?.property_type}
              sq_ft={item?.sq_ft}
              year_built={item?.year_built}
            />
            {/*  */}
            <PropertiesDetailsDescription text={item?.description} />
            {/*  */}

            <PropertiesDetailsInner
              items={detailsItems}
              title="Details"
              // rightText="Updated on April 4, 2020 at 5:17 pm"
              rightText={
                "Updated " + new Date(item?.updatedAt).toLocaleString("en-us")
              }
            />
            {/*  */}
            <PropertiesDetailsInner items={addressItems} title="Address" />
            {/*  */}
            <PropertiesDetailsVideo video={item?.video} />
            {/*  */}
            <PropertiesDetailsReview />
          </div>
          {/*  */}
          <PropertiesContact />
        </div>
        {/*  */}
        {/* TODO: CommentOut */}
        {/* <PropertiesDetailsRelatedProduct /> */}
      </div>
    </>
  );
};

export default PropertiesDetails;
