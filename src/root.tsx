import {
  component$,
  createContextId,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.scss";

export type Cart = {
  items: {
    id: string;
    quantity: number;
  }[];
};

export const cartContext = createContextId<Cart>("cart");

export default component$(() => {
  const cart = useStore({
    items: [],
  });
  useContextProvider(cartContext, cart);
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Shop smarter and support your community with lookal. Find and explore a wide range of products online, and buy them locally in your town. Get your purchases quickly with no need to wait days for delivery, and support your local shops in the process. Discover the benefits of buying locally with lookal today!"
        />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
