import { ReactNode, createContext, useState } from "react";

export const ShoppingCartContext = createContext<{
  count: number;
  setcount: React.Dispatch<React.SetStateAction<number>>;
  showProductDetail: boolean;
  openProductDetail: () => void;
  closeProductDetail: () => void;
  productDetail: {
    name: string;
    images: string[];
    price: number;
    title: string;
    id: number;
    description: string;
  };
  setproductDetail: React.Dispatch<
    React.SetStateAction<{
      name: string;
      images: string[];
      price: number;
      title: string;
      id: number;
      description: string;
    }>
  >;
}>({
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
});

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [count, setcount] = useState<number>(0);
  const [showProductDetail, setshowProductDetail] = useState<boolean>(false);
  const [productDetail, setproductDetail] = useState<{
    name: string;
    images: string[];
    price: number;
    title: string;
    id: number;
    description: string;
  }>({
    name: "",
    images: [],
    price: 0,
    title: "",
    id: 0,
    description: "",
  });

  const openProductDetail = () => setshowProductDetail(true);
  const closeProductDetail = () => setshowProductDetail(false);

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
