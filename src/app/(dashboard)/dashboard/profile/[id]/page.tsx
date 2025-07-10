import { getApiWithServer } from "@/api/api";
import { getTokenFromAuthCookie } from "@/components/utils/getTokenFromAuthCookie";
import EditProfile from "./EditProfile";

interface PageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: PageProps) => {
  const id = (await params).id; // ✅ Await params if needed

  const token = await getTokenFromAuthCookie();
  const data = await getApiWithServer(`auth/${id}`, token);

  if (Object.keys(data).length === 0) {
    return;
  }

  return (
    <div>
      <EditProfile initialState={data} />
    </div>
  );
};

export default page;
