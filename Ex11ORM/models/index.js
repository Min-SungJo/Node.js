const Sequelize = require('sequelize');
const User = require('./user');
const env = 'development';
const config = require('../config/config')[env]; // dev test pd 세가지 가 적용되어 있다

// db 연결정보
const sequelize = new Sequelize(config.database, config.username,config.password, config);

//<db>
const db = {}; //sequelize, object;

//  key       value(db정보)
db.sequelize = sequelize;
db.User =  User; // db와 테이블 연결
//</db>

User.init(sequelize); // table 초기화
User.associate(db); // 관계 설정

module.exports = db; //<db/>