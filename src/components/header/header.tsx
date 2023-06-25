import {
  component$,
  useContext,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import Logo from "../Logo/Logo";
import styles from "./Header.scss?inline";
import { cartContext } from "~/root";
import { useAuthSession } from "~/routes/plugin@auth";

export default component$(() => {
  const navigate = useNavigate();
  useStylesScoped$(styles);

  const cart = useContext(cartContext);
  const searchtext = useSignal("");

  const session = useAuthSession();

  return (
    <header>
      <Link href="/" aria-label="lookal's homepage">
        <Logo />
      </Link>
      <div class="header_search">
        <input
          type="text"
          placeholder="Suche Produkte"
          bind:value={searchtext}
          /* preventdefault:keypress */
          onKeyPress$={(event) => {
            if (event.key === "Enter") {
              return navigate(`/products/${searchtext.value}`);
            }
          }}
        />
        <div class="header_search-button">
          <Link
            href={`/products/${searchtext.value}`}
            class="header_search-button"
            aria-label="search for products"
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
      <div class="header_right">
        <Link href="/cart" aria-label="your shopping cart">
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
          <span class="header_cart-count">{cart.items.length}</span>
        </Link>

        <div class="header_session">
          {!session.value?.user ? (
            <Link href="/login" class="header_login" aria-label="login">
              login
            </Link>
          ) : (
            <Link
              href="/account"
              class="header_account"
              aria-label="your account"
              style={{
                display: "flex",
              }}
            >
              {session.value?.user?.image ? (
                <img
                  src={session.value?.user?.image}
                  width={32}
                  height={32}
                  alt={`Profilbild von ${session.value?.user?.name}`}
                />
              ) : (
                "account"
              )}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
});
