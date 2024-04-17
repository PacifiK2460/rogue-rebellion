import { products } from '@/types/product';
import { Product } from '@/types/product';
import { navItems } from '@/site.config';
import { Brand, brands, StoreInfo } from '@/types/brands';
import { redirect } from "next/navigation"


import StoreHeader from '@/components/ui/store-header';
import ProductList from '@/components/ui/product-list';


function getProductsByParams(params: string[]): [Product[], StoreInfo] | [null, null] {
    let Products: Product[];
    let StoreInfo: StoreInfo;

    if (params.length === 1 && params[0] === "all") {
        StoreInfo = {
            name: "The Hype Company",
            description: "The Hype Company es una tienda de ropa y accesorios de moda urbana, con una amplia gama de productos de las mejores marcas del mundo.",
            image: "vercel.svg"
        };
        Products = products;

        return [Products, StoreInfo];
    }

    Products = products.filter((product) => {
        return params.includes(product.type) || params.includes(product.subtype);
    });

    // Last param 
    let lastParam = params[params.length - 1];

    let type = navItems.find((item) => item.name.toLowerCase() === lastParam);
    let subType = type?.subItems.find((item) => item.name.toLowerCase() === lastParam);
    let brand: Brand | undefined = brands.find((brand) => brand.name.toLowerCase() === lastParam);

    console.log("type", type);
    console.log("subType", subType);
    console.log("brand", brand);

    if (brand) {
        StoreInfo = {
            name: brand.name,
            description: brand.description,
            image: brand.logoURL
        };
    } else if (subType) {
        StoreInfo = {
            name: subType.name,
            description: subType.description,
            image: "/images/store-image.jpg"
        };
    } else if (type) {
        StoreInfo = {
            name: type.name,
            description: "The Hype Company es una tienda de ropa y accesorios de moda urbana, con una amplia gama de productos de las mejores marcas del mundo.",
            image: "/images/store-image.jpg"

        };
    } else {
        return [null, null]
    }

    return [Products, StoreInfo];
}

export default function ShopPage({ params }: { params: { params: string[] } }) {
    const args = params.params;
    console.log("args", args);
    let [Products, StoreInfo]: [Product[], StoreInfo] | [null, null] = getProductsByParams(args);

    if (!Products || !StoreInfo) {
        redirect("/all");
    }

    return (
        <>
            <StoreHeader StoreInfo={StoreInfo} />
            <ProductList Products={Products} />
        </>
    )
}