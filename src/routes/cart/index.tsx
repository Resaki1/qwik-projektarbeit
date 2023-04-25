import { component$, useContext, useSignal } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { products } from "~/data/products";
import type { Cart } from "~/root";
import { cartContext } from "~/root";
import type { Product } from "~/types";

const getCartItems = server$((cart: Cart) => {
  const items = products.filter((product) =>
    cart.items.some((item) => item.id === product.id)
  );

  return items;
});

export default component$(() => {
  const cart = useContext(cartContext);
  const cartItems = useSignal<Product[]>();

  getCartItems(cart).then((value) => {
    cartItems.value = value;
  });

  return (
    <>
      <h1>Warenkorb</h1>
      {cart.items.length === 0 && <p>Upps, dein Warenkorb ist leer!</p>}
      <ul>
        {cartItems.value?.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}€
          </li>
        ))}
      </ul>
    </>
  );
});
