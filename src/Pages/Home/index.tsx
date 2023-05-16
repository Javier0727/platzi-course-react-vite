import { FC, useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

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

const Home: FC = () => {
  const [items, setitems] = useState<ItemsI[]>([]);

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
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
