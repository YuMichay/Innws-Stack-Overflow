import * as yup from "yup";

export const schema = yup.object().shape({
  language: yup.string().required("Language is required"),
  code: yup.string().required("Code cannot be empty"),
});