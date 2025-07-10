import { getApiWithAuthentication } from "@/api/api";
import EditProperty from "./EditProperty";

interface PageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { id } = params;
  const data = await getApiWithAuthentication(`properties/${id}`);
  console.log(data);

  if (Object.keys(data).length === 0) {
    return;
  }

  return (
    <>
      <EditProperty initialState={data} />
    </>
  );
};

export default page;
