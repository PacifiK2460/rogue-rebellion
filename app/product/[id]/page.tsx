"use client";

import ProductDetails from "@/components/ui/product-details";
import { products } from "@/types/product";

export default function Product({ params }: { params: { id: number } }) {
    const id = params.id;
    console.log("ID: ", params.id);
    console.log("Product: ", products.find((product) => product.id == id));
    const product = products.find((product) => product.id == id) || products[0];

    return (
        <ProductDetails product={product} />
    )
}