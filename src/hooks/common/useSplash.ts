import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useSplash = () => {
  const token = getCookie("token");
  const { push } = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (token) {
        push("/main");
      } else {
        push("/login");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
};

export default useSplash;
