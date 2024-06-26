import { Product } from "@/types/product"
import Image from "next/image"

export default function ProductList({ Products }: { Products: Product[] }) {
    return (
        <div className="bg-white">
            {
                Products.length > 0 ? (
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Products</h2>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {Products.map((product) => (
                                <a key={product.id} href={"/product/" + product.id} className="group">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                            width={300}
                                            height={300}
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full p-40">
                        <p className="text-5xl text-gray-500">
                            No hay productos en esta lista.
                        </p>
                    </div>
                )
            }
        </div>
    )
}