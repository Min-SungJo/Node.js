const express = require('express')
const app = express() //app생성
// const port = 8888 -> 포트 번호 변수로 하면 좋음

// get : get요청 받는다
app.get('/', (req, res) => { //root로 get 요청시 
    res.send('Hello World!')
})

app.listen(8888, () => {
    // 8888포트로 오는 요청 기다림
    console.log('8888 포트에서 서버 연결 대기중 ....')
});