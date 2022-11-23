'use strict';
const fs = require('fs');
const rdsCa = fs.readFileSync('./db/config/rds-combined-ca-bundle.pem');

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: 'mysql',
	},
	test: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: 'mysql',
	},
	production: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: 'mysql',
		dialectOptions: {
			ssl: {
				rejectUnauthorized: true,
				ca: [rdsCa],
			},
		},
	},
};
