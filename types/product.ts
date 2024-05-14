// Define product type
"use client";

import { useLocalStorage } from "@/lib/storage";
import { parse } from "node-html-parser";
import axios from "axios";
import cheerio from "cheerio";

export type Product = {
  id: number;
  name: string;
  price: number;
  brand: string;
  type: string;
  subtype: string;
  images: string[];
};

export type CartItem = Product & {
  quantity: number;
};

export class Cart {
  private items: CartItem[];

  public addToCart(item: Product) {
    let existingItem = this.items.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }

    // Store the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(Cart));
  }

  public removeFromCart(item: Product) {
    let existingItem = this.items.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {
      // Remove the item from the cart
      this.items = this.items.filter((cartItem) => cartItem.name !== item.name);
    }

    // Store the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(Cart));
  }

  public getCart() {
    return this.items;
  }

  public clearCart() {
    this.items = [];
    localStorage.setItem("cart", JSON.stringify(Cart));
  }

  constructor() {
    // this.items = JSON.parse(localStorage.getItem("cart") || "[]");
    this.items = [];
  }

  // public static async getNikeProducts(type: string) {
  //   console.log("Fetching products from Nike");
  //   // const response = await fetch(`https://www.nike.com/mx/w?q=${type}`);
  //   const { data } = await axios.get(`https://www.nike.com/mx/w?q=${type}`);

  //   const $ = cheerio.load(data);
  //   const _products: Product[] = [];

  //   // The list is inside a div with the class: "product-grid css-1hl0l1w", we need to get that from "body"
  //   $(".product-card__body").each(async (index, element) => {
  //     let new_product: Product = {
  //       name: "",
  //       price: 0,
  //       brand: "Nike",
  //       type: "Techwear",
  //       subtype: type,
  //       images: [],
  //     };

  //     new_product.name = $(element).find(".product-card__title").text();
  //     new_product.price = parseInt(
  //       $(element)
  //         .find(".product-price")
  //         .text()
  //         .replace("$", "")
  //         .replace(",", "")
  //     );

  //     // Get link to product
  //     const productLink = $(element)
  //       .find(".product-card__link-overlay")
  //       .attr("href");
  //     console.log(productLink);

  //     if (!productLink) return;

  //     // Go to the link to get the images
  //     const productResponse = await axios.get(productLink);
  //     const productData = productResponse.data;

  //     // Get the images contaienr
  //     const $$ = cheerio.load(productData);
  //     const imagesContainer = $$("div.product-card__media-container");
  //     const imageDivs = imagesContainer.children();

  //     // Get the images
  //     imageDivs.toArray().forEach((imageDiv) => {
  //       const image = $(imageDiv).find("img").attr("src");
  //       console.log("Image: ", image);
  //       return;
  //       new_product.images.push(image || "");
  //     });

  //     // The images are inside a img tag, we need to get the src attribute
  //     $(element)
  //       .find("img")
  //       .each((index, element) => {
  //         new_product.images.push($(element).attr("src") || "");
  //       });

  //     _products.push(new_product);
  //   });

  //   // console.log(_products);

  //   return;
  // }
}

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
    name: "Nike Dri-FIT",
    price: 799,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bfb54e21-4dd5-4904-b33a-abaed1c147ee/playera-de-fitness-dri-fit-n8nkG5.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f8993479-f95e-4358-9b05-e658f785a56d/playera-de-fitness-dri-fit-n8nkG5.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b83f6a8e-5a16-4c9c-a4e8-b8c1049aadb2/playera-de-fitness-dri-fit-n8nkG5.png",
    ],
  },
  {
    id: 2,
    name: "Jordan Mexico City Skyline",
    price: 799,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9c3159b2-2e65-447b-a69d-820f973048b2/playera-de-manga-corta-jordan-mexico-city-skyline-nVmCsw.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f38e561f-c2e0-4e01-bff4-ad03c7bf668a/playera-de-manga-corta-jordan-mexico-city-skyline-nVmCsw.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9ff1df5a-e486-48b3-84f6-989533a17011/playera-de-manga-corta-jordan-mexico-city-skyline-nVmCsw.png",
    ],
  },
  {
    id: 3,
    name: "Nike Playera de fitness para hombre",
    price: 899,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e8a3af76-8d09-49de-a98d-90eab091959d/playera-de-fitness-dlsJTC.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/30b082ff-5b68-4876-95be-3efe174a3181/playera-de-fitness-dlsJTC.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e40f389-b395-4623-bbf8-e6bbb04e475e/playera-de-fitness-dlsJTC.png",
    ],
  },
  {
    id: 4,
    name: "Camisa de básquetbol de manga corta Dri-FIT para hombre",
    price: 1799,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a62d0732-8ed3-475a-a6c7-74af42311dc3/camisa-de-b%C3%A1squetbol-de-manga-corta-dri-fit-kevin-durant-B1V4BT.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aaa8cc38-b20b-4791-96c5-57af973bb87a/camisa-de-b%C3%A1squetbol-de-manga-corta-dri-fit-kevin-durant-B1V4BT.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/08a298ca-4b1d-4ccd-a293-a404fb0df917/camisa-de-b%C3%A1squetbol-de-manga-corta-dri-fit-kevin-durant-B1V4BT.png",
    ],
  },
  {
    id: 5,
    name: "Chamarra de running Repel para hombre",
    price: 2449,
    brand: "Nike",
    type: "Techwear",
    subtype: "Jackets",
    images: [
      "https://static.nike.com/a/images/t_default/6b99727a-a48c-462f-a1ac-6527164401fc/chamarra-de-running-repel-windrunner-g3srcQ.png",
      "https://static.nike.com/a/images/t_default/b8fac599-659b-4c8f-b45e-d9318dc380bb/chamarra-de-running-repel-windrunner-g3srcQ.png",
      "https://static.nike.com/a/images/t_default/e83ba3c5-fedf-4d13-9194-a0a796407a24/chamarra-de-running-repel-windrunner-g3srcQ.png",
      "https://static.nike.com/a/images/t_default/59330de0-13d2-4b24-8799-5a37f55b5d8b/chamarra-de-running-repel-windrunner-g3srcQ.png",
      "https://static.nike.com/a/images/t_default/9e2e02ab-48a5-4a13-9124-55cdefc87203/chamarra-de-running-repel-windrunner-g3srcQ.png",
      "https://static.nike.com/a/images/t_default/311d483f-7881-4ee4-9200-ef7ab6fc5389/chamarra-de-running-repel-windrunner-g3srcQ.png",
      "https://static.nike.com/a/images/t_default/ee6ddebd-265e-4a83-9c81-5a8271f6f702/chamarra-de-running-repel-windrunner-g3srcQ.png",
      "https://static.nike.com/a/images/t_default/46ca8dc8-b7d1-41c3-a31a-e160d9b587c6/chamarra-de-running-repel-windrunner-g3srcQ.png",
      "https://static.nike.com/a/images/t_default/addc4ca9-3a86-45c5-aa78-f8e1c6e51b3d/chamarra-de-running-repel-windrunner-g3srcQ.png",
      "https://static.nike.com/a/images/t_default/ff3be158-c23e-4581-b0e4-0b6d6797479e/chamarra-de-running-repel-windrunner-g3srcQ.png",
    ],
  },
  {
    id: 6,
    name: "Pants de básquetbol para hombre",
    price: 1399,
    brand: "Nike",
    type: "Techwear",
    subtype: "Pants",
    images: [
      "https://static.nike.com/a/images/t_default/f3c082e9-eef6-4df7-aa5e-8c2071a16aaf/pants-de-b%C3%A1squetbol-starting-5-j4wGHm.png",
      "https://static.nike.com/a/images/t_default/a05603db-6de8-4ffd-8c4e-e133a90aa3a2/pants-de-b%C3%A1squetbol-starting-5-j4wGHm.png",
      "https://static.nike.com/a/images/t_default/843aa2cd-3b23-41ae-b84d-97875c9b9161/pants-de-b%C3%A1squetbol-starting-5-j4wGHm.png",
      "https://static.nike.com/a/images/t_default/f84a75cc-0beb-4450-89e4-f9bf2c773de0/pants-de-b%C3%A1squetbol-starting-5-j4wGHm.png",
      "https://static.nike.com/a/images/t_default/7d35c1a0-a0de-4ade-af18-dc09f34e9602/pants-de-b%C3%A1squetbol-starting-5-j4wGHm.png",
      "https://static.nike.com/a/images/t_default/3b3fb3e5-60bf-4db4-b8cc-4a5f91fc1e8c/pants-de-b%C3%A1squetbol-starting-5-j4wGHm.png",
    ],
  },
  {
    id: 7,
    name: "Playera de running de manga corta Dri-FIT UV para hombre",
    price: 799,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_default/b3544585-bdc1-4d34-9c47-f0fa58f6dd9a/playera-de-running-de-manga-corta-dri-fit-uv-miler-HGbDLx.png",
      "https://static.nike.com/a/images/t_default/7d93259e-e0dc-497a-ae4e-b9ca5a244637/playera-de-running-de-manga-corta-dri-fit-uv-miler-HGbDLx.png",
      "https://static.nike.com/a/images/t_default/2b9c3177-0bab-4e82-8655-643798bc46fd/playera-de-running-de-manga-corta-dri-fit-uv-miler-HGbDLx.png",
      "https://static.nike.com/a/images/t_default/ba8712a6-9aac-4699-87a1-bc410f06d4a6/playera-de-running-de-manga-corta-dri-fit-uv-miler-HGbDLx.png",
      "https://static.nike.com/a/images/t_default/d3e008c0-e40b-4402-b26e-d5482f943c56/playera-de-running-de-manga-corta-dri-fit-uv-miler-HGbDLx.png",
      "https://static.nike.com/a/images/t_default/32c06da2-4f1d-4779-b521-a67c83ace9d0/playera-de-running-de-manga-corta-dri-fit-uv-miler-HGbDLx.png",
      "https://static.nike.com/a/images/t_default/c3399de6-69a0-484a-a92d-eb6c350dbed4/playera-de-running-de-manga-corta-dri-fit-uv-miler-HGbDLx.png",
      "https://static.nike.com/a/images/t_default/95f092c0-e93d-4233-86e9-f79a06eaf1e7/playera-de-running-de-manga-corta-dri-fit-uv-miler-HGbDLx.png",
      "https://static.nike.com/a/images/t_default/8505bdaf-7521-4da5-a8e0-cddd84aa166d/playera-de-running-de-manga-corta-dri-fit-uv-miler-HGbDLx.png",
      "https://static.nike.com/a/images/t_default/801bb5fe-7809-4cb2-bb8e-ad52bd7e5011/playera-de-running-de-manga-corta-dri-fit-uv-miler-HGbDLx.png",
      "https://static.nike.com/a/images/t_default/d423e10a-aad0-410c-ab0f-12783dc88fcc/playera-de-running-de-manga-corta-dri-fit-uv-miler-HGbDLx.png",
      "https://static.nike.com/a/images/t_default/b367c17d-6257-4e3b-96ad-a1d20f56e80f/playera-de-running-de-manga-corta-dri-fit-uv-miler-HGbDLx.png",
    ],
  },
  {
    id: 8,
    name: "Chamarra de básquetbol para hombre",
    price: 1499,
    brand: "Nike",
    type: "Techwear",
    subtype: "Jackets",
    images: [
      "https://static.nike.com/a/images/t_default/f494db84-8e75-4eca-a2ce-f243fc33912b/chamarra-de-b%C3%A1squetbol-starting-5-3ctchg.png",
      "https://static.nike.com/a/images/t_default/aa7077c6-a4cc-4b26-bb0f-bc8d9d5bfed5/chamarra-de-b%C3%A1squetbol-starting-5-3ctchg.png",
      "https://static.nike.com/a/images/t_default/33f5d878-0601-4648-bf5b-42a2eaeaf87c/chamarra-de-b%C3%A1squetbol-starting-5-3ctchg.png",
      "https://static.nike.com/a/images/t_default/00da3aa3-6853-443c-961a-e76253221e36/chamarra-de-b%C3%A1squetbol-starting-5-3ctchg.png",
      "https://static.nike.com/a/images/t_default/2f2c9717-7e07-4e19-b180-74bdad801ff0/chamarra-de-b%C3%A1squetbol-starting-5-3ctchg.png",
    ],
  },
  {
    id: 9,
    name: "Playera para hombre",
    price: 849,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/44783c56-7953-4ecb-9951-16779b04f315/playera-jordan-brand-xHMgkL.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33bd6b26-ce43-43f8-abbe-2fbb2bf1f556/playera-jordan-brand-xHMgkL.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/699c72ca-c84e-4b63-a97e-d0455e9f5b40/playera-jordan-brand-xHMgkL.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2a8f994a-54b5-4a3f-8971-62e04346bf32/playera-jordan-brand-xHMgkL.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3436f746-d030-4876-9126-c48e3b7a7431/playera-jordan-brand-xHMgkL.png",
    ],
  },
  {
    id: 10,
    name: "Playera sin mangas Dri-FIT para hombre",
    price: 849,
    brand: "Nike",
    type: "Techwear",
    subtype: "Vest",
    images: [
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/83dceab6-ae75-4e21-a519-f8f81d7e0337/playera-sin-mangas-dri-fit-jordan-sport-JB6tBh.png",
      "https://static.nike.com/a/videos/so_5.35/02a53c06-b9c6-495f-a991-c73a3db8ec29/playera-sin-mangas-dri-fit-jordan-sport-JB6tBh.jpg",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a36f821d-16fe-414e-ace0-affb9903d331/playera-sin-mangas-dri-fit-jordan-sport-JB6tBh.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7aaabace-27bf-4113-b139-2084e5a2a142/playera-sin-mangas-dri-fit-jordan-sport-JB6tBh.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/246419d6-8f70-46a4-84e1-481d24754c49/playera-sin-mangas-dri-fit-jordan-sport-JB6tBh.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/34f2e579-9232-45e8-aa03-effa9e9d0d17/playera-sin-mangas-dri-fit-jordan-sport-JB6tBh.png",
    ],
  },
  {
    id: 11,
    name: "Sudadera con gorro de tejido Fleece para hombre",
    price: 2399,
    brand: "Nike",
    type: "Techwear",
    subtype: "Jacket",
    images: [
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7cfc8dd5-b8a8-44ee-98e3-a3fcb8a61487/sudadera-con-gorro-de-tejido-fleece-air-jordan-wordmark-SqHSLS.png",
      "https://static.nike.com/a/videos/so_6.1/917dcc5b-1776-4cdd-8f45-b572797c2e32/sudadera-con-gorro-de-tejido-fleece-air-jordan-wordmark-SqHSLS.jpg",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/69e66344-2905-4236-8798-3c77dde7acad/sudadera-con-gorro-de-tejido-fleece-air-jordan-wordmark-SqHSLS.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3da53b9e-2e54-4a45-a712-110478beac59/sudadera-con-gorro-de-tejido-fleece-air-jordan-wordmark-SqHSLS.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d67078fa-accc-4b8e-95a9-457a71ccbbb8/sudadera-con-gorro-de-tejido-fleece-air-jordan-wordmark-SqHSLS.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/669d60c2-6dd0-42b0-98c2-9a7912e7c197/sudadera-con-gorro-de-tejido-fleece-air-jordan-wordmark-SqHSLS.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/720f308e-acd3-4480-be1c-843516c9a68d/sudadera-con-gorro-de-tejido-fleece-air-jordan-wordmark-SqHSLS.png",
    ],
  },
  {
    id: 12,
    name: "Playera para hombre",
    price: 849,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b471d83b-8799-4657-914a-b7b13401fdda/playera-jordan-flight-mvp-pd00N7.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b3e154ee-76b4-471c-9557-f6df33c7c61a/playera-jordan-flight-mvp-pd00N7.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/afdbc773-883e-4160-baa2-c27208e69a97/playera-jordan-flight-mvp-pd00N7.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b0a139d2-60bb-41dd-a52d-56b3d2685d1f/playera-jordan-flight-mvp-pd00N7.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/45984b26-f2b9-4036-bcb3-3d91df6d42a0/playera-jordan-flight-mvp-pd00N7.png",
    ],
  },
  {
    id: 13,
    name: "Shorts de tejido Fleece para hombre",
    price: 1249,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shorts",
    images: [
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2402741b-fadd-49d9-8b32-31be6e472b9c/shorts-de-tejido-fleece-jordan-flight-mvp-PCmqpd.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ce5490fa-be31-46d1-bbc4-d19577632fda/shorts-de-tejido-fleece-jordan-flight-mvp-PCmqpd.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/52c7bfb8-854b-4d53-a74c-4736a56ee994/shorts-de-tejido-fleece-jordan-flight-mvp-PCmqpd.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f0cd121f-4fd9-40e3-b284-d24af94a8bd8/shorts-de-tejido-fleece-jordan-flight-mvp-PCmqpd.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd15c0f9-d751-4366-83b2-86a1a0bc01a2/shorts-de-tejido-fleece-jordan-flight-mvp-PCmqpd.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4c2eb467-7627-451a-b398-58ac281f46a7/shorts-de-tejido-fleece-jordan-flight-mvp-PCmqpd.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d05e0f3c-a2ea-4aa2-9ca1-3312a39c7645/shorts-de-tejido-fleece-jordan-flight-mvp-PCmqpd.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7d5c2dc0-38eb-400c-ae61-ce24224880e9/shorts-de-tejido-fleece-jordan-flight-mvp-PCmqpd.png",
    ],
  },
  {
    id: 14,
    name: "Sudadera con gorro sin cierre con estampado para hombre",
    price: 1449,
    brand: "Nike",
    type: "Techwear",
    subtype: "Jackets",
    images: [
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fb9f7f67-f88c-4d6d-ae3d-69e247a734d1/sudadera-con-gorro-sin-cierre-estampada-jordan-brooklyn-fleece-K3SZDv.png",
      "https://static.nike.com/a/videos/so_6.75/fd79b14e-87a2-4ab9-9995-5d9612465de0/sudadera-con-gorro-sin-cierre-estampada-jordan-brooklyn-fleece-K3SZDv.jpg",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1618229f-744a-4885-8a9e-df71441b95df/sudadera-con-gorro-sin-cierre-estampada-jordan-brooklyn-fleece-K3SZDv.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d056b822-c119-46cd-af06-ebc92ba6af59/sudadera-con-gorro-sin-cierre-estampada-jordan-brooklyn-fleece-K3SZDv.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd1ecf85-2b32-4967-a3f3-f4d2297a670b/sudadera-con-gorro-sin-cierre-estampada-jordan-brooklyn-fleece-K3SZDv.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/98a073db-f7ed-4437-9c30-8032b83b104c/sudadera-con-gorro-sin-cierre-estampada-jordan-brooklyn-fleece-K3SZDv.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bdf71531-7fcb-4365-a96e-45d2e296719e/sudadera-con-gorro-sin-cierre-estampada-jordan-brooklyn-fleece-K3SZDv.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b78f280b-2700-44db-b51e-e790fad92a76/sudadera-con-gorro-sin-cierre-estampada-jordan-brooklyn-fleece-K3SZDv.png",
    ],
  },
  {
    id: 15,
    name: "Shorts Diamond Dri-FIT para hombre",
    price: 1149,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shorts",
    images: [
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c804dc2a-94fc-4c1f-b2b9-d41646710ace/shorts-dri-fit-diamond-jordan-sport-qNdR2z.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1ca4ee7d-26ba-4056-8bb2-1d74f9c9abad/shorts-dri-fit-diamond-jordan-sport-qNdR2z.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d31e7b37-87d5-4c8e-afbb-c0aed4618eac/shorts-dri-fit-diamond-jordan-sport-qNdR2z.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7ab5540a-69a7-4829-a48b-ded96cf38b99/shorts-dri-fit-diamond-jordan-sport-qNdR2z.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/00ec59b3-3fed-4afb-9417-2e247b199ad3/shorts-dri-fit-diamond-jordan-sport-qNdR2z.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e01ad799-991d-4634-b009-6e4975b356de/shorts-dri-fit-diamond-jordan-sport-qNdR2z.png",
    ],
  },
  {
    id: 16,
    name: "Chamarra de calentamiento para hombre",
    price: 2349,
    brand: "Nike",
    type: "Techwear",
    subtype: "Jackets",
    images: [
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/84c6c7db-01d4-4204-8449-dbaf0ca2c7d2/chamarra-de-calentamiento-jordan-sport-jam-fgZWfV.png",
      "https://static.nike.com/a/videos/so_6.86/33a7610d-6887-4f9a-94a4-3a572e5fa8e4/chamarra-de-calentamiento-jordan-sport-jam-fgZWfV.jpg",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/748c9357-c401-4fc0-9e3f-52e941150e99/chamarra-de-calentamiento-jordan-sport-jam-fgZWfV.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/455dfb9f-aece-4a5c-85c8-553c6786ae2e/chamarra-de-calentamiento-jordan-sport-jam-fgZWfV.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4d2e598d-742c-42f0-ac94-1b4aa391b184/chamarra-de-calentamiento-jordan-sport-jam-fgZWfV.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b3b3f1c7-c789-4bd9-907e-24c30bedb29e/chamarra-de-calentamiento-jordan-sport-jam-fgZWfV.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/76e7adda-599d-4c0f-ac32-043e2032c310/chamarra-de-calentamiento-jordan-sport-jam-fgZWfV.png",
    ],
  },
  {
    id: 17,
    name: "Playera Max90 para hombre",
    price: 1199,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_default/8340ab4e-3122-4504-90e2-b17ed4dd9327/playera-max90-sportswear-9nc0QC.png",
      "https://static.nike.com/a/images/t_default/fc4e2a71-477d-407e-a7ee-f0aba2da9f2b/playera-max90-sportswear-9nc0QC.png",
      "https://static.nike.com/a/images/t_default/37cc5867-50df-42ee-b26c-b60698f7ed51/playera-max90-sportswear-9nc0QC.png",
      "https://static.nike.com/a/images/t_default/f5ea1738-f607-469a-bdea-d2eafe2f77f9/playera-max90-sportswear-9nc0QC.png",
      "https://static.nike.com/a/images/t_default/fad0c0b4-e975-4c0d-bc03-0ab97a5e2f3c/playera-max90-sportswear-9nc0QC.png",
      "https://static.nike.com/a/images/t_default/c5dd685e-6385-4cf8-bbc1-ca663b17c871/playera-max90-sportswear-9nc0QC.png",
      "https://static.nike.com/a/images/t_default/c1ba14c9-437d-49af-9d51-72a5acabfdfa/playera-max90-sportswear-9nc0QC.png",
      "https://static.nike.com/a/images/t_default/068ba9ec-ce7d-4717-b90b-2fa63e051203/playera-max90-sportswear-9nc0QC.png",
      "https://static.nike.com/a/images/t_default/c62671a6-a13a-45a1-8e26-8d99483ecbc8/playera-max90-sportswear-9nc0QC.png",
      "https://static.nike.com/a/images/t_default/b08df8ab-f270-42c2-be3b-ef8219a77952/playera-max90-sportswear-9nc0QC.png",
      "https://static.nike.com/a/images/t_default/2d664f1a-0870-4799-ad93-2c87423bd3b0/playera-max90-sportswear-9nc0QC.png",
      "https://static.nike.com/a/images/t_default/54e72634-3a2d-4cdf-9c0f-56c83456011d/playera-max90-sportswear-9nc0QC.png",
    ],
  },
  {
    id: 18,
    name: "Playera para hombre",
    price: 899,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_default/da546768-3d27-4688-81f6-169174c31fac/playera-sportswear-JbPCDc.png",
      "https://static.nike.com/a/images/t_default/515469e2-06bf-4f63-8734-c152229e5556/playera-sportswear-JbPCDc.png",
      "https://static.nike.com/a/images/t_default/40fe78af-a855-469c-b087-32104e6f07d4/playera-sportswear-JbPCDc.png",
      "https://static.nike.com/a/images/t_default/4759205a-82a3-49b0-9513-743d64291846/playera-sportswear-JbPCDc.png",
      "https://static.nike.com/a/images/t_default/b5bd5380-4961-4258-b20b-c4a878845637/playera-sportswear-JbPCDc.png",
      "https://static.nike.com/a/images/t_default/6798f639-2f24-4c11-9adb-2b8a6ac2124c/playera-sportswear-JbPCDc.png",
    ],
  },
  {
    id: 19,
    name: "Playera de básquetbol Dri-FIT para hombre",
    price: 999,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_default/b9a5281b-ce85-4eca-8d25-fcb5333bfb53/playera-de-b%C3%A1squetbol-dri-fit-ja-lW6d4W.png",
      "https://static.nike.com/a/images/t_default/65f35765-580e-4495-a26c-45da35f20c38/playera-de-b%C3%A1squetbol-dri-fit-ja-lW6d4W.png",
      "https://static.nike.com/a/images/t_default/cbc1ea72-7524-4a4e-840b-680e4185b124/playera-de-b%C3%A1squetbol-dri-fit-ja-lW6d4W.png",
      "https://static.nike.com/a/images/t_default/974f0344-d495-4b9b-9aeb-3880cc936486/playera-de-b%C3%A1squetbol-dri-fit-ja-lW6d4W.png",
      "https://static.nike.com/a/images/t_default/4eb3d7a4-00fe-4ccc-a80b-1e2cb721a3b5/playera-de-b%C3%A1squetbol-dri-fit-ja-lW6d4W.png",
      "https://static.nike.com/a/images/t_default/7a220974-b07b-4621-8822-4cbdaa064aa6/playera-de-b%C3%A1squetbol-dri-fit-ja-lW6d4W.png",
      "https://static.nike.com/a/images/t_default/6b05532b-b157-46c1-a195-84595919274d/playera-de-b%C3%A1squetbol-dri-fit-ja-lW6d4W.png",
      "https://static.nike.com/a/images/t_default/6e26b53d-52ee-4d79-99ad-9810d70f0fbf/playera-de-b%C3%A1squetbol-dri-fit-ja-lW6d4W.png",
      "https://static.nike.com/a/images/t_default/dd61c616-c9de-4304-9d3b-c0df309c37cd/playera-de-b%C3%A1squetbol-dri-fit-ja-lW6d4W.png",
    ],
  },
  {
    id: 20,
    name: "Shorts de golf Diamond para hombre",
    price: 1699,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shorts",
    images: [
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/84a69df4-6a6c-4e14-bb5e-0c2ebcbe2a97/shorts-de-golf-diamond-jordan-dri-fit-sport-t284kD.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/91bdd5c3-394f-4520-9629-1cb9a2578a33/shorts-de-golf-diamond-jordan-dri-fit-sport-t284kD.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/042b2e1b-bc76-4cd4-a70f-18588c4cb249/shorts-de-golf-diamond-jordan-dri-fit-sport-t284kD.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/14927edd-7a80-49d9-85c7-e3d44701d3ed/shorts-de-golf-diamond-jordan-dri-fit-sport-t284kD.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b786e295-6003-4a00-9efe-4b8e226794a1/shorts-de-golf-diamond-jordan-dri-fit-sport-t284kD.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/30b554a0-eda4-41ca-834f-51e2d58593b2/shorts-de-golf-diamond-jordan-dri-fit-sport-t284kD.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/25afcfcf-64fc-4acb-b21a-7bc91c0a49b7/shorts-de-golf-diamond-jordan-dri-fit-sport-t284kD.png",
    ],
  },
  {
    id: 21,
    name: "Playera para hombre",
    price: 899,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_default/c4e7f545-fb2e-43e1-a34a-01b56fc559e3/playera-sportswear-h8WQw8.png",
      "https://static.nike.com/a/images/t_default/92caff50-4b3a-4e5c-b9ee-09d8663d71f8/playera-sportswear-h8WQw8.png",
      "https://static.nike.com/a/images/t_default/d943f7e9-520b-4579-a0ad-190a3c8c2f03/playera-sportswear-h8WQw8.png",
      "https://static.nike.com/a/images/t_default/ac1bb59b-911e-4a58-8f97-2a908a0f3634/playera-sportswear-h8WQw8.png",
      "https://static.nike.com/a/images/t_default/1d2ec3cf-b245-4dff-b364-36ebf465f03a/playera-sportswear-h8WQw8.png",
    ],
  },
  {
    id: 22,
    name: "Playera Max90 para hombre",
    price: 999,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_default/649e6517-5fc1-491a-aa93-ad0e8c535a46/playera-max90-sportswear-vvB4j6.png",
      "https://static.nike.com/a/images/t_default/54b946ac-abaa-49f9-8f82-1c2c5286d9a7/playera-max90-sportswear-vvB4j6.png",
      "https://static.nike.com/a/images/t_default/1a242717-e263-467a-b5e3-22cc457b6975/playera-max90-sportswear-vvB4j6.png",
      "https://static.nike.com/a/images/t_default/cf053c51-750c-4d27-b209-f3193c806adc/playera-max90-sportswear-vvB4j6.png",
      "https://static.nike.com/a/images/t_default/d2b724f0-00c9-45c9-bb6a-cb29f469075e/playera-max90-sportswear-vvB4j6.png",
      "https://static.nike.com/a/images/t_default/d7378a64-15b5-47ee-a39a-b42e17d87b1f/playera-max90-sportswear-vvB4j6.png",
      "https://static.nike.com/a/images/t_default/a004ba50-9a6d-45dd-b5d5-acfd3099c03a/playera-max90-sportswear-vvB4j6.png",
      "https://static.nike.com/a/images/t_default/f9e440da-e130-4fe9-b9dd-472c38c5f102/playera-max90-sportswear-vvB4j6.png",
      "https://static.nike.com/a/images/t_default/ccae58bb-f45d-4d8d-9426-7f326358ee49/playera-max90-sportswear-vvB4j6.png",
      "https://static.nike.com/a/images/t_default/5229ed32-dcc2-4aa6-9457-ff7c6fca5dff/playera-max90-sportswear-vvB4j6.png",
    ],
  },
  {
    id: 23,
    name: "Sudadera de medio cierre para hombre",
    price: 2799,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_default/2a4bc1ed-fd41-4c89-b76f-020b5fa734e6/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/videos/so_6.48/b276a613-bfa0-4438-a4bf-8092862c58e3/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.jpg",
      "https://static.nike.com/a/images/t_default/5bf1175d-c84e-4914-a942-465de65093ec/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/f4c0a36e-c962-40a9-a866-eca7c2b3f3a1/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/d57809d8-c706-40e2-b442-1dc3ff28ffff/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/1c14e873-095d-490a-8341-6f9bd86ff5c2/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/982eaeb3-2bfe-42dc-8e69-89e82fa10a21/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/b1dfb222-4eb3-40bd-b703-e923c885febf/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/3908612d-0de5-406c-bbec-ecd592ff019b/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/388990fb-f310-4825-8da7-7ae69a4017fd/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/8ab97a65-fb3e-4f8f-a478-23374e7d8445/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/4f891162-2fbd-4d1d-8d5d-81350454a723/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/c987d0b0-cfdc-41d2-a4fd-79b98ea7db24/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/9f466ef3-cdf7-4b76-a520-347f187dd1c0/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/8e5474a6-0b50-4a01-9c4f-06ba7d8c5675/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/88dc7cbb-8c58-4231-ad1a-7c9c090b0ebc/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/6fc0717c-d920-44e5-93d8-a1458e7b317f/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/cb1c9942-ec47-448b-b654-b9cc8ef56bd4/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/ab1c65b2-fa4d-414c-bb1c-a31497faca77/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
      "https://static.nike.com/a/images/t_default/687e165a-f372-4c8f-8e97-a4985640d5bb/sudadera-de-medio-cierre-sportswear-tech-fleece-hthBqP.png",
    ],
  },
  {
    id: 24,
    name: "Shorts de tejido Woven para hombre",
    price: 1049,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shorts",
    images: [
      "https://static.nike.com/a/images/t_default/48df1b9d-e09d-49d8-8854-34851dcc5b93/shorts-de-tejido-woven-flow-club-QQNZ21.png",
      "https://static.nike.com/a/videos/so_2.34/3878fb9a-3797-4f3e-b89e-c0d3a01fcbcf/shorts-de-tejido-woven-flow-club-QQNZ21.jpg",
      "https://static.nike.com/a/images/t_default/df55f598-3d67-4466-904a-fb54269de494/shorts-de-tejido-woven-flow-club-QQNZ21.png",
      "https://static.nike.com/a/images/t_default/2956b14b-42d4-4865-9c17-ad9f9702c0c8/shorts-de-tejido-woven-flow-club-QQNZ21.png",
      "https://static.nike.com/a/images/t_default/b6b2b0f9-8cb0-4d9a-9430-8eb5ff63efdd/shorts-de-tejido-woven-flow-club-QQNZ21.png",
      "https://static.nike.com/a/images/t_default/58d217ac-2a22-476f-a50f-737ceba05fc1/shorts-de-tejido-woven-flow-club-QQNZ21.png",
      "https://static.nike.com/a/images/t_default/ed6baa6c-73ed-4cb6-a5e6-c5ec34f139c2/shorts-de-tejido-woven-flow-club-QQNZ21.png",
      "https://static.nike.com/a/images/t_default/ebff7885-3308-49b9-a0ed-dad8b8bc1808/shorts-de-tejido-woven-flow-club-QQNZ21.png",
      "https://static.nike.com/a/images/t_default/a666e1a1-95a8-40c4-b62e-d9f1c18582f3/shorts-de-tejido-woven-flow-club-QQNZ21.png",
      "https://static.nike.com/a/images/t_default/54be0305-bf09-464d-ae09-0963d61f17b0/shorts-de-tejido-woven-flow-club-QQNZ21.png",
      "https://static.nike.com/a/images/t_default/562ab130-a071-40a9-8e3d-7bd94828fe04/shorts-de-tejido-woven-flow-club-QQNZ21.png",
      "https://static.nike.com/a/images/t_default/b622289f-24b9-4064-b26e-f521eaa0b156/shorts-de-tejido-woven-flow-club-QQNZ21.png",
      "https://static.nike.com/a/images/t_default/257e71b7-9cee-47bb-a089-36012f4b63f4/shorts-de-tejido-woven-flow-club-QQNZ21.png",
      "https://static.nike.com/a/images/t_default/9c4ce916-56a7-4273-a65c-f40d17e442d6/shorts-de-tejido-woven-flow-club-QQNZ21.png",
      "https://static.nike.com/a/images/t_default/519fda0c-4309-4858-b730-2dbb2145e087/shorts-de-tejido-woven-flow-club-QQNZ21.png",
    ],
  },
  {
    id: 25,
    name: "Shorts versátiles sin forro Dri-FIT de 23 cm para hombre",
    price: 799,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shorts",
    images: [
      "https://static.nike.com/a/images/t_default/bd7a9ce0-0f5d-429a-bd30-1386dca26977/shorts-vers%C3%A1tiles-sin-forro-dri-fit-de-23-900-totality-qG7jGq.png",
      "https://static.nike.com/a/images/t_default/72871e01-ad94-4617-8f16-ff12dc31a025/shorts-vers%C3%A1tiles-sin-forro-dri-fit-de-23-900-totality-qG7jGq.png",
      "https://static.nike.com/a/images/t_default/0f1ba121-26b2-477b-af91-0d726dcc0ad2/shorts-vers%C3%A1tiles-sin-forro-dri-fit-de-23-900-totality-qG7jGq.png",
      "https://static.nike.com/a/images/t_default/c623416b-814f-4f85-8fdd-83cd007ccff7/shorts-vers%C3%A1tiles-sin-forro-dri-fit-de-23-900-totality-qG7jGq.png",
      "https://static.nike.com/a/images/t_default/c3a38c4d-a3b0-4f0e-8c8f-9a52dec4126e/shorts-vers%C3%A1tiles-sin-forro-dri-fit-de-23-900-totality-qG7jGq.png",
      "https://static.nike.com/a/images/t_default/b09adc8b-7ed6-4527-a000-f3da133b6103/shorts-vers%C3%A1tiles-sin-forro-dri-fit-de-23-900-totality-qG7jGq.png",
      "https://static.nike.com/a/images/t_default/e3d995c2-d0b7-4794-ae00-05f5b2a84aa4/shorts-vers%C3%A1tiles-sin-forro-dri-fit-de-23-900-totality-qG7jGq.png",
    ],
  },
  {
    id: 26,
    name: "Conjunto de tejido Woven forrado para hombre",
    price: 1899,
    brand: "Nike",
    type: "Techwear",
    subtype: "Pants",
    images: [
      "https://static.nike.com/a/images/t_default/7117f188-2467-4772-b7cb-2c632fe39c41/conjunto-de-tejido-woven-forrado-sportswear-club-2Wl2rc.png",
      "https://static.nike.com/a/images/t_default/73818bca-d8e9-421a-9f81-c07f928a6133/conjunto-de-tejido-woven-forrado-sportswear-club-2Wl2rc.png",
      "https://static.nike.com/a/images/t_default/ae3f56d6-e607-454a-b02f-6615a1826b89/conjunto-de-tejido-woven-forrado-sportswear-club-2Wl2rc.png",
      "https://static.nike.com/a/images/t_default/98eb9155-35b2-4acd-9376-59e41fb4f32e/conjunto-de-tejido-woven-forrado-sportswear-club-2Wl2rc.png",
      "https://static.nike.com/a/images/t_default/1b3d5a76-ec2b-4d24-84e2-92d20fba8aaf/conjunto-de-tejido-woven-forrado-sportswear-club-2Wl2rc.png",
      "https://static.nike.com/a/images/t_default/cb44bd1d-8b23-4fbe-99d6-c0ee15df6aa0/conjunto-de-tejido-woven-forrado-sportswear-club-2Wl2rc.png",
      "https://static.nike.com/a/images/t_default/4b29ce6d-a93d-4e23-ac3c-dd84daef3584/conjunto-de-tejido-woven-forrado-sportswear-club-2Wl2rc.png",
      "https://static.nike.com/a/images/t_default/4d6cb1d9-4982-469d-b920-60596e50194d/conjunto-de-tejido-woven-forrado-sportswear-club-2Wl2rc.png",
      "https://static.nike.com/a/images/t_default/a9d69bfd-b31f-4a9d-96fd-36c53f5791a6/conjunto-de-tejido-woven-forrado-sportswear-club-2Wl2rc.png",
    ],
  },
  {
    id: 27,
    name: "Polo de golf Dri-FIT para hombre",
    price: 1349,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_default/6e242326-e4cf-4e57-9f05-08494a8a9429/polo-de-golf-dri-fit-victory-pZ8gvq.png",
      "https://static.nike.com/a/images/t_default/356cfd23-d103-4022-a2ce-5a2cc0db0dc8/polo-de-golf-dri-fit-victory-pZ8gvq.png",
      "https://static.nike.com/a/images/t_default/1fb783c4-9b18-4230-8c47-6ffba4b24afb/polo-de-golf-dri-fit-victory-pZ8gvq.png",
      "https://static.nike.com/a/images/t_default/91423be2-89fd-469f-ac79-024de14d0de3/polo-de-golf-dri-fit-victory-pZ8gvq.png",
      "https://static.nike.com/a/images/t_default/abc39022-479d-4eb4-bd16-517054167087/polo-de-golf-dri-fit-victory-pZ8gvq.png",
      "https://static.nike.com/a/images/t_default/fe676e32-e905-4712-87a6-5d4628e0f271/polo-de-golf-dri-fit-victory-pZ8gvq.png",
      "https://static.nike.com/a/images/t_default/82d60156-f864-45bb-8835-b47ed0aa48cb/polo-de-golf-dri-fit-victory-pZ8gvq.png",
      "https://static.nike.com/a/images/t_default/f5e2ea8c-ee37-44cb-801d-f7947e5ddbd9/polo-de-golf-dri-fit-victory-pZ8gvq.png",
    ],
  },
  {
    id: 28,
    name: "Camiseta de tirantes de running para hombre",
    price: 999,
    brand: "Nike",
    type: "Techwear",
    subtype: "shirts",
    images: [
      "https://static.nike.com/a/images/t_default/1c9e67d8-8155-4c3a-a40c-590cc2151da7/camiseta-de-tirantes-de-running-miler-flash-vQKHMr.png",
      "https://static.nike.com/a/images/t_default/5bc0b4de-3823-4b9f-a461-0af8fd42de9e/camiseta-de-tirantes-de-running-miler-flash-vQKHMr.png",
      "https://static.nike.com/a/images/t_default/50ddbff6-c8b1-4781-babc-2195f27437b0/camiseta-de-tirantes-de-running-miler-flash-vQKHMr.png",
      "https://static.nike.com/a/images/t_default/04a4ff5f-c46d-4049-8cc3-586a1b5e29ca/camiseta-de-tirantes-de-running-miler-flash-vQKHMr.png",
      "https://static.nike.com/a/images/t_default/cea3aba5-6ec5-49dc-934e-bab0814afa46/camiseta-de-tirantes-de-running-miler-flash-vQKHMr.png",
      "https://static.nike.com/a/images/t_default/d38f164d-87c3-4cda-9b79-7e0048938ee5/camiseta-de-tirantes-de-running-miler-flash-vQKHMr.png",
      "https://static.nike.com/a/images/t_default/5e9fd35f-8227-4f68-b422-2283e5286df0/camiseta-de-tirantes-de-running-miler-flash-vQKHMr.png",
      "https://static.nike.com/a/images/t_default/240cc557-057a-4073-8485-c3052c01d227/camiseta-de-tirantes-de-running-miler-flash-vQKHMr.png",
    ],
  },
  {
    id: 29,
    name: "Playera de running de manga corta Dri-FIT UV para hombre",
    price: 999,
    brand: "Nike",
    type: "Techwear",
    subtype: "shirts",
    images: [
      "https://static.nike.com/a/images/t_default/21eebcfd-bc61-4121-80ee-ea7df273e508/playera-de-running-de-manga-corta-dri-fit-uv-miler-flash-KjtJGX.png",
      "https://static.nike.com/a/images/t_default/a790fd4d-9035-4d2e-84d2-1a2e11fab411/playera-de-running-de-manga-corta-dri-fit-uv-miler-flash-KjtJGX.png",
      "https://static.nike.com/a/images/t_default/b62cb039-050e-4da7-82d5-e66ff0d7db2d/playera-de-running-de-manga-corta-dri-fit-uv-miler-flash-KjtJGX.png",
      "https://static.nike.com/a/images/t_default/465e698d-2ce2-4613-ab4d-85325a8db933/playera-de-running-de-manga-corta-dri-fit-uv-miler-flash-KjtJGX.png",
      "https://static.nike.com/a/images/t_default/6f64258f-43da-4d49-bf6b-cf25c589d2e2/playera-de-running-de-manga-corta-dri-fit-uv-miler-flash-KjtJGX.png",
      "https://static.nike.com/a/images/t_default/2509aee6-25c4-44dd-9eb8-5cce3c7353bb/playera-de-running-de-manga-corta-dri-fit-uv-miler-flash-KjtJGX.png",
      "https://static.nike.com/a/images/t_default/6e198ca7-b6f1-4f4c-8fda-214a196a2168/playera-de-running-de-manga-corta-dri-fit-uv-miler-flash-KjtJGX.png",
      "https://static.nike.com/a/images/t_default/2a115f5d-651e-44fb-9452-170a0bd08a6f/playera-de-running-de-manga-corta-dri-fit-uv-miler-flash-KjtJGX.png",
    ],
  },
  {
    id: 30,
    name: "Joggers para hombre",
    price: 2599,
    brand: "Nike",
    type: "Techwear",
    subtype: "Pants",
    images: [
      "https://static.nike.com/a/images/t_default/36adf16e-dbce-469d-9a21-bf30148cb64a/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/videos/so_4.97/be1ef8a2-6e3d-4fd8-8625-2f894c776322/joggers-sportswear-tech-fleece-sG5GnP.jpg",
      "https://static.nike.com/a/images/t_default/1a123774-978a-4c49-8b25-fe14788ea8ee/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/b26b0fd3-fc27-4b3e-a0c1-35b5842e3bfe/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/8470e32e-392d-4391-a902-9a3d79577fdc/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/0cee0706-696a-42ac-b9f7-2820588da592/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/b18913ca-1ed2-4883-8966-21236580a7bb/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/6014d0b2-d50f-4194-8244-dce231fb1b5c/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/caf4d95c-0c99-4ed3-b775-0e070d05b5be/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/65a9a32c-7666-43df-8b41-844f7a02f336/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/5f1df34b-095b-465e-961b-031775b66209/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/f4cbb93d-37e3-46d2-b4d4-e3a5e8415533/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/624a177c-9fe3-4aa9-9801-c63875f640c6/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/79589bd2-52cd-40a8-86e0-2983e75323df/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/cacb6fab-3d92-4e55-b4dd-5473cd656f45/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/d5c402dd-f7ef-4aa6-b055-600cab559e6e/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/74392f52-a878-448f-b788-b9d179938398/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/815fe160-3df7-452b-8e13-0cac97268d95/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/55267236-ca16-4d18-a5bf-72a0fa402132/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/483645e3-18f0-4185-bf73-4be420e0f5f5/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/7b40734f-e8ad-4f35-95b0-a1709c43d4ec/joggers-sportswear-tech-fleece-sG5GnP.png",
      "https://static.nike.com/a/images/t_default/8d52c4f8-3a48-49c1-9b8a-9cb9f967acf3/joggers-sportswear-tech-fleece-sG5GnP.png",
    ],
  },
  {
    id: 31,
    name: "Shorts de tejido Woven para hombre",
    price: 1049,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shorts",
    images: [
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2bfdee5c-3e12-4aee-b7cb-c2165c56396e/shorts-de-tejido-woven-jordan-essentials-82d62V.png",
      "https://static.nike.com/a/videos/so_0.36/3d183a58-65c4-4f2a-a707-338dc23187f9/shorts-de-tejido-woven-jordan-essentials-82d62V.jpg",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a57cc8dc-0e87-496c-aec6-840309b1b55e/shorts-de-tejido-woven-jordan-essentials-82d62V.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/44a97c8b-0c53-4164-9602-1a56c288376a/shorts-de-tejido-woven-jordan-essentials-82d62V.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d77f4080-4a4b-4df0-ba28-a342a1646ece/shorts-de-tejido-woven-jordan-essentials-82d62V.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8b28f28f-3a4a-4551-85e4-48256c64e6fb/shorts-de-tejido-woven-jordan-essentials-82d62V.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fd5cdbd5-ad6d-4ad7-8bb3-4c1c02740e06/shorts-de-tejido-woven-jordan-essentials-82d62V.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5e54b5eb-6bf6-44ba-b4ab-984a7969b6e4/shorts-de-tejido-woven-jordan-essentials-82d62V.png",
    ],
  },
  {
    id: 32,
    name: "Chamarra tipo anorak Marina para hombre",
    price: 1699,
    brand: "Nike",
    type: "Techwear",
    subtype: "Jackets",
    images: [
      "https://static.nike.com/a/images/t_default/2b6ec99d-2e33-42e5-84b0-8133bd393e0d/chamarra-tipo-anorak-marina-club-Cmj3jb.png",
      "https://static.nike.com/a/images/t_default/615652c4-8cb2-41df-a4f1-e200a81239ed/chamarra-tipo-anorak-marina-club-Cmj3jb.png",
      "https://static.nike.com/a/images/t_default/68278993-3316-4b03-831e-81b17e5bd28d/chamarra-tipo-anorak-marina-club-Cmj3jb.png",
      "https://static.nike.com/a/images/t_default/18055a57-060d-40a8-8f53-8d4771ebc5b4/chamarra-tipo-anorak-marina-club-Cmj3jb.png",
      "https://static.nike.com/a/images/t_default/fded985b-0bd8-4c38-8c9f-4a361bbe2ffd/chamarra-tipo-anorak-marina-club-Cmj3jb.png",
      "https://static.nike.com/a/images/t_default/78a63b01-8bfa-4599-ab51-181391f885ce/chamarra-tipo-anorak-marina-club-Cmj3jb.png",
      "https://static.nike.com/a/images/t_default/4150c5e3-30ed-4ceb-b01e-6ccb255061c6/chamarra-tipo-anorak-marina-club-Cmj3jb.png",
    ],
  },
  {
    id: 33,
    name: "Playera Jordan de la NBA para hombre",
    price: 799,
    brand: "Nike",
    type: "Techwear",
    subtype: "Shirts",
    images: [
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dbe71eb6-7d3e-4b57-bf7b-80c97e8c4bfc/playera-jordan-nba-los-angeles-lakers-essential-BnBrFG.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a2e8fe3e-8c01-4b2f-8a1d-00bec22ed6bb/playera-jordan-nba-los-angeles-lakers-essential-BnBrFG.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/24b719b1-2129-4d57-b5f4-0b5520c522ea/playera-jordan-nba-los-angeles-lakers-essential-BnBrFG.png",
    ],
  },
  {
    id: 34,
    name: "Playera Jordan de la NBA para hombre",
    price: 799,
    brand: "Nike",
    type: "Techwear",
    subtype: "Jackets",
    images: [
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dbe71eb6-7d3e-4b57-bf7b-80c97e8c4bfc/playera-jordan-nba-los-angeles-lakers-essential-BnBrFG.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a2e8fe3e-8c01-4b2f-8a1d-00bec22ed6bb/playera-jordan-nba-los-angeles-lakers-essential-BnBrFG.png",
      "https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/24b719b1-2129-4d57-b5f4-0b5520c522ea/playera-jordan-nba-los-angeles-lakers-essential-BnBrFG.png",
    ],
  },
];

// // Fix the id of the products
// products.forEach((product, index) => {
//   product.id = index + 1;
// });
