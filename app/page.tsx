"use client";
import React from "react";
import Image from 'next/image'
import LogoClouds from "@/components/ui/logo-clouds";
import FeaturedSection from "@/components/ui/featured-section";

import { navItems } from '@/site.config';

export default function Home() {
  const stats = [
    { name: 'Distribuidores', value: '33' },
    { name: 'Numero de Tienas', value: '150+' },
    { name: 'Satisfacción del Cliente', value: '100%' },
    { name: 'Estilo', value: 'Unlimited' },
  ]

  return (
    <main >
      <div>
        <div className="relative  px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-md leading-6 text-gray-300 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
                Vive el Hype. Sé el Hype. Únete a la Compañía.{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Unete <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-6xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                The Hype Company
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-300">
                Descubre colecciones que desafían las normas, diseñadas para aquellos que se atreven a destacar. </p>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <Image
                    width={1770}
                    height="0"
                    alt=""
                    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-100">
                <span
                  className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                ></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    STREAT WEAR COLLECTION
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Descubre la colección de streetwear que desafía las normas, diseñada para aquellos que se atreven a destacar.
                  </p>

                  <a
                    href="#"
                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    ir a la colección
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Conoce la colección</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Descubre la colección de streetwear que desafía las normas, diseñada para aquellos que se atreven a destacar.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {navItems.map((link) => (
                <a key={link.name} href={link.link}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <FeaturedSection />
      </div>

      <LogoClouds />
    </main>
  );
}

