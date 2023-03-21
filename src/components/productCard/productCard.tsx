import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { Product } from "~/types";
import styles from "./productCard.scss?inline";

type productCardProps = {
  product: Product;
};

export default component$(({ product }: productCardProps) => {
  useStylesScoped$(styles);

  return (
    <div key={product.id} class="product">
      <img src={product.imageUrl} alt={product.name} />
      <div class="product__info">
        <h3>{product.name}</h3>
        <div class="product__details">
          <span class="product__distance">{product.distance}km</span>
          <span>{product.price}€</span>
        </div>
      </div>
    </div>
  );
});
