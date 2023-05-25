import { FC, MouseEvent, useContext } from "react";
import formatCurrency from "../../Helpers/formatCurrency";
import { ItemsI, ShoppingCartContext } from "../../Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

const Card: FC<ItemsI> = ({
  category: { name },
  images,
  price,
  title,
  id,
  description,
}) => {
  const {
    count,
    setcount,
    openProductDetail,
    setproductDetail,
    cartProducts,
    setcartProducts,
    openCheckoutSideMenu,
    closeProductDetail,
  } = useContext(ShoppingCartContext);

  const showProduct = () => {
    setproductDetail({ name, images, price, title, id, description });
    openProductDetail();
  };

  const addProductToCart = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    event.stopPropagation();
    setcount(count + 1);
    setcartProducts([
      ...cartProducts,
      { description, id, images, name, price, title },
    ]);
    closeProductDetail();
    openCheckoutSideMenu();
  };

  const renderIcon = () => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <div className="absolute transition duration-300 top-0 right-0 flex justify-center items-center bg-green-500 w-6 h-6 rounded-full m-2 p-1 cursor-default">
          <CheckIcon className="text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute transition duration-300 top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductToCart(event)}
        >
          <PlusIcon />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct()}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {name}
        </span>
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        {renderIcon()}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">{formatCurrency(price)}</span>
      </p>
    </div>
  );
};

export default Card;
