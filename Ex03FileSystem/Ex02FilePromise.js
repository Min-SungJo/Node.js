const fs = require('fs').promises;
//fs모듈을 promise형식으로 바꿔서 사용(보통 비동기 방식에서)

fs.readFile('./readme.txt')
    .then((data)=>{ //default => buffer
        console.log(data.toString());
    })
    .catch((err)=>{
        console.error(err);
    })