import * as yup from "yup";

export const Schema = yup.object().shape({
  name: yup.string(),
  username: yup.string(),
  bio: yup.string(),
  img: yup.string(),
});
