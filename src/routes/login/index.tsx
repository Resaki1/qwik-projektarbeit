import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Form } from "@builder.io/qwik-city";
import {
  useAuthSession,
  useAuthSignin,
  useAuthSignout,
} from "~/routes/plugin@auth";
import styles from "./login.scss?inline";
import type { Session } from "@auth/core/types";

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (session && new Date(session.expires) > new Date()) {
    throw event.redirect(302, `/account`);
  }
};

export default component$(() => {
  useStylesScoped$(styles);
  const signIn = useAuthSignin();
  const signOut = useAuthSignout();
  const session = useAuthSession();
  const user = session.value?.user;

  if (user) {
    return (
      <Form action={signOut}>
        <div>Logged in as {user.name}</div>
        <button>Sign Out</button>
      </Form>
    );
  }

  return (
    <Form action={signIn} class="login_page">
      <h2>LOGIN</h2>
      <h3>
        Melde dich jetzt an,
        <br />
        um alle Vorteile von lookal zu nutzen!
      </h3>
      <div class="login_buttons">
        <button
          onClick$={() =>
            signIn.submit({
              providerId: "github",
              options: { callbackUrl: "/account" },
            })
          }
          class="button github"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
            height={24}
            width={24}
          />
          anmelden via Github
        </button>
        <button
          onClick$={() =>
            signIn.submit({
              providerId: "google",
              options: { callbackUrl: "/account" },
            })
          }
          class="button google"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            height={24}
            width={24}
          />
          anmelden via Google
        </button>
      </div>
    </Form>
  );
});
