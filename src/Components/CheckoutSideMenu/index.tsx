import { XMarkIcon } from "@heroicons/react/24/solid";
import { FC, useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import formatCurrency from "../../Helpers/formatCurrency";
import totalPrice from "../../Helpers/getTotalPrice";
import { Link } from "react-router-dom";

const CheckoutSideMenu: FC = () => {
  const {
    showCheckoutSideMenu,
    closeCheckoutSideMenu,
    cartProducts,
    setcartProducts,
    order,
    setorder,
    setcount,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id: number) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setcartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };
    setorder([...order, orderToAdd]);
    setcartProducts([]);
    setcount(0);
  };

  return (
    <aside
      className={`w-[360px] flex flex-col fixed bg-white right-0 top-20 border border-black rounded-lg h-[calc(100vh-80px)] ${
        showCheckoutSideMenu ? "flex" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          onClick={() => {
            closeCheckoutSideMenu();
          }}
          className="w-6 h-6 cursor-pointer"
        />
      </div>
      <div className="overflow-y-auto px-6 flex-1">
        {cartProducts.map((cartProduct) => (
          <OrderCard
            key={cartProduct.id}
            {...cartProduct}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex items-center justify-between mb-2">
          <span className="font-light">Total</span>
          <span className="font-medium text-2xl">
            {formatCurrency(totalPrice(cartProducts))}
          </span>
        </p>
        <Link to={"/my-orders/last"}>
          <button
            className="w-full bg-black text-white py-3 rounded-lg"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
