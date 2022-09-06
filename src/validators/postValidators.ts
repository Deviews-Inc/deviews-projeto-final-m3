import * as yup from "yup";

const schema = yup.object({
  content: yup.string().required("Campo obrigatório"),
  img: yup.string(),
});

export default schema;
