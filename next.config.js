/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	env: {
		NEXTAUTH_SECRET: 'mysecretofnextjsnextauth',
		NEXTAUTH_URL: 'http://localhost:3000/',
		DB_HOST: 'solt-vacation-app.cswefcijtjut.ap-northeast-2.rds.amazonaws.com',
		DB_USER: 'admin',
		DB_PASS: 'asd132465798!',
		DB_NAME: 'annual_db',
	},
};

module.exports = nextConfig;
