import { validatorMessage } from "@/constants/validatorMessage";
import * as Yup from "yup";

export const OrderEditValidator = () => {
  const {requiredField } = validatorMessage;
  return Yup.object().shape({
    dateOfCreation: Yup.number().required(requiredField),    
    forma_pagamento: Yup.string().required(requiredField),
    qtd: Yup.number().min(0.01, "Campo deve ter o peso min ${min}!"),
    cpf: Yup.number()
      .required(requiredField)
      .max(11, "Campo deve ter no máximo ${max} caracteres!"),
    value: Yup.number().max(
      50,
      "Campo deve ter no máximo ${max} caracteres!"
    ),
  });
};
