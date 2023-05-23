import { XMarkIcon } from "@heroicons/react/24/solid";
import { FC, useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";

const CheckoutSideMenu: FC = () => {
  const {
    showCheckoutSideMenu,
    closeCheckoutSideMenu,
    cartProducts,
    setcartProducts,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id: number) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setcartProducts(filteredProducts);
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
      <div className="overflow-y-auto px-6">
        {cartProducts.map((cartProduct) => (
          <OrderCard
            key={cartProduct.id}
            {...cartProduct}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
