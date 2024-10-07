import * as Yup from "yup";

export const ProductEditValidater = () => {
  return Yup.object().shape({
    description: Yup.string().required("Campo Obrigatório").min(3).max(100),
    brand: Yup.string().required("Campo Obrigatório").max(80),
    value: Yup.number()
      .min(0.01, "Campo deve ter pelo menos ${min}")
      .required(),
    weight: Yup.number().min(0.01, "Campo deve ter pelo menos ${min}"),
    flavor: Yup.string().max(50, "Campo deve ter no maximo ${max}"),
  });
};
