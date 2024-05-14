import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
// import { Cart as cart } from "@/types/product"

import { Skeleton } from "@/components/ui/skeleton"
import Image from 'next/image'
import { Button } from "@/components/ui/button"

import { Separator } from "@/components/ui/separator"
import { Cart as CartHandler } from '@/types/product'

export default function Cart({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {

  const cart = new CartHandler();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Cerrar Carrito</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        Carrito
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {
                        cart.getCart().length === 0 ? (
                          <div className="flex items-center justify-center h-full">
                            <p className="text-sm text-gray-500">
                              Tu carrito está vacío.
                            </p>
                          </div>
                        ) : (
                          <div>
                            <ul className="divide-y divide-gray-200">
                              {cart.getCart().map((item) => (
                                <li key={item.id} className="py-4 flex">
                                  {/* <Skeleton className="w-24 h-24" /> */}
                                  <Image
                                    width={24}
                                    height={24}
                                    alt={item.name}
                                    src={"/" + item.image}
                                    onError={
                                      (e) => {
                                        console.log(e)
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
                                          <Button variant="ghost" onClick={() => { cart.addToCart(item) }}>
                                            +
                                          </Button>
                                          {/* Center Vertically */}
                                          <p className="text-sm text-gray-500 text-center">
                                            {item.quantity}
                                          </p>
                                          <Button variant="ghost" onClick={() => { cart.removeFromCart(item) }}>
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
                                ${cart.getCart().reduce((acc, item) => acc + item.price * item.quantity, 0)}
                              </p>
                            </div>


                            <div className="py-4">
                              <Button
                                variant="default"
                                className="w-full"
                              >
                                Comprar
                              </Button>
                            </div>

                          </div>
                        )
                      }
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
