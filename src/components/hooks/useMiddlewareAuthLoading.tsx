import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const useMiddlewareAuthLoading = (loadingState?: boolean) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const cookie = getCookie("auth");
    if (cookie) {
      setIsLoading(false);
    }

    if (loadingState) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [loadingState]);

  return { isLoading };
};

export default useMiddlewareAuthLoading;
