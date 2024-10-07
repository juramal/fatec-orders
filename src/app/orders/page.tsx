"use client";

import axios from "axios";
import { env } from "@/config/env";
import { useEffect, useState } from "react";
import Layout from "@/components/UI/organisms/Layout";
import { Box } from "@mui/material";
import CustomTable from "@/components/UI/organisms/CustomTable";

const Orders = () => {

    const [rows, setRows] = useState([])

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await axios.get(`${env.apiBaseUrl}/pedidos`);

            const pedidos = response.data.pedidos.map((pedido: any) => ({
                id: pedido.id,
                description: pedido.descricao,
                value: pedido.valor,
                dateOfCreation: pedido.data,
                forma_pagamento: pedido.forma_pagamento,
                cpf: pedido.cpf,
                qtd: pedido.qtd

            }));

            setRows(pedidos)
        };

        fetchOrders();

    }, []);


    const headCells = [
        {
            id: "cpf",
            numeric: false,
            disablePadding: false,
            label: "CPF"
        },
        
        {
            id: "dateOfCreation",
            numeric: true,
            disablePadding: false,
            label: "Data"
        },
        
        {
            id: "forma_pagamento",
            numeric: false,
            disablePadding: false,
            label: "Forma de Pagamento",
        },    
      

        {
            id: "qtd",
            numeric: true,
            disablePadding: false,
            label: "Quantidade"
        },

        {
           
            id: "value",
            numeric: true,
            disablePadding: false,
            label: "Valor",
        }
    ]


    return (
        <Layout>
            <Box> Lista de Pedidos</Box>
            <CustomTable rows={rows} headCells={headCells} editPath="/orders/edit"></CustomTable>
        </Layout>
    )
}




export default Orders;