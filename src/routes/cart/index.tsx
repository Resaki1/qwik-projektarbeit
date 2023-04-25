import { component$, useContext } from "@builder.io/qwik";
import { cartContext } from "~/root";

export default component$(() => {
  const cart = useContext(cartContext);
  return (
    <>
      <h1>Cart</h1>
      <ul>{cart.items.length}</ul>
    </>
  );
});
