import { BrowserRouter, useRoutes } from "react-router-dom";
import { FC } from "react";
import Home from "../Home";
import MyOrders from "../MyOrders";
import MyOrder from "../MyOrder";
import MyAccount from "../MyAccount/MyAccount";
import SignIn from "../SignIn";
import NotFound from "../404";
import Navbar from "../../Components/Navbar";
import { ShoppingCartProvider } from "../../Context";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return routes;
};

const App: FC = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
