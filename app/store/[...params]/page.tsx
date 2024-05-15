"use client";

import { products } from '@/types/product';
import { Product } from '@/types/product';
import { navItems } from '@/site.config';
import { Brand, brands, StoreInfo } from '@/types/brands';
import { redirect } from "next/navigation"
import StoreHeader from '@/components/ui/store-header';
import ProductList from '@/components/ui/product-list';

function getProductsByParams(params: string[]): [Product[], StoreInfo] | [null, null] {
    let Products: Product[] = products;
    let StoreInfo: StoreInfo = {
        name: "The Hype Company",
        description: "The Hype Company es una tienda de ropa y accesorios de moda urbana, con una amplia gama de productos de las mejores marcas del mundo.",
        image: "/vercel.svg"
    };;


    if (params.length > 4 || params.length < 1) {
        console.log("Invalid params");
        return [null, null];
    }

    switch (params[0]) {
        case "brand":
            const _brand = brands.find((brand) => brand.name.toLowerCase() === params[1]);
            if (!_brand) return [null, null];

            StoreInfo = {
                name: _brand.name,
                description: _brand.description,
                image: _brand.logoURL
            };

            const toSearch = params[2];

            if (toSearch === undefined) {
                Products = products.filter((product) => {
                    return product.brand.toLowerCase() === _brand.name.toLowerCase();
                });
                break;
            } else {
                Products = products.filter((product) => {
                    return product.brand.toLowerCase() === _brand.name.toLowerCase() && product.subtype.toLowerCase() === toSearch.toLowerCase();
                });
            }
            break;
        case "type":
            console.log("Listing products by type: " + params[1]);
            const _products = products.filter((product) => {
                return product.type.toLowerCase() === params[1].toLowerCase();
            });

            console.log("Products found: ", ..._products);

            const _subtype = params[2];
            if (_subtype === undefined) {
                Products = _products;
                break;
            }

            console.log("Listing products by subtype: " + _subtype);

            Products = _products.filter((product) => {
                return product.subtype.toLowerCase() === _subtype.toLowerCase();
            });

            console.log("Products found: ", ...Products);

            break;
    }

    return [Products, StoreInfo];
}

export default function ShopPage({ params }: { params: { params: string[] } }) {
    const args = params.params;
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