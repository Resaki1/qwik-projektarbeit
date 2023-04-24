import type { ProductDetails } from "~/types";

export const productDetails: ProductDetails[] = [
  {
    id: "dd3079c3-3b0f-4372-a156-0e04c2d92811",
    description:
      "Eine leistungsstarke Waschmaschine von Bosch mit vielen Funktionen. Spart Zeit, Wasser und Energie - Die Sensoren der ProSense Mengenautomatik ermitteln automatisch die Wäschemenge für einen maßgeschneiderten Waschzyklus. Zeit-, Wasser- und Energieverbrauch werden um bis zu 40 % gesenkt. So erhält Ihre Wäsche exakt die richtige Pflege bei jedem Waschvorgang.",
    reviews: [
      "ee9f1d2f-0d29-46b2-89a7-51856e6e94fb",
      "899f1d2f-0d29-46b2-89a7-51856e6e94fc",
    ],
    rating: 4.5,
    relatedProducts: ["ab0b69c9-9c1b-4a57-b6a3-7ca736b2d2b8"],
    images: [
      "https://media3.bosch-home.com/Product_Shots/1800x1012/MCSA02381108_WAW28570_PGA1_def.webp",
      "https://media3.bosch-home.com/Product_Shots/1800x1012/MCSA02381110_WAW28570_PGA2_def.webp",
      "https://media3.bosch-home.com/Product_Shots/1800x1012/MCSA02381113_WAW28570_PGA3_def.webp",
      "https://media3.bosch-home.com/Line_Drawings/1800x1012/MCZ_00390903_10800_WM16Y840_de-DE.webp",
    ],
    brand: {
      name: "Bosch",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bosch-logo.svg/1200px-Bosch-logo.svg.png",
    },
    stores: ["4"],
  },
  {
    id: "8f464f5e-0a2b-4f1f-b0fc-5d89e3f3d3e6",
    description:
      "Der Airfryer von Philips ist perfekt für eine gesunde und knusprige Zubereitung von Pommes, Hähnchen und vielem mehr.",
    reviews: [
      "8d71182f-7f84-45f3-8d8e-193b66a8f13e",
      "d47c2af2-0447-45fe-91aa-b7c343aeb86d",
    ],
    rating: 4.2,
    relatedProducts: [],
    images: ["https://picsum.photos/370/316"],
    brand: {
      name: "Philips",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Philips_logo.svg/1200px-Philips_logo.svg.png",
    },
    stores: ["1", "4"],
  },
  {
    id: "a7b1c063-8b8a-4660-975a-53c60d2280b7",
    description:
      "Der Tefal OptiGrill ist ein vielseitiger Grill für die Küche, mit dem man Fleisch, Fisch und Gemüse perfekt zubereiten kann.",
    reviews: ["8d71182f-7f84-45f3-8d8e-193b66a8f13e"],
    rating: 4.8,
    relatedProducts: [],
    images: ["https://picsum.photos/370/316"],
    brand: {
      name: "Tefal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tefal_logo.svg/1200px-Tefal_logo.svg.png",
    },
    stores: ["1", "4"],
  },
  {
    id: "7ee79d21-2070-48e1-9075-f7de52e5fb5d",
    description:
      "Die Sony PlayStation 5 ist eine moderne Spielkonsole mit beeindruckender Technologie und hervorragender Grafik.",
    reviews: [
      "4f4a4a24-4d2d-4f38-9d6b-50f0b8a3d431",
      "cf1656b2-6f11-4b27-a6c9-48f16c5d5d5e",
      "cc04c35c-5fb3-41bf-a7d9-26b2a7e51a29",
    ],
    rating: 4.5,
    relatedProducts: ["4c4dd4cb-4d70-4f77-8f15-7b101299ed6f"],
    images: ["https://picsum.photos/370/316"],
    brand: {
      name: "Sony",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sony_logo.svg/1200px-Sony_logo.svg.png",
    },
    stores: ["1", "4"],
  },
  {
    id: "c87f7a3a-eeb3-4692-a18f-7a9f5e774d8c",
    description:
      "Das Apple iPad Pro ist ein hochwertiges Tablet mit leistungsstarkem Prozessor und beeindruckendem Display.",
    reviews: [
      "b2d8a239-7086-4b26-a27c-3c8cf5fba413",
      "a3cf35e2-0d8d-4d43-9b29-81f02aa20f2d",
    ],
    rating: 4.0,
    relatedProducts: [],
    images: ["https://picsum.photos/370/316"],
    brand: {
      name: "Apple",
      logo: "https://www.apple.com/ac/structured-data/images/open_graph_logo.png?201809211223",
    },
    stores: ["4"],
  },
  {
    id: "4c4dd4cb-4d70-4f77-8f15-7b101299ed6f",
    description:
      "Die Bose QuietComfort 35 II sind hochwertige Noise-Cancelling-Kopfhörer mit hervorragendem Klang und gutem Tragekomfort.",
    reviews: [
      "bc2eb6e1-6d04-44b9-9bb1-56825d96abdb",
      "aef4397a-b51f-481c-8df1-96f2599c88b9",
    ],
    rating: 4.2,
    relatedProducts: ["7ee79d21-2070-48e1-9075-f7de52e5fb5d"],
    images: ["https://picsum.photos/370/316"],
    brand: {
      name: "Bose",
      logo: "https://logos-download.com/wp-content/uploads/2016/05/Bose_logo.png",
    },
    stores: ["4"],
  },
  {
    id: "6419a7c5-5d28-45c3-8d2e-c0f1d133decc",
    description: "Ralph Lauren Polo-Shirt",
    reviews: [
      "1d442e42-8c1d-4b9e-a6ec-aae21c08065f",
      "f23a196d-2e1d-4986-b154-6c938675e2d1",
    ],
    rating: 4.5,
    relatedProducts: ["f77233e8-04b9-4b4f-9e5f-b246c2e57e12"],
    images: ["https://picsum.photos/370/316"],
    brand: {
      name: "Ralph Lauren",
      logo: "https://i.pinimg.com/originals/c5/7c/17/c57c17f0585d5f5a7dc8bb1f329c3dcb.png",
    },
    stores: ["3"],
  },
  {
    id: "3219a7c5-5d28-45c3-8d2e-c0f1d133deef",
    description: "Orbea Gain F30",
    reviews: [
      "2a105055-1e1b-4379-9f63-f63f68cc792d",
      "8bf36a39-2b80-4b07-8f8c-3449a3b3a3f3",
    ],
    rating: 4.8,
    relatedProducts: ["48f3037d-0b71-4e1b-a5d5-7b8f1aee1927"],
    images: ["https://picsum.photos/370/316"],
    brand: {
      name: "Orbea",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Logo_orbea.png",
    },
    stores: ["2"],
  },
];
