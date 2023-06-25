import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import {
  useAuthSession,
  useAuthSignin,
  useAuthSignout,
} from "~/routes/plugin@auth";
import styles from "./login.scss?inline";

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
      </div>
    </Form>
  );
});
