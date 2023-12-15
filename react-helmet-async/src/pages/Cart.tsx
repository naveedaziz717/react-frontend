import { Helmet } from "react-helmet-async";
import { CartCard } from "../components";
import "./Cart.css";

export const Cart = () => {
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "/assets/images/1002.png",
    },
  ];

  return (
    <main>
      <Helmet>
        <title>Cart Page</title>
        <meta
          name="description"
          content="Cart page contains the items that are added by the users."
        />
      </Helmet>
      <section className="cart">
        <h1>Cart Items: {products.length} | $198</h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
