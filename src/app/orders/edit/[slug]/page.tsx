"use client";
import EditTemplate from "@/components/templates/orders/EditTemplate";

interface OrderEditProps {
  params: { slug: string };
}

const ProductEdit: React.FC<OrderEditProps> = ({ params }) => {
  return <EditTemplate />;
};

export default ProductEdit;