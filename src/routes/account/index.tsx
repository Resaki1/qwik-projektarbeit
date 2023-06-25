import { component$ } from "@builder.io/qwik";
import { useAuthSession, useAuthSignout } from "../plugin@auth";
import { Form } from "@builder.io/qwik-city";

export default component$(() => {
  const session = useAuthSession();
  const signOut = useAuthSignout();

  const user = session.value?.user;

  if (user) {
    return (
      <Form action={signOut}>
        {user.image && (
          <img
            src={user.image}
            width={256}
            height={256}
            alt={`Profilbild von ${user.name}`}
          />
        )}
        <div>{user.name}</div>
        <div>{user.email}</div>
        <button>abmelden</button>
      </Form>
    );
  }

  return <div>Nicht eingeloggt!</div>;
});
