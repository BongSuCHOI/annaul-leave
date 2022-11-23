'use strict';
const fs = require('fs');
// const rdsCa = fs.readFileSync(__dirname + '/rds-ca-2019-root.pem');

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
				ca: 'https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem',
			},
		},
	},
};
