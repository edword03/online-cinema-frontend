/** @type {import('next').NextConfig} */
module.exports = {
	optimizeFonts: true,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		CLOUD_URL: process.env.REACT_APP_CLOUD_STORE_URL,
		CLOUD_CONTAINER: process.env.REACT_APP_CLOUD_CONTAINER,
	},

	images: {
		domains: [process.env.REACT_APP_CLOUD_DOMAIN],
	},

	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4000/api/:path*',
			},
		];
	},

	sassOptions: {
		includePaths: ['./src/app/assets/styles/helpers'],
		prependData: `@import "~@/assets/styles/helpers/styles.scss";`,
	},
};
