import { getApiWithAuthentication } from "@/api/api";
import PropertiesDetails from "./PropertiesDetails";

interface propsType {
  slug: string;
}
export default async function Page({ params }: { params: propsType }) {
  const slug = params?.slug;
  const data = await getApiWithAuthentication(`properties/${slug}`);
  console.log("data properties details", data);

  return (
    <div className="bg-[#F7F8FA]">
      <PropertiesDetails item={data} />
    </div>
  );
}
