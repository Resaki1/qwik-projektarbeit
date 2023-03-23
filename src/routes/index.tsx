import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Logo from "~/components/Logo/Logo";
import styles from "./index.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="home_wrapper">
      <h1>
        Willkommen bei <Logo />!
      </h1>
      <p>Finde alles was du brauchst bei deinen lokalen Shops!</p>
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
