import { logOutUser } from "@/store/slice/authSlice";
import { setCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";

const useLogout = () => {
  const dispatch = useDispatch();

  const logOut = (path?: string) => {
    console.log("User logout");

    dispatch(logOutUser());
    setCookie("auth", null);
    redirect(path ?? "/");
  };

  return { logOut };
};

export default useLogout;
