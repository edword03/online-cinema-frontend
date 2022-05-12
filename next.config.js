/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	optimizeFonts: true,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://localhost:4000/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'https://localhost:4000/uploads/:path*',
			},
		];
	},
};

module.exports = nextConfig;
