/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.googleusercontent.com'
            },
            {
                protocol: 'https',
                hostname: '**.githubusercontent.com'
            }
        ]
    }
};

export default nextConfig;
