export type Product = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  distance: number;
  tags: string[];
};

export type ProductDetails = {
  id: string;
  description: string;
  reviews: string[];
  rating: number;
  relatedProducts: string[];
  images: string[];
  brand: {
    name: string;
    logo: string;
  };
  stores: string[];
};

export type Review = {
  id: string;
  productId: string;
  author: string;
  rating: number;
  text: string;
  date: string;
};

export type Store = {
  id: string;
  name: string;
  address: string;
  logo: string;
};
