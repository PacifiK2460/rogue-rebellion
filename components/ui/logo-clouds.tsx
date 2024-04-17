export default function LogoClouds() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Vencedores de las mejores marcas
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <a href="/nike">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                    </a>
                    <a href="/adidas">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                    </a>
                    <a href="/hollister">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Hollister_logo.svg"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                    </a>
                    <a href="/prada">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Prada-Logo.svg"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                    </a>
                    <a href="/gucci">
                        <img
                            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src="https://upload.wikimedia.org/wikipedia/commons/7/79/1960s_Gucci_Logo.svg"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
