import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import ProductCard from "~/components/ProductCard/ProductCard";
import { products } from "~/data/products";
import styles from "./products.scss?inline";

export enum Search {
  ALL = "all",
}

export const useGetProducts = routeLoader$(({ params }) => {
  const searchtext = params.searchtext.toLowerCase();

  if (searchtext === Search.ALL) {
    return {
      products,
    };
  }

  const filteredProducts = products.filter((product) => {
    const lowercaseTags = product.tags.map((tag) => tag.toLowerCase());
    return (
      product.name.toLowerCase().includes(searchtext) ||
      lowercaseTags.filter((tag) => tag.includes(searchtext)).length > 0
    );
  });
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
