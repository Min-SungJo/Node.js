const fs = require('fs').promises;

fs.writeFile('./writeme.txt','새로만든 파일') //파일 생성 수행
    .then(()=>{ //파일 생성 성공하면 수행
        return fs.readFile('./writeme.txt');
    })
    .then((data)=>{ //파일 return 성공하면 수행
        console.log(data.toString());
    })
    .catch((err)=>{
        console.error(err);
    })