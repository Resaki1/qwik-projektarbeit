import {
  component$,
  useContext,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
import Carousel from "~/components/Carousel/Carousel";

import { productDetails } from "~/data/productDetails";
import { products } from "~/data/products";
import { reviews } from "~/data/reviews";
import { stores } from "~/data/stores";
import styles from "./product.scss?inline";
import { cartContext } from "~/root";
import { useAuthSession } from "~/routes/plugin@auth";
import { QThreeViewer } from "~/components/ThreeViewer/ThreeViewer";

export const useGetProductDetails = routeLoader$(({ params }) => {
  const id = params.id;
  const product = products.find((product) => product.id === id);
  const details = productDetails.find((product) => product.id === id);
  const productReviews = reviews.filter((review) => review.productId === id);

  let rating = 0;
  productReviews.forEach(
    (review) => (rating += review.rating / productReviews.length)
  );

  return {
    ...product,
    ...details,
    rating,
    reviews: productReviews,
    stores: stores.filter((store) => details?.stores.includes(store.id)),
  };
});

export default component$(() => {
  const product = useGetProductDetails().value;
  useStylesScoped$(styles);
  const cart = useContext(cartContext);

  const show3d = useSignal(false);

  const session = useAuthSession();
  const nav = useNavigate();

  return (
    <div class="product">
      <h1>{product.name}</h1>
      <div class="product-details">
        <div class="product-details__visuals">
          {show3d.value ? (
            <QThreeViewer />
          ) : (
            <Carousel images={[product.imageUrl!, ...product.images!]} />
          )}
          <button
            class="product-details__show-3d"
            onClick$={() => (show3d.value = !show3d.value)}
          >
            3D
          </button>
        </div>
        <div class="product-details__description">
          <div class="product-details__cta">
            <p class="product-details__price">{product.price}€</p>
            <>
              <button
                onClick$={() => {
                  cart.items.push({ id: product.id!, quantity: 1 });
                  if (!session.value?.user) {
                    nav("/login");
                  }
                }}
                class="button secondary"
              >
                zum Warenkorb
              </button>
              <button class="button primary">jetzt kaufen</button>
            </>
          </div>
          <div class="product-details__text">{product.description}</div>
        </div>
      </div>
      <div class="product-details__shops">
        <h3>Verfügbarkeit</h3>
        <ul>
          {product.stores.map((store) => (
            <li key={store.id}>
              <img
                src={store.logo}
                alt={`${store.name} logo`}
                height={36}
                width={128}
              />
              <div class="product-details__shops-address">
                <div>{store.name}</div>
                <a
                  href={
                    "https://www.google.com/maps/search/?api=1&query=" +
                    store.address
                  }
                  target="_blank"
                >
                  {store.address}
                </a>
              </div>
              <div class="product-details__shops-distance">
                {product.distance}km
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div class="product-details__reviews">
        <h3>Bewertungen</h3>
        <div class="product-details__reviews-rating">
          <div
            class="stars"
            style={{
              background: `linear-gradient(
    to right,
    #fc0 0%,
    #fc0 calc(${product.rating / 5} * 100%),
    #ddd calc(${product.rating / 5} * 100%),
    #ddd 100%
  )`,
            }}
          />
          <span>{Math.round(product.rating * 10) / 10}</span>
        </div>
        <ul>
          {product.reviews?.map((review) => (
            <li key={review.id}>
              <div class="product-details__reviews-author">
                <h4>{review.author}</h4>
                <div>{review.rating}/5</div>
                <div>{review.date}</div>
              </div>
              <div>{review.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
