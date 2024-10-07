"use client";
import Layout from "@/components/UI/organisms/Layout";
import { IOrders } from "@/interfaces/IOrders";
import { OrderEditValidator } from "@/validators/OrderEditValidator";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

interface EditTemplateProps {
  params: { slug: string };
}

const EditTemplate: React.FC = () => {
  //<div>{params.slug}</div>

  const formik = useFormik<IOrders>({
    initialValues: {
      dateOfCreation: 0,
      cpf: 0,
      forma_pagamento: "",
      qtd: 0,
      value: 0,
    },

    validationSchema: OrderEditValidator,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleSubmit, values, handleChange, setFieldValue, errors } = formik;

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="data"
          label="Data do pedido"
          fullWidth
          value={values.dateOfCreation}
          onChange={handleChange}
          error={!!errors.dateOfCreation}
          helperText={errors.dateOfCreation}
        />
        <TextField
          name="cpf"
          label="CPF"
          fullWidth
          value={values.cpf}
          onChange={handleChange}
          error={!!errors.cpf}
          helperText={errors.cpf}
        />
        <Select
          name="forma_pagamento"
          label="Tipo de Pagamento"
          fullWidth
          value={values.forma_pagamento}
          onChange={(e) => setFieldValue("forma_pagamento", e.target.value)}
          error={!!errors.forma_pagamento}
        >
          <MenuItem value="">Não informado</MenuItem>
          <MenuItem value="pix">PIX</MenuItem>
          <MenuItem value="credito">Crédito</MenuItem>
          <MenuItem value="debito">Débito</MenuItem>
          
        </Select>

        <TextField
          name="qtd"
          label="Quantidade"
          fullWidth
          value={values.qtd}
          onChange={handleChange}
          error={!!errors.qtd}
          helperText={errors.qtd}
        />
        <TextField
          name="value"
          label="Valor total do pedido"
          fullWidth
          value={values.value}
          onChange={handleChange}
          error={!!errors.value}
          helperText={errors.value}
        />
        <Button variant="outlined" color="secondary">
          Cancelar
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Atualizar
        </Button>
      </Box>
    </Layout>
  );
};
export default EditTemplate;
