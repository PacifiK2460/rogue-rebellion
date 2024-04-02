"use client";

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    CheckBadgeIcon,
    ShoppingCartIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { describe } from 'node:test';
import { div, sub } from 'three/examples/jsm/nodes/Nodes.js';
const callsToAction = [
    { name: 'Instagram', href: '#', icon: CheckBadgeIcon },
    { name: 'Contactanos', href: '#', icon: PhoneIcon },
]

const navItems = [
    {
        "name": "Techwear",
        "link": "/techwear",
        "subItems": [
            {
                "name": "Pants",
                "description": "Nuestros pantalones techwear están diseñados para el urbanita moderno, con materiales duraderos y resistentes al agua y un ajuste elegante y aerodinámico.",
                "link": "/pants"
            },
            {
                "name": "Jackets",
                "description": "Mantente cálido y con estilo con nuestras chaquetas techwear, equipadas con múltiples bolsillos para funcionalidad y diseñadas con una estética futurista.",
                "link": "/jackets"
            },
            {
                "name": "Hoodies",
                "description": "Nuestras sudaderas con capucha techwear combinan comodidad y estilo, con diseños únicos y telas de alta tecnología para una calidez y durabilidad óptimas.",
                "link": "/hoodies"
            },
            {
                "name": "Vest",
                "description": "Los chalecos techwear de The Hype Company son ligeros y versátiles, perfectos para usar en capas o por sí solos.",
                "link": "/vest"
            },
            {
                "name": "Shirts",
                "description": "Nuestras camisas techwear son transpirables y de secado rápido, diseñadas tanto para el uso activo como casual.",
                "link": "/shirts"
            },
            {
                "name": "Shorts",
                "description": "Mantente fresco y cómodo con nuestros pantalones cortos techwear, con cinturas ajustables y amplio espacio en los bolsillos.",
                "link": "/shorts"
            }
        ]
    },
    {
        "name": "Footwear",
        "link": "/footwear",
        "subItems": [
            {
                "name": "Boots",
                "description": "Nuestras botas son robustas y duraderas, diseñadas para resistir cualquier clima mientras te mantienen con estilo.",
                "link": "/boots"
            },
            {
                "name": "Sneakers",
                "description": "Las zapatillas de deporte de The Hype Company son la combinación perfecta de comodidad y estilo, con diseños innovadores y materiales de alta calidad.",
                "link": "/sneakers"
            }
        ]
    },
    {
        "name": "Headwear",
        "link": "/headwear",
        "subItems": [
            {
                "name": "Caps",
                "description": "Nuestras gorras están diseñadas con un toque moderno, perfectas para agregar un toque de estilo streetwear a cualquier atuendo.",
                "link": "/caps"
            },
            {
                "name": "Beanies",
                "description": "Mantente cálido y con estilo con nuestros gorros, hechos de materiales suaves y cómodos y disponibles en una variedad de colores.",
                "link": "/beanies"
            }
        ]
    },
    {
        "name": "Jewelry",
        "link": "/jewelry",
        "subItems": [
            {
                "name": "Pants Chains",
                "description": "Agrega un toque vanguardista a tu atuendo con nuestras cadenas para pantalones, hechas de metales de alta calidad.",
                "link": "/pantschains"
            },
            {
                "name": "Necklaces",
                "description": "Nuestros collares son el accesorio perfecto para completar tu look streetwear, con diseños únicos y llamativos.",
                "link": "/necklaces"
            },
            {
                "name": "Bracelets",
                "description": "Agrega un toque de sofisticación a tu atuendo con nuestras pulseras, diseñadas con materiales de alta calidad y detalles intrincados.",
                "link": "/bracelets"
            },
            {
                "name": "Rings",
                "description": "Nuestros anillos son una pieza de declaración audaz, elaborados con atención al detalle y diseñados para destacar.",
                "link": "/rings"
            }
        ]
    }

];


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function FloatingNav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">The Hype Company</span>
                        <Image src="/vercel.svg" alt="" width={44} height={34} />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Abrir Menu Principal</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    {
                        navItems.map((item) => (
                            <Popover className="relative" key={item.name}>
                                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                    {item.name}
                                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-lg overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                            {item.subItems?.map((subitem) => (
                                                <div
                                                    key={subitem.name}
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                                >
                                                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                    </div> */}
                                                    <div className="flex-auto">
                                                        <a href={subitem.link} className="block font-semibold text-gray-900">
                                                            {subitem.name}
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-gray-600">{subitem.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                            {callsToAction.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                                >
                                                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                        ))
                    }




                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a> */}
                    <ShoppingCartIcon className="h-6 w-6 text-gray-500" />

                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">The Hype Company</span>
                            <Image src="/vercel.svg" alt="" width={44} height={34} />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Cerrar Menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            {
                                                navItems.map((item) => (
                                                    <div key={item.name}>
                                                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                            {item.name}
                                                            <ChevronDownIcon
                                                                className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                                aria-hidden="true"
                                                            />
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel className="mt-2 space-y-2">
                                                            {item.subItems.map((subitem) => (
                                                                <Disclosure.Button
                                                                    key={subitem.name}
                                                                    as="a"
                                                                    href={subitem.link}
                                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                >
                                                                    {subitem.name}
                                                                </Disclosure.Button>
                                                            ))}
                                                        </Disclosure.Panel>
                                                    </div>
                                                ))
                                            }
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    <ShoppingCartIcon className="h-6 w-6 text-gray-500" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}