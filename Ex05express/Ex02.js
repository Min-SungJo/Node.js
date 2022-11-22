const express = require('express')
const app = express()
// app.set('key',value) : 키에 값을 저장하도록 설정
app.set('port', process.env.PORT||8888);
                // 기본포트가 없으면 8888을 사용하겠다

app.get('/home', (req,res)=>{ // 라우팅
    // http 모듈 -> html 파일을 응답하기 위해서 필요한 것 -> fs 모듈 (express모듈은 fs, head 필요 없다)
                //현재파일 경로
    // 응답 헤더 작성하지 않아도 됨
    res.sendFile(__dirname+'/Ex02.html') // 파일 응답
});

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트에서 서버 연결 대기중..!`)
});