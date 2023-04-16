import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import ProductCard from "~/components/ProductCard/ProductCard";
import { products } from "./products";
import styles from "./products.scss?inline";

/* export const onGet = () => {
  console.log("test");
}; */

export const useGetProducts = routeLoader$(({ params }) => {
  const searchtext = params.searchtext.toLowerCase();
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchtext) ||
      product.tags.indexOf(searchtext.toLowerCase()) > 0
  );
  return {
    products: filteredProducts,
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
