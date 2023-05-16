import { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="flex flex-col items-center mt-20">{children}</div>;
};

export default Layout;
