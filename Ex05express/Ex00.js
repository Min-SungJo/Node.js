const express = require('express')
const app = express()

app.set('port', process.env.PORT||8888);

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트에서 서버 연결 대기중..!`)
});

//port번호 설정해서 편하게 쓰기 위한 js파일