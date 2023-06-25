import {
  Resource,
  component$,
  useContext,
  useResource$,
} from "@builder.io/qwik";
import { Link, server$ } from "@builder.io/qwik-city";
import type { CartProps } from "~/components/Cart/Cart";
import Cart from "~/components/Cart/Cart";
import { products } from "~/data/products";
import { cartContext } from "~/root";
import type { Product } from "~/types";

export type CartItem = Product & {
  quantity: number;
};

export type CartType = {
  items: {
    id: string;
    quantity: number;
  }[];
};

const getCartItems = server$((cart: CartType) => {
  let totalPrice = 0;
  const items = products.filter((product) =>
    cart.items.some((item) => item.id === product.id)
  );

  const cartItems = items.map((item) => {
    const quantity = cart.items.filter(
      (cartItem) => cartItem.id === item.id
    ).length;

    totalPrice += item.price * quantity;

    return {
      ...item,
      quantity,
    };
  });

  return {
    items: cartItems,
    totalPrice: Math.round(totalPrice * 100) / 100,
  };
});

export default component$(() => {
  const cart = useContext(cartContext);
  //const cartItems = useSignal<Cart2>();

  const cartItems = useResource$<CartProps>(async ({ track }) => {
    track(() => cart.items);
    return await getCartItems(cart);
  });

  /* getCartItems(cart).then((value) => {
    cartItems.value = value;
  }); */

  if (cart.items.length === 0)
    return (
      <>
        <h1>Warenkorb</h1>
        <p>Upps, dein Warenkorb ist leer!</p>
        <p>
          <Link href="/products">Suche hier </Link>
          nach tollen Produkten in deiner Stadt!
        </p>
      </>
    );

  return (
    <>
      <h1>Warenkorb</h1>
      {
        <Resource
          value={cartItems}
          onPending={() => <p>Warenkorb lädt...</p>}
          onResolved={(cart) => <Cart {...cart} />}
        />
      }
    </>
  );
});
