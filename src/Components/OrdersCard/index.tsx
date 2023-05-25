import { FC } from "react";
import { OrderI } from "../../Context";
import formatCurrency from "../../Helpers/formatCurrency";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard: FC<OrderI> = ({ totalPrice, totalProducts, date }) => {
  const dateFromated = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg w-80 p-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">{dateFromated}</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">
            {formatCurrency(totalPrice)}
          </span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
