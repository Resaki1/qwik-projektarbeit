# Qwik City Projektarbeit

This project was part of my master's program and the goal was to explore [Qwik](https://qwik.builder.io/) / [QwikCity](https://qwik.builder.io/qwikcity/overview/). The use case I chose was to create an online Shop similar to Amazon.

<br />

# [Demo](https://qwik-projektarbeit.pages.dev/)

<img src="https://qwik-projektarbeit.pages.dev/screenshot.png" />

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

<br />

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

<br />

To run qwik in production mode locally, run:

```bash
  npm run preview
```

This will start a preview server, which can be accessed on http://localhost:4173/.

The final deployment on Cloudflare Pages can be accessed on https://qwik-projektarbeit.pages.dev/

<br />

# Conclusion

## Benefits

- Great performance out of the box
  - Very fast page refreshes and navigations, because both JS and CSS are serialized and baked into the HTML -> HTML is pre-rendered on the server and can then be cached
- Uses JSX -> great when coming from React
- With QwikCity, server-functionality can be executed right on the web server without the need for an additional backend; code, types etc. for server and client can be written in the same file
  - QwikCity also makes it easy to extend the application to a PWA (even though the documentation on that isn't great)
- Deployment to Cloudflare Pages without any problems (unlike SvelteKit)
- Authentication made relatively simple thanks to integration of Auth.js

## Drawbacks

- HMR not always working
  - Not for Layouts, dev server needs to be restarted
  - Not for external content (i.e., image URLs)
  - CSS sometimes not updating, needs restart as well
  - HMR often completely reloads the app and clears the state, making developing annoying
- Problems with persistent state
  - context works fine for app-wide state, but has no persistence between page refreshes
  - adding localstorage for persistency only works client-side
  - useVisibleTask$() lets you run code only client-side, but setting the state in that function leads to the state never updating again
  - setting it on page load does not work either
  - using Qwik City's `<Link />` instead of `<a />` for navigation would at least allow for the state to persist between page navigations, but the `<Link />` component can't be styled?
  - -> reactive and persistent state not possible?
- Many more small bugs
- Same problem as every other new JS library: Very small ecosystem of third-party libraries compared to established players like React, Angular and Vue

Overall, Qwik is a promising framework with excellent performance and JSX support, making it appealing for React developers. The integration of server functionality through QwikCity is a standout feature, but the ecosystem is still limited compared to more established frameworks. I think it is definetly worth to check out Qwik, but it will provbably not replace e.g., React and Next.js.

<br />

## Lighthouse Score

| Performance | Best Practices | Accessibility | SEO  | PWA |
| ----------- | -------------- | ------------- | ---- | --- |
| 95%         | 100%           | 92%           | 100% | yes |
