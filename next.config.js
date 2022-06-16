/** @type {import('next').NextConfig} */
const nextConfig = {
	optimizeFonts: true,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},

	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4000/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4000/uploads/:path*',
			},
		];
	},
};

module.exports = nextConfig;
