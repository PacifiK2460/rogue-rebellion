// Define product type

export type Product = {
  id: number;
  name: string;
  price: number;
  brand: string;
  type: string;
  subtype: string;
  image: string;
};

export type CartItem = Product & {
  quantity: number;
};

/* For Porpuse of this example, we will use a static list of products
    the type will be from: 

    - Techwear:
        - Pants
        - Jackets
        - Hoodies
        - Vest
        - Shirts
        - Shorts
    - Footwear:
        - Boots
        - Sneakers
    - Headwear:
        - Caps
        - Beanies
    - Jewelry:
        - Pants Chains
        - Necklaces
        - Rings
        - Bracelets
*/

export const products: Product[] = [
  {
    id: 1,
    name: "Techwear Pants",
    price: 120,
    brand: "Nike",
    type: "Techwear",
    subtype: "Pants",
    image: "image1.jpg",
  },
  {
    id: 2,
    name: "Techwear Jacket",
    price: 200,
    brand: "Adidas",
    type: "Techwear",
    subtype: "Jackets",
    image: "image2.jpg",
  },
  {
    id: 3,
    name: "Footwear Boots",
    price: 150,
    brand: "Hollister",
    type: "Footwear",
    subtype: "Boots",
    image: "image3.jpg",
  },
  {
    id: 4,
    name: "Headwear Cap",
    price: 50,
    brand: "Prada",
    type: "Headwear",
    subtype: "Caps",
    image: "image4.jpg",
  },
  {
    id: 5,
    name: "Jewelry Necklace",
    price: 75,
    brand: "Gucci",
    type: "Jewelry",
    subtype: "Necklaces",
    image: "image5.jpg",
  },
  {
    id: 6,
    name: "Techwear Hoodie",
    price: 100,
    brand: "Nike",
    type: "Techwear",
    subtype: "Hoodies",
    image: "image6.jpg",
  },
  {
    id: 7,
    name: "Footwear Sneakers",
    price: 80,
    brand: "Adidas",
    type: "Footwear",
    subtype: "Sneakers",
    image: "image7.jpg",
  },
  {
    id: 8,
    name: "Headwear Beanie",
    price: 30,
    brand: "Hollister",
    type: "Headwear",
    subtype: "Beanies",
    image: "image8.jpg",
  },
  {
    id: 9,
    name: "Jewelry Bracelet",
    price: 60,
    brand: "Prada",
    type: "Jewelry",
    subtype: "Bracelets",
    image: "image9.jpg",
  },
  {
    id: 10,
    name: "Techwear Vest",
    price: 110,
    brand: "Gucci",
    type: "Techwear",
    subtype: "Vest",
    image: "image10.jpg",
  },
  // ... add more products as needed
];

let randomItems = (n: number) => {
  return Array.from({ length: n }, (_, i) => i + 1);
};

let randomnumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// choose a random item from the products list
let randomItem = (products: Product[]) => {
  return products[randomnumber(0, products.length - 1)];
};

const initialCartItems = 5;

export let Cart: CartItem[] = randomItems(
  randomnumber(1, initialCartItems)
).map(() => {
  return {
    ...randomItem(products),
    quantity: randomnumber(1, 5),
  };
});
