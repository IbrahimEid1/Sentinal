import { ErrorMessage, useFormik } from "formik";
import { TextField, Box, Typography, Container } from "@mui/material";
import { ValidationForm } from "../../../Auth/Schema/ValidationLogin";
import { CircleCheckBig } from "lucide-react";
import { UserRoundX } from "lucide-react";
import { useState } from "react";
import { Eye } from "lucide-react";
import { Github } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import useLogin from "../../../hooks/useLogin";

const LoginForm = () => {
  //vars
  const { mutate: Login, isPending, data } = useLogin();
  //State
  const [showPassword, setShowPassword] = useState(false);
  // Function
  const handelPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    onSubmit: (values) => {
      Login(values);
    },
    validationSchema: ValidationForm,
  });

  return (
    <Container maxWidth="sm">
      <Box className="flex flex-col items-center mt-10 gap-5 relative ">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col shadow gap-5"
        >
          <TextField
            label="Email"
            name="identifier"
            type="email"
            value={formik.values.identifier}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.identifier && Boolean(formik.errors.identifier)
            }
            helperText={formik.touched.identifier && formik.errors.identifier}
            sx={{
              width: "320px",
              "& .MuiOutlinedInput-root": { borderRadius: "10px" },
            }}
          />
          {formik.touched.identifier && formik.errors.identifier && (
            <UserRoundX
              width={15}
              className="absolute top-4 right-4 text-red-500"
            />
          )}

          {formik.touched.identifier &&
            !formik.errors.identifier &&
            formik.values.identifier && (
              <CircleCheckBig className="absolute top-4 right-4 text-white fill-green-500" />
            )}

          <Box component={"div"} className="relative">
            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{
                width: "320px",
                "& .MuiOutlinedInput-root": { borderRadius: "10px" },
              }}
            />
            <Eye
              onClick={handelPassword}
              width={20}
              className="absolute top-4 right-4 cursor-pointer text-gray-400"
            />
          </Box>

          <button
            type="submit"
            className={
              isPending
                ? "bg-gray-500 text-white w-full h-10 flex items-center justify-center shadow-2xl rounded-xl  hover:bg-gray-800 cursor-pointer"
                : "  text-white w-full h-10 flex items-center justify-center shadow-2xl  cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-0.5 bg-black rounded-xl bg-linear-to-r from-[#1411d2] to-[#000000] active:opacity-80  hover:bg-blue-800  "
            }
            disabled={isPending}
          >
            {isPending && (
              <p className="w-4 h-4 -translate-x-2  border-4   border-t-blue-500 border-gray-300 rounded-full animate-spin"></p>
            )}
            Login
          </button>
        </form>
        <Typography variant="body1"> Or continue with SSO </Typography>
        <Box className="flex justify-evenly w-full ">
          <button className=" cursor-pointer  shadow w-25 flex items-center gap-2 justify-center h-15 font-medium  ">
            <FcGoogle /> Google
          </button>
          <button className=" cursor-pointer shadow w-25 flex items-center gap-2 justify-center h-15 font-medium  ">
            <Github width={15} /> Github
          </button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
