import Breadcrumb from "@/components/shared/Breadcrumb/Breadcrumb";
import PropertiesSearch from "./PropertiesSearch";
import PropertiesItems from "./PropertiesItems";
import { shortId } from "@/components/utils/shortId";
import { propertiesDetailsTypes } from "@/constant/interfaceItems";

const Properties = ({ items }: { items: propertiesDetailsTypes[] }) => {
  const BreadcrumbItems = [
    { id: shortId(), name: "Home", to: "/" }, // Home page
    { id: shortId(), name: "property", to: "#" }, // Property page
  ];
  return (
    <>
      <Breadcrumb items={BreadcrumbItems} style="!my-0" />
      <PropertiesSearch />
      <PropertiesItems items={items} />
    </>
  );
};

export default Properties;
