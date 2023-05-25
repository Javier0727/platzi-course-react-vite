import { FC, useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const MyOrder: FC = () => {
  const { order } = useContext(ShoppingCartContext);
  const params = useParams();
  const orderIdPath =
    params.id === undefined ? order.length - 1 : Number(params.id);

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-6">
        <Link to={"/my-orders"} className="absolute left-0">
          <ChevronLeftIcon className="w-6 h-6 cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {orderIdPath >= 0 &&
          order[orderIdPath]?.products.map((orderData) => (
            <OrderCard key={orderData.id} {...orderData} />
          ))}
      </div>
    </Layout>
  );
};

export default MyOrder;
