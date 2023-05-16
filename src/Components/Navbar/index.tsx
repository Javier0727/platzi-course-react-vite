import { FC, ReactNode, useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const activeStyle = "underline underline-offset-4";

const NavLinkStyled: FC<{
  to: string;
  children: ReactNode;
  isLogo?: boolean;
}> = ({ children, to, isLogo }) => (
  <NavLink
    className={({ isActive }) =>
      isActive && !isLogo ? activeStyle : undefined
    }
    to={to}
  >
    {children}
  </NavLink>
);

const Navbar: FC = () => {
  const { count } = useContext(ShoppingCartContext);
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLinkStyled isLogo to="/">
            Shopi
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/">All</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/clothes">Clothes</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/electronics">Electronics</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/furnitures">Furnitures</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/toys">Toys</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/others">Others</NavLinkStyled>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">javi@javi.com</li>
        <li>
          <NavLinkStyled to="/my-orders">My Orders</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/my-account">My Account</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/sign-in">Sign In</NavLinkStyled>
        </li>
        <li className="flex items-center justify-center">
          <ShoppingCartIcon className="h-6 w-6 text-green-500" />
          <div>{count}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
