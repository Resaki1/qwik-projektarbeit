import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Carousel.scss?inline";

export default component$(({ images }: { images: string[] }) => {
  useStylesScoped$(styles);

  return (
    <div class="slider">
      <div class="slides">
        {images?.map((image, index) => (
          <div id={`slide-${index + 1}`} key={image}>
            <img
              src={image}
              alt={`slide ${index + 1}`}
              height={326}
              width={326}
            />
          </div>
        ))}
      </div>

      {images?.map((image, index) => (
        <a href={`#slide-${index + 1}`} key={image}>
          {index + 1}
        </a>
      ))}
    </div>
  );
});
