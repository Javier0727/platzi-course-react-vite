import { XMarkIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import { ProductDetailI } from "../../Context";
import formatCurrency from "../../Helpers/formatCurrency";

const OrderCard: FC<
  ProductDetailI & { handleDelete: (id: number) => void }
> = ({ id, title, images, price, handleDelete }) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={images[0]}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
        <div className="flex items-center gap-2">
          <p className="text-lg font-medium">{formatCurrency(price)}</p>
          <XMarkIcon
            onClick={() => handleDelete(id)}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
