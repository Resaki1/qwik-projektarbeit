import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";
import ProductCard from "~/components/ProductCard/ProductCard";
import { products } from "./products";
import styles from "./products.scss?inline";

/* export const onGet = () => {
  console.log("test");
}; */

export const useGetProducts = loader$(() => {
  return {
    products,
  };
});

export default component$(() => {
  const signal = useGetProducts();
  useStylesScoped$(styles);

  return (
    <div class="product__list">
      {signal.value.products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
});
