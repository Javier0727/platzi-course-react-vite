import { ReactNode, createContext, useEffect, useState } from "react";

export interface ProductDetailI {
  name: string;
  images: string[];
  price: number;
  title: string;
  id: number;
  description: string;
}

export interface OrderI {
  date: Date;
  products: ProductDetailI[];
  totalProducts: number;
  totalPrice: number;
}

export interface ItemsI {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
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
  order: OrderI[];
  setorder: React.Dispatch<React.SetStateAction<OrderI[]>>;
  items: ItemsI[];
  setitems: React.Dispatch<React.SetStateAction<ItemsI[]>>;
  searchByTitle: string;
  setsearchByTitle: React.Dispatch<React.SetStateAction<string>>;
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
  order: [],
  setorder: () => "",
  items: [],
  setitems: () => "",
  searchByTitle: "",
  setsearchByTitle: () => "",
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
  const [order, setorder] = useState<OrderI[]>([]);
  const [items, setitems] = useState<ItemsI[]>([]);
  const [searchByTitle, setsearchByTitle] = useState<string>("");

  const openProductDetail = () => setshowProductDetail(true);
  const closeProductDetail = () => setshowProductDetail(false);

  const openCheckoutSideMenu = () => setshowCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setshowCheckoutSideMenu(false);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setitems(data);
    } catch (error) {
      console.log(error);
    }
  };

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
        order,
        setorder,
        items,
        setitems,
        searchByTitle,
        setsearchByTitle,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
