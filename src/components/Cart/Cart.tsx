import { component$, useStyles$ } from "@builder.io/qwik";
import type { CartItem } from "~/routes/cart";
import styles from "./Cart.scss?inline";

export type CartProps = {
  items: CartItem[];
  totalPrice: number;
};

export default component$((cart: CartProps) => {
  useStyles$(styles);

  return (
    <div class="cart">
      <ul>
        {cart.items.map((item, index) => {
          const price = item.price * item.quantity;

          return (
            <li key={index}>
              {item.quantity}x
              <img src={item.imageUrl} alt={item.name} />
              {item.name}
              <span class="cart__item-price">insgesamt {price}€</span>
            </li>
          );
        })}
      </ul>
      <div class="cart__checkout">
        <h3>Gesamtpreis</h3>
        <p>{cart.totalPrice}€</p>
        <button class="button primary">Zur Kasse</button>
      </div>
    </div>
  );
});
