import { useState } from "react";
import { toast } from "../shared/Tost/toast";

const useHandleImageUpload = () => {
  const [ImageUrl, setImageUrl] = useState<string>("");

  const handleImageUpload = async (file: File) => {
    if (!file) return "Image Not Found";

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
    );
    // formData.append("folder", "collections/real-estate");

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string;

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (!res.ok) {
      console.error("Upload failed", await res.text());
      toast.error("Upload failed");
      return;
    }

    const data = await res.json();
    console.log("handleImage - res", data);
    setImageUrl(data.secure_url);
    console.log("handleImage - res", data.secure_url);
    return data.secure_url;
  };
  return { ImageUrl, handleImageUpload };
};

export default useHandleImageUpload;
