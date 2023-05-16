import { FC, useContext } from "react";
import { ItemsI } from "../../Pages/Home";
import generateRandomNumber from "../../Helpers/randomNumber";
import formatCurrency from "../../Helpers/formatCurrency";
import { ShoppingCartContext } from "../../Context";

const Card: FC<ItemsI> = ({ category: { name }, images, price, title }) => {
  const { count, setcount } = useContext(ShoppingCartContext);

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {name}
        </span>
        <img
          src={images[generateRandomNumber(images.length) - 1]}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => setcount(count + 1)}
        >
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">{formatCurrency(price)}</span>
      </p>
    </div>
  );
};

export default Card;
