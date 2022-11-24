/**mysql2모듈 */
const mysql = require('mysql2');

const db_info = {
    host: 'localhost',
    port: '3306',
    user: 'test',
    password: '1234',
    database: 'testdb',
}

module.exports = {
    init: function () { // 초기화
        return mysql.createConnection(db_info);
    },
    connect: function (conn) {
        conn.connect(function(err){
            if(err){
                console.error(`MYSQL_CONN_ERR : ${err}`);
            }else{
                console.log('CONN_SUCCESS');
            }
        });
    }
}