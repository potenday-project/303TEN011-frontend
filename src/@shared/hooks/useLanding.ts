import { useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

const useLanding = () => {
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

export default useLanding;
