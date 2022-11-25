const express = require('express');
const {sequelize} = require('./models/index'); // index는 생략 가능(./models)
const app = express();

app.set('port', process.env.PORT||8888);

//force : 서버 실행할 때마다 테이블을 재생성할 것인지 아닌지
sequelize.sync ({force: false})
.then(()=>{
    console.log('CONN_COMPLETE')
})
.catch((err)=>{
    console.error(err);
});

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트에서 서버 연결 대기중..!`)
});
