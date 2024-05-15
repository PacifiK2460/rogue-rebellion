/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'relentlessbetrayal.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                hostname: "tailwindui.com",
            },
            {
                hostname: "static.nike.com",    
            },
            {
                hostname: "assets.adidas.com"
            },
            {
                hostname: "img.hollisterco.com"
            }
        ]
    }
};

export default nextConfig;
