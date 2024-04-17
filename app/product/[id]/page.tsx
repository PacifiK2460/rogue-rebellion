import ProductDetails from "@/components/ui/product-details";
import { products } from "@/types/product";

export default function Product({ id }: { id: string }) {
    const product = products.find((product) => product.id.toString() === id) || products[0];

    return (
        <ProductDetails product={product} />
    )
}