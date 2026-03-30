import * as yup from "yup";

export const ValidationFormRegister = yup.object().shape({
  username: yup
    .string()
    .min(6, "Minimum username is 6 characters")
    .required("Username is required"),

  email: yup
    .string()
    .email("Enter a valid Email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
