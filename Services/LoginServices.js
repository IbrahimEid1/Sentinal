import { InstanceAuth } from "../src/api/InstanceAuth";

const Login = async (data) => {
  const res = await InstanceAuth.post("auth/local", data);
  sessionStorage.setItem("jwt", JSON.stringify(res.data?.jwt));
  return res.data;
};

export default Login;
