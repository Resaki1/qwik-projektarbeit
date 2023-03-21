import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Welcome to lookal!</h1>
      <p>test</p>
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
