/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	env: {
		NEXTAUTH_SECRET: 'mysecretofnextjsnextauth',
		NEXTAUTH_URL: 'http://localhost:3000/',
	},
};

module.exports = nextConfig;
