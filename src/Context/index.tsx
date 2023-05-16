import { ReactNode, createContext, useState } from "react";

export const ShoppingCartContext = createContext<{
  count: number;
  setcount: React.Dispatch<React.SetStateAction<number>>;
}>({ count: 0, setcount: (value) => value });

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [count, setcount] = useState(0);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setcount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
