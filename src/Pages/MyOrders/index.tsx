import { FC, useContext } from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

const MyOrders: FC = () => {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-4">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {order.map((orderData, i) => (
        <Link key={`${orderData}-Order-${i}`} to={`/my-orders/${i}`}>
          <OrdersCard {...orderData} />
        </Link>
      ))}
    </Layout>
  );
};

export default MyOrders;
