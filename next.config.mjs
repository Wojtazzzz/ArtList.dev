/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'artlistapi.bieda.it',
				port: '',
				pathname: '/servers/**',
				search: '',
			},
		],
	},
};

export default nextConfig;
