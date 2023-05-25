import { FC, useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { useParams } from "react-router-dom";

const Home: FC = () => {
  const { items, searchByTitle, setsearchByTitle } =
    useContext(ShoppingCartContext);
  const params = useParams();

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(e) => setsearchByTitle(e.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items
          .filter((item) =>
            item.category.name
              .toLowerCase()
              .includes((params.category ?? "").toLowerCase())
          )
          .filter((item) =>
            item.title.toLowerCase().includes(searchByTitle.toLowerCase())
          )
          .map((item) => (
            <Card key={item.id} {...item} />
          ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
