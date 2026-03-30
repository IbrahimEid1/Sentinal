import * as yup from "yup";

export const ValidationForm = yup.object().shape({
  identifier: yup
    .string()
    .email("Enter a valid Email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
