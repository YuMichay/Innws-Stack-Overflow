import * as yup from "yup";

const schemaBase = {
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username must be at least 5 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /[a-z]/,
      "Password must contain at least one lowercase letter"
    )
    .matches(
      /[A-Z]/,
      "Password must contain at least one uppercase letter"
    )
    .matches(
      /\d/,
      "Password must contain at least one number"
    )
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one symbol"
    ),
};

export const schemaLogin = yup.object({
  ...schemaBase,
});

export const schemaRegister = yup.object({
  ...schemaBase,
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});