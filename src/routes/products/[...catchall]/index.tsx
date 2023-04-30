import type { RequestEvent } from "@builder.io/qwik-city";
import { Search } from "../[searchtext]";

export const onGet = async ({ redirect }: RequestEvent) => {
  throw redirect(301, `/products/${Search.ALL}`);
};
