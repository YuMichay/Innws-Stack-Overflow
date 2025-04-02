import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description cannot be empty"),
  attachedCode: yup.string().required("Code cannot be empty"),
});