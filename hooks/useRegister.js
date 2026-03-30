import Register from "../Services/Register";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
const useRegister = ({setActive}) => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data) => Register(data),

    onSuccess: () => {
      toast.success("Register success!");
    setActive("Login")
    },
    onError: (error) => {
      toast.error("Register failed", error?.response?.data?.error);
    },
  });
};

export default useRegister;
