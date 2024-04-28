import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name Too Short")
    .max(50, "First Name Too Long")
    .required("First Name is Required"),
  lastName: Yup.string()
    .min(2, "Last Name Too Short")
    .max(50, "Last Name Too Long")
    .required("Last Name is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(6, "should be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  termsNconditions: Yup.bool().oneOf(
    [true],
    "You must agree with the terms and conditions"
  ),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is required"),
});
