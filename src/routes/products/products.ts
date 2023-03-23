import type { Product } from "~/types";

export const products: Product[] = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/200/300",
    name: "Fahrrad",
    price: 100,
    distance: 0.7,
    tags: [
      "sport",
      "outdoor",
      "fahrrad",
      "bike",
      "rad",
      "velo",
      "mountainbike",
    ],
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/300/200",
    name: "Schuhe",
    price: 50,
    distance: 0.5,
    tags: ["sport", "outdoor", "schuhe", "shoes", "sneaker", "sneakers"],
  },
  // generiere 10 weitere produkte
  ...Array.from({ length: 100 }, (_, i) => ({
    id: i + 3,
    imageUrl: `https://picsum.photos/200/${200 + i}`,
    name: `Produkt ${i + 3}`,
    price: Math.floor(Math.random() * 100),
    distance: Math.random() * 10,
    tags: ["sport", "outdoor", "schuhe", "shoes", "sneaker", "sneakers"],
  })),
];
