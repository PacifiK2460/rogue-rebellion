export type Brand = {
    name: string;
    logoURL: string;
    description: string;
}

export const brands: Brand[] = [
    {
        name: "Nike",
        logoURL: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
        description: "Nike es una de las marcas de ropa deportiva más conocidas del mundo, con una amplia gama de productos que van desde zapatillas de deporte hasta ropa casual y accesorios."
    },
    {
        name: "Adidas",
        logoURL: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg",
        description: "Adidas es una marca de ropa deportiva y calzado conocida por su diseño innovador y su compromiso con la sostenibilidad. La marca ofrece una amplia gama de productos, desde zapatillas de deporte hasta ropa de entrenamiento y accesorios."
    },
    {
        name: "Prada",
        logoURL: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Prada-Logo.svg",
        description: "Prada es una marca de moda de lujo conocida por su diseño elegante y sofisticado. La marca ofrece una amplia gama de productos, desde ropa y accesorios hasta perfumes y artículos de cuero."
    },
    {
        name: "Hollister",
        logoURL: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hollister_logo.svg",
        description: "Hollister es una marca de ropa casual y accesorios conocida por su estilo relajado y playero. La marca ofrece una amplia gama de productos, desde camisetas y pantalones cortos hasta trajes de baño y accesorios."
    },
    {
        name: "The North Face",
        logoURL: "/images/north-face-logo.png",
        description: "The North Face es una marca de ropa y equipo de exterior conocida por su diseño duradero y funcional. La marca ofrece una amplia gama de productos, desde chaquetas y pantalones hasta mochilas y tiendas de campaña."
    },
    {
        name: "Levi's",
        logoURL: "/images/levis-logo.png",
        description: "Levi's es una marca de ropa denim conocida por sus vaqueros de alta calidad y su diseño clásico. La marca ofrece una amplia gama de productos, desde vaqueros y chaquetas hasta camisetas y accesorios."
    },
    {
        name: "Gucci",
        logoURL: "https://upload.wikimedia.org/wikipedia/commons/7/79/1960s_Gucci_Logo.svg",
        description: "Gucci es una marca de moda de lujo conocida por su diseño innovador y su estilo extravagante. La marca ofrece una amplia gama de productos, desde ropa y accesorios hasta perfumes y artículos de cuero."
    },
    {
        name: "Balenciaga",
        logoURL: "/images/balenciaga-logo.png",
        description: "Balenciaga es una marca de moda de lujo conocida por su diseño vanguardista y su estilo moderno. La marca ofrece una amplia gama de productos, desde ropa y accesorios hasta zapatos y bolsos."
    },
    {
        name: "Chanel",
        logoURL: "/images/chanel-logo.png",
        description: "Chanel es una marca de moda de lujo conocida por su diseño elegante y su estilo clásico. La marca ofrece una amplia gama de productos, desde ropa y accesorios hasta perfumes y artículos de cuero."
    },
    {
        name: "Versace",
        logoURL: "/images/versace-logo.png",
        description: "Versace es una marca de moda de lujo conocida por su diseño extravagante y su estilo opulento. La marca ofrece una amplia gama de productos, desde ropa y accesorios hasta perfumes y artículos de cuero."
    }
]

export type StoreInfo = {
    name: string;
    description: string;
    image: string;
}