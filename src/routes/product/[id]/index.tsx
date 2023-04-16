import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { productDetails } from "~/data/productDetails";
import { products } from "~/data/products";
import { reviews } from "~/data/reviews";
import { stores } from "~/data/stores";

export const useGetProductDetails = routeLoader$(({ params }) => {
  const id = params.id;
  const product = products.find((product) => product.id === id);
  const details = productDetails.find((product) => product.id === id);
  return {
    ...product,
    ...details,
    reviews: reviews.filter((review) => review.productId === id),
    stores: stores.filter((store) => details?.stores.includes(store.id)),
  };
});

export default component$(() => {
  const product = useGetProductDetails().value;
  return (
    <div>
      <h1>{product.name}</h1>
      <div>
        {product.images?.map((image) => (
          <img key={image} src={image} alt={product.name} />
        ))}
      </div>
      <div>{product.price}€</div>
      <div>{product.description}</div>
      <div>{product.rating}/5</div>
      <div>{product.distance}km</div>
      <ul>
        {product.stores.map((store) => (
          <li key={store.id}>
            <div>{store.name}</div>
            <div>{store.address}</div>
            <img src={store.logo} alt={`${store.name} logo`} />
          </li>
        ))}
      </ul>
      <ul>
        {product.reviews?.map((review) => (
          <li key={review.id}>
            <div>{review.author}</div>
            <div>{review.rating}/5</div>
            <div>{review.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
});
