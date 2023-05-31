import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

import api from "@/@shared/utils/api";
import { deleteCookie } from "cookies-next";

const postLeave = async () => {
  await api.post("/api/user/withdraw");
};

const usePostLeave = () => {
  const { replace } = useRouter();

  return useMutation(postLeave, {
    onSuccess: () => {
      deleteCookie("token");
      deleteCookie("nickname");
      replace("/");
    },
  });
};

export default usePostLeave;
