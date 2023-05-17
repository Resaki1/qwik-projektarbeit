# Qwik City Projektarbeit

This project was part of my master's program and the goal was to explore [Qwik](https://qwik.builder.io/) / [QwikCity](https://qwik.builder.io/qwikcity/overview/). The use case I chose was to create an online Shop similar to Amazon.

<br />

# [Demo](https://qwik-projektarbeit.pages.dev/)

<br />

## About Qwik

> Qwik is a new kind of web framework that can deliver instant loading web applications at any size or complexity. Your sites and apps can boot with about 1kb of JS (regardless of application complexity), and achieve consistent performance at scale.

> Qwik apps begin their life as SSR/SSG. Qwik serializes the application's state and framework state into HTML upon rendering the application. Then Qwik can resume execution where the server left off in the browser because all the data Qwik needs is in HTML. No JS needs to be downloaded or executed until it is needed to handle user interaction or rendering.

([Qwik Documentation](https://qwik.builder.io/docs/))

## About Qwik City

> Qwik City is an accompanying meta-framework for building Qwik sites. Qwik City provides directory base routing, data fetching, bundle optimization, prefetching, streaming, and interoperability with edge function providers to ensure that out of the box, your site can take full advantage of Qwik and deliver instant-on web apps.

([builder.io blog](https://www.builder.io/blog/qwik-and-qwik-city-have-reached-beta))

<br />

# Getting Started

To run this project on your local machine, you need to have Node.js installed. Clone this repository and run the following commands:

```bash
    cd qwik-projektarbeit
    npm install
    npm start
```

This will start the development server and you can access the application by navigating to http://localhost:5173.

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

<br />

# Conclusion

## Benefits

- Great performance out of the box
  - Very fast page refreshes and navigations, because both JS and CSS are serialized and baked into the HTML -> HTML is pre-rendered on the server and can then be cached
- Uses JSX -> great when coming from React
- With QwikCity, server-functionality can be executed right on the web server without the need for an additional backend; code, types etc. for server and client can be written in the same file
- Deployment to Cloudflare Pages without any problems (unlike SvelteKit)

## Drawbacks

- HMR not always working
  - Not for Layouts, dev server needs to be restarted
  - Not for external content (i.e., image URLs)
  - CSS sometimes not updating, needs restart as well
  - HMR often completely reloads the app and clears the state, making developing annoying
- Problems with persistent state
  - context works fine for app-wide state, but has no persistence between page refreshes
  - adding localstorage for persistency only works client-side
  - useVisibleTask$() lets you run code only client-side, but setting the state in that function leads to the state never updating anymore
  - setting it on page load does not work either
  - using Qwik City's `<Link />` instead of `<a />` for navigation would at least allow for the state to persist between page navigations, but the `<Link />` component can't be styled?
  - -> reactive and persistent state not possible?
- Same problem as every other new JS library: Very small ecosystem of third-party libraries compared to established players like React, Angular and Vue

<br />

## Lighthouse Score

| Performance | Best Practices | Accessibility | SEO  | PWA |
| ----------- | -------------- | ------------- | ---- | --- |
| 96%         | 100%           | 100%          | 100% | no  |

## Cloudflare Pages

Cloudflare's [wrangler](https://github.com/cloudflare/wrangler) CLI can be used to preview a production build locally. To start a local server, run:

```
npm run serve
```

Then visit [http://localhost:8787/](http://localhost:8787/)

### Deployments

[Cloudflare Pages](https://pages.cloudflare.com/) are deployable through their [Git provider integrations](https://developers.cloudflare.com/pages/platform/git-integration/).

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages). Next go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/).

Within the projects "Settings" for "Build and deployments", the "Build command" should be `npm run build`, and the "Build output directory" should be set to `dist`.

### Function Invocation Routes

Cloudflare Page's [function-invocation-routes config](https://developers.cloudflare.com/pages/platform/functions/routing/#functions-invocation-routes) can be used to include, or exclude, certain paths to be used by the worker functions. Having a `_routes.json` file gives developers more granular control over when your Function is invoked.
This is useful to determine if a page response should be Server-Side Rendered (SSR) or if the response should use a static-site generated (SSG) `index.html` file.

By default, the Cloudflare pages adaptor _does not_ include a `public/_routes.json` config, but rather it is auto-generated from the build by the Cloudflare adaptor. An example of an auto-generate `dist/_routes.json` would be:

```
{
  "include": [
    "/*"
  ],
  "exclude": [
    "/_headers",
    "/_redirects",
    "/build/*",
    "/favicon.ico",
    "/manifest.json",
    "/service-worker.js",
    "/about"
  ],
  "version": 1
}
```

In the above example, it's saying _all_ pages should be SSR'd. However, the root static files such as `/favicon.ico` and any static assets in `/build/*` should be excluded from the Functions, and instead treated as a static file.

In most cases the generated `dist/_routes.json` file is ideal. However, if you need more granular control over each path, you can instead provide you're own `public/_routes.json` file. When the project provides its own `public/_routes.json` file, then the Cloudflare adaptor will not auto-generate the routes config and instead use the committed one within the `public` directory.
