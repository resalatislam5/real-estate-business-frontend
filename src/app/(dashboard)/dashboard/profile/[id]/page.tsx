import { getApiWithServer } from "@/api/api";
import { getTokenFromAuthCookie } from "@/components/utils/getTokenFromAuthCookie";
import EditProfile from "./EditProfile";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const token = await getTokenFromAuthCookie();
  const data = await getApiWithServer(`auth/${id}`, token);

  if (!data || Object.keys(data).length === 0) {
    return;
  }

  return (
    <div>
      <EditProfile initialState={data} />
    </div>
  );
}
