"use client";

import { Fragment, useEffect, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"
import { CartItem } from '@/types/product'

export default function CheckOutPage() {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    let items = cart;

    let existingItem = items.find(
      (cartItem: { name: string }) => cartItem.name === product.name
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.push({ ...product, quantity: 1 });
    }

    // Store the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(items));

    setCart([...items]);
  }

  const decrementQuantity = (product: CartItem) => {
    let items = cart;

    let existingItem = items.find(
      (cartItem: { name: string }) => cartItem.name === product.name
    );

    if (existingItem) {
      existingItem.quantity -= 1;
    }

    // Remove the item from the cart if the quantity is 0
    items = items.filter((item: CartItem) => item.quantity > 0);

    // Store the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(items));

    setCart([...items]);
  }

  const removeFromCart = (product: CartItem) => {
    let items = cart;

    items = items.filter(
      (cartItem: { name: string }) => cartItem.name !== product.name
    );

    // Store the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify(items));

    setCart([...items]);
  }

  useEffect(() => {
    const __cart = localStorage.getItem("cart");
    const _cart = JSON.parse(__cart || "[]");
    setCart(_cart);

    // Calculate the total
    let _total = 0;
    _cart.forEach((item: CartItem) => {
      _total += item.price * item.quantity;
    });
    setTotal(_total);
  }, [cart])

  return (
    <div className="bg-white">
      
      <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
        <div className="px-4 sm:px-6">
          <p className="text-4xl font-bold">
            Carrito
          </p>
        </div>
        <div className="relative mt-6 flex-1 px-4 sm:px-6">
          {
            cart.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-sm text-gray-500">
                  Tu carrito está vacío.
                </p>
              </div>
            ) : (
              <div>
                <ul className="divide-y divide-gray-200">
                  {cart.map((item: CartItem) => (
                    <li key={item.id} className="py-4 flex">
                      <Image
                        width={120}
                        height={24}
                        alt={item.name}
                        src={item.images[0]}
                        onError={
                          (e) => {
                            console.log("Error: " + e)
                          }
                        }
                      />
                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm font-semibold text-gray-900">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              ${item.price}
                            </p>
                            <div className="flex flex-row align-middle">
                              <Button variant="ghost" onClick={() => { addToCart(item) }}>
                                +
                              </Button>
                              {/* Center Vertically */}
                              <p className="text-sm text-gray-500 text-center">
                                {item.quantity}
                              </p>
                              <Button variant="ghost" onClick={() => { decrementQuantity(item) }}>
                                -
                              </Button>
                            </div>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.brand}
                          </p>
                        </div>
                        <div className="flex-1 flex items-end justify-between">
                          <p className="text-sm text-gray-500">
                            {item.type} / {item.subtype}
                          </p>
                          <Button
                            variant="destructive"
                            className="font-semibold "
                            onClick={() => { removeFromCart(item) }}
                          >
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <Separator />

                <div className="flex justify-between px-4 sm:px-6 py-4">
                  <p className="text-sm text-gray-500">
                    Total
                  </p>
                  <p className="text-sm text-gray-900">
                    ${total}
                  </p>
                </div>


                <div className="py-4">
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => {
                      // Redirect to the checkout page
                      window.location.href = "/checkout";
                    }}
                  >
                    Comprar
                  </Button>
                </div>

              </div>
            )
          }
        </div>


      </div>
    </div>
  )
}
