# Qwik City Projektarbeit

This project was part of my master's program and the goal was to explore [Qwik](https://qwik.builder.io/) / [QwikCity](https://qwik.builder.io/qwikcity/overview/). The use case I chose was to create an online Shop similar to Amazon.

<br />

# [Demo](https://9ad00805.qwik-projektarbeit.pages.dev/)

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

<br />

## Lighthouse Score

| Performance | Best Practices | Accessibility | SEO  | PWA |
| ----------- | -------------- | ------------- | ---- | --- |
| 98%         | 100%           | 100%          | 100% | no  |
