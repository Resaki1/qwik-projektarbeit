import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ShoppingIllustration from "~/components/ShoppingIllustration/ShoppingIllustration";
import styles from "./index.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="home_wrapper">
      <div class="home_claim-wrapper">
        <h1>
          Willkommen bei <span class="logo">lookal</span>!
        </h1>
        <p>
          Finde alles was du brauchst bei deinen{" "}
          <span class="logo primary">lookalen</span> Shops!
        </p>
      </div>
      <div class="home_illustration">
        <ShoppingIllustration />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to lookal",
  meta: [
    {
      name: "description",
      content: "lookal site description",
    },
  ],
};
