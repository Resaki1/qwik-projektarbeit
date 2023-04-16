import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Logo from "../Logo/Logo";
import styles from "./Header.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const searchtext = useSignal("");

  return (
    <header>
      <Link href="/">
        <Logo />
      </Link>
      <div class="header_search">
        <input
          type="text"
          placeholder="Suche Produkte"
          bind:value={searchtext}
        />
        <div class="header_search-button">
          <Link
            href={`/products/${searchtext.value}`}
            class="header_search-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </Link>
        </div>
      </div>
      <Link href="/products">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
      </Link>
    </header>
  );
});
