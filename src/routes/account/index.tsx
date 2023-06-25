import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { useAuthSession, useAuthSignout } from "../plugin@auth";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Form } from "@builder.io/qwik-city";
import styles from "./account.scss?inline";
import type { Session } from "@auth/core/types";

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (!session || new Date(session.expires) < new Date()) {
    throw event.redirect(302, `/login`);
  }
};

export default component$(() => {
  useStylesScoped$(styles);
  const session = useAuthSession();
  const signOut = useAuthSignout();

  const user = session.value?.user;

  if (user) {
    return (
      <Form action={signOut} class="account_page">
        {user.image && (
          <img
            src={user.image}
            width={256}
            height={256}
            referrerPolicy="no-referrer"
            alt={`Profilbild von ${user.name}`}
          />
        )}
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
        <button class="button primary">abmelden</button>
      </Form>
    );
  }

  return <div>Nicht eingeloggt!</div>;
});
