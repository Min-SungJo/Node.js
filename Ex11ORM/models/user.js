const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
    // init : user 필드 자료형 지정, 테이블 관련 설정
    // associate : 테이블 간의 관계 설정 (user는 댓글과 1대 다 관계다 처럼)
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.STRING(50),
                primaryKey: true,

            },
            pw: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            age: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        }, { // 테이블에 대한 설정 지정
            sequelize, // init 매개변수
            modelName : 'User', // 프로젝트에서 사용할 모델의 이름
            tableName : 'users', // 실제 데이터베이스 테이블 이름
            charset : 'utf8'
        });
    }

    static associate(db){
        // User / Project 객체가 있다고 가정!
        // db.User.hasMany(db.Project, {foreignKey: 'id', sourceKey : 'id'}); // 1
        // db.User.hasOne(db.Project, {foreignKey: 'id', targetKey : 'id'}); // :1
        // db.User.belongsMany(db.Project, {foreignKey: 'id', sourceKey : 'id'}); // 다
        // db.Project.belongsToMany(db.User,{foreignKey: 'id', sourceKey : 'id'}); // :다
        // db.Project.belongsTo(db.User,{foreignKey: 'id', targetKey : 'id'}); // :다

    }


}