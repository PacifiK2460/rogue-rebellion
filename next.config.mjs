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
                hostname: "tailwindui.com"
            }
        ]
    }
};

export default nextConfig;
