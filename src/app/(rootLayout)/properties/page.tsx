import { getApiWithAuthentication } from "@/api/api";
import Properties from "./Properties";

const page = async () => {
  const data = await getApiWithAuthentication("properties");

  return (
    <div className="bg-[#F7F8FA]">
      <Properties items={data} />
    </div>
  );
};

export default page;
