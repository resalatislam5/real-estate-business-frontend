import { getApiWithAuthentication } from "@/api/api";
import EditProperty from "./EditProperty";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getApiWithAuthentication(`properties/${id}`);
  console.log(data);

  if (!data || Object.keys(data).length === 0) {
    return;
  }

  return (
    <>
      <EditProperty initialState={data} />
    </>
  );
}
