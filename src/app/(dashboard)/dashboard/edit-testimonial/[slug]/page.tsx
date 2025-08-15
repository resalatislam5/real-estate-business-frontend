import { getApiWithAuthentication } from "@/api/api";
import EditTestimonial from "./EditTestimonial";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const data = await getApiWithAuthentication(`testimonial/${slug}`);
  console.log(data);

  if (!data || Object.keys(data).length === 0) {
    return;
  }

  return <EditTestimonial initialState={data} />;
};

export default page;
