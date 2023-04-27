# Qwik City App ⚡️

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

---

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/). QwikCity is just a extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations and deployment

Use the `npm run qwik add` command to add additional integrations. Some examples of integrations include: Cloudflare, Netlify or Express server, and the [Static Site Generator (SSG)](https://qwik.builder.io/qwikcity/guides/static-site-generation/).

```shell
npm run qwik add # or `yarn qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). During development, the `dev` command will server-side render (SSR) the output.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```

# Projektarbeit

## Benefits

- Great performance out of the box
  - Very fast page refreshes and navigations, because both JS and CSS are serialized and baked into the HTML -> HTML is pre-rendered on the server and can then be cached
- Uses JSX -> great when coming from React
- With QwikCity, server-functionality can be executed right on the web server without the need for an additional backend; code, types etc. for server and client can be written in the same file

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
- Same problems as every other new JS library: Very small ecosystem of third-party libraries compared to established players like React, Angular and Vue

## Lighthouse Score

| Performance | Best Practices | Accessibility | SEO  | PWA |
| ----------- | -------------- | ------------- | ---- | --- |
| 98%         | 100%           | 100%          | 100% | no  |
