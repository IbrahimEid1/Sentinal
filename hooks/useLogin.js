import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import LoginServices from "../Services/LoginServices"
import { useNavigate } from "react-router";
const useLogin = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationKey: ["Login"],
    mutationFn: (data) => LoginServices(data),
    onSuccess: () => {
      toast.success("Login Successfully");
      navigate("/")
      
    },
    onError : (err) => {
      console.log(err);
      
      toast.error(`${err}` ,err?.response?.data?.error)
    },
  });
};

export default useLogin;
