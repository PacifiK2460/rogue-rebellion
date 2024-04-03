/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'relentlessbetrayal.com',
            }
        ]
    }
};

export default nextConfig;
