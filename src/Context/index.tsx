import { ReactNode, createContext, useState } from "react";

export interface ProductDetailI {
  name: string;
  images: string[];
  price: number;
  title: string;
  id: number;
  description: string;
}

interface ShoppingCartContextI {
  count: number;
  setcount: React.Dispatch<React.SetStateAction<number>>;
  showProductDetail: boolean;
  openProductDetail: () => void;
  closeProductDetail: () => void;
  productDetail: ProductDetailI;
  setproductDetail: React.Dispatch<React.SetStateAction<ProductDetailI>>;
  cartProducts: ProductDetailI[];
  setcartProducts: React.Dispatch<React.SetStateAction<ProductDetailI[]>>;
  showCheckoutSideMenu: boolean;
  openCheckoutSideMenu: () => void;
  closeCheckoutSideMenu: () => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextI>({
  count: 0,
  setcount: (value) => value,
  showProductDetail: false,
  openProductDetail: () => null,
  closeProductDetail: () => null,
  productDetail: {
    name: "",
    images: [],
    price: 0,
    title: "",
    id: 0,
    description: "",
  },
  setproductDetail: (value) => value,
  cartProducts: [],
  setcartProducts: (value) => value,
  showCheckoutSideMenu: false,
  openCheckoutSideMenu: () => "",
  closeCheckoutSideMenu: () => "",
});

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [count, setcount] = useState<number>(0);
  const [showProductDetail, setshowProductDetail] = useState<boolean>(false);
  const [showCheckoutSideMenu, setshowCheckoutSideMenu] =
    useState<boolean>(false);
  const [productDetail, setproductDetail] = useState<ProductDetailI>({
    name: "",
    images: [],
    price: 0,
    title: "",
    id: 0,
    description: "",
  });
  const [cartProducts, setcartProducts] = useState<ProductDetailI[]>([]);

  const openProductDetail = () => setshowProductDetail(true);
  const closeProductDetail = () => setshowProductDetail(false);

  const openCheckoutSideMenu = () => setshowCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setshowCheckoutSideMenu(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setcount,
        showProductDetail,
        openProductDetail,
        closeProductDetail,
        productDetail,
        setproductDetail,
        cartProducts,
        setcartProducts,
        showCheckoutSideMenu,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
