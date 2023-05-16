import { XMarkIcon } from "@heroicons/react/24/solid";
import { FC, useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import generateRandomNumber from "../../Helpers/randomNumber";
import formatCurrency from "../../Helpers/formatCurrency";

const ProductDetail: FC = () => {
  const {
    showProductDetail,
    closeProductDetail,
    productDetail,
    setproductDetail,
  } = useContext(ShoppingCartContext);

  return (
    <aside
      className={`w-[360px] flex flex-col fixed bg-white right-0 border border-black rounded-lg h-[calc(100vh-80px)] ${
        showProductDetail ? "flex" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          onClick={() => {
            setproductDetail({
              name: "",
              images: [],
              price: 0,
              title: "",
              id: 0,
              description: "",
            });
            closeProductDetail();
          }}
          className="w-6 h-6 cursor-pointer"
        />
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={
            productDetail.images[
              generateRandomNumber(productDetail.images.length) - 1
            ]
          }
          alt={productDetail.title}
        />
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2">
            {formatCurrency(productDetail.price)}
          </span>
          <span className="font-medium text-base">{productDetail.title}</span>
          <span className="font-light text-sm">
            {productDetail.description}
          </span>
        </p>
      </figure>
    </aside>
  );
};

export default ProductDetail;
