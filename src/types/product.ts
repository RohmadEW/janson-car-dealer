export interface Product {
  path_image: string;
  special?: boolean;
  camera?: number;
  video?: number;
  title: string;
  price: number;
  old_price: number;
  engine?: string;
  year?: number;
  fuel?: number;
  transmission?: string;
}

export const listProducts: Product[] = [
  {
    path_image: "/images/car-1.png",
    special: true,
    camera: 4,
    title: "New 3.6 L 2021 Ford Bronco",
    price: 40000,
    old_price: 45000,
    engine: "3.6 L",
    year: 2021,
    fuel: 5451,
    transmission: "Manual",
  },
  {
    path_image: "/images/car-2.png",
    special: true,
    camera: 4,
    title: "New Electrical 2022 Tesla Roadster",
    price: 125000,
    old_price: 120000,
    engine: "Electrical",
    year: 2022,
    transmission: "Automatic",
  },
  {
    path_image: "/images/car-3.png",
    special: true,
    camera: 3,
    title: "New 3.5 L 2021 Honda Accord",
    price: 38000,
    old_price: 35000,
    engine: "3.5 L",
    year: 2021,
    fuel: 15,
    transmission: "Automatic",
  },
  {
    path_image: "/images/car-4.png",
    special: true,
    camera: 4,
    title: "New Electrical 2022 Tesla Roadster",
    price: 125000,
    old_price: 120000,
    engine: "Electrical",
    year: 2022,
    transmission: "Automatic",
  },
  {
    path_image: "/images/car-5.png",
    camera: 4,
    video: 1,
    title: "New 3.5 L 2020 Toyota Avalon",
    price: 40000,
    old_price: 32500,
    engine: "3.5 L",
    year: 2020,
    fuel: 9500,
    transmission: "Automatic",
  },
  {
    path_image: "/images/car-6.png",
    camera: 5,
    title: "New 3.5 L 2020 BMW M5",
    price: 45000,
    old_price: 36000,
    engine: "3.6 L",
    year: 2020,
    fuel: 658,
    transmission: "Automatic",
  },
  {
    path_image: "/images/car-7.png",
    camera: 4,
    title: "New 3.5 L 2020 BMW M440I",
    price: 56000,
    old_price: 52000,
    engine: "4.4 L",
    year: 2020,
    fuel: 35,
    transmission: "Automatic",
  },
  {
    path_image: "/images/car-8.png",
    camera: 4,
    video: 1,
    title: "New 3.5 L 2020 Mercedes S-Class",
    price: 77000,
    old_price: 70000,
    engine: "5.5 L",
    year: 2020,
    fuel: 874,
    transmission: "Automatic",
  },
  {
    path_image: "/images/car-1.png",
    camera: 4,
    title: "New 3.5 L 2020 Ford Bronco",
    price: 45000,
    old_price: 40000,
    engine: "3.6 L",
    year: 2021,
    fuel: 5451,
    transmission: "Manual",
  },
];
