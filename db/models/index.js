'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const modelPath = process.cwd() + '/db/models/';
const basename = path.basename(__dirname + '/../models/index.js');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const models = {};

let sequelize;

// config/config.js 파일에 있는 정보를 가져와 sequelize 객체 생성
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// 작성한 [table].js을 찾아서 table과 table name을 db객체의 키값으로 할당
fs.readdirSync(modelPath)
	.filter((file) => {
		return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
	})
	.forEach((file) => {
		const model = require(__dirname + '/../models/' + file);
		model.init(sequelize, Sequelize.DataTypes);
		models[model.name] = model;
	});

// sequelize 객체에 등록된 모델 목록을 가져온다
Object.values(models)
	// associate 함수가 있는 모델만 필터링한다.
	.filter((model) => typeof model.associate === 'function')
	// associate() 함수를 실행하여 테이블간 관계를 설정한다
	.filter((model) => model.associate(models));

const db = { ...models, sequelize };

// 연결
// sequelize
// 	.sync({ force: false })
// 	.then(() => {
// 		console.log('데이터베이스 연결');
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});

module.exports = db;
