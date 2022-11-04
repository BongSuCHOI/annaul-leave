'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;

// config/config.js 파일에 있는 정보를 가져와 sequelize 객체 생성
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// 작성한 [table].js을 찾아서 table과 table name을 db객체의 키값으로 할당
fs.readdirSync(__dirname)
	.filter((file) => {
		return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
		db[model.name] = model;
	});

// db에 모델이름 연결
Object.keys(db).forEach((modelName) => {
	// table 파일에서 associate함수를 정의했다면 참
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 연결 테스트
sequelize
	.sync({ force: false })
	.then(() => {
		console.log('데이터베이스 연결됨.');
``	})
	.catch((err) => {
		console.error(err);
	});

module.exports = db;
