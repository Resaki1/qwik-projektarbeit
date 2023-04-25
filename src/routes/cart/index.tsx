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

  let totalPrice = 0;

  if (cart.items.length === 0)
    return (
      <>
        <h1>Warenkorb</h1>
        <p>Upps, dein Warenkorb ist leer!</p>
      </>
    );

  return (
    <>
      <h1>Warenkorb</h1>
      <ul>
        {cartItems.value?.map((item, index) => {
          const quantity = cart.items.filter(
            (cartItem) => cartItem.id === item.id
          ).length;

          const price = item.price * quantity;
          totalPrice += price;

          return (
            <li key={index}>
              {quantity}x {item.name} - insgesamt {price}€
            </li>
          );
        })}
      </ul>
      <p>{totalPrice}€</p>
    </>
  );
});
