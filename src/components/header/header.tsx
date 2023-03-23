import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Logo from "../Logo/Logo";
import styles from "./Header.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <Link href="/">
        <Logo />
      </Link>
      <Link href="/products">Suche</Link>
    </header>
  );
});
