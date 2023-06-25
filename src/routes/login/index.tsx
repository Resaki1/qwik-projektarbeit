import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import {
  useAuthSession,
  useAuthSignin,
  useAuthSignout,
} from "~/routes/plugin@auth";

export default component$(() => {
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
    <Form action={signIn}>
      <input type="hidden" name="providerId" value="github" />
      <button>anmelden via Github</button>
    </Form>
  );
});
