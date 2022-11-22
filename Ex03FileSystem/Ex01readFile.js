/**노드에 내장된, 파일을 다룰 수 있는 모듈 */
const fs = require('fs');

fs.readFile('./readme.txt' , (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data) //결과물은 buffer(메모리에 저장된 데이터)형식으로 제공
    console.log(data.toString()); //우리가 읽을 수 있게 .toString()으로 가공
    //이런식으로 외부에 존재하는 파일 가져와서 사용 할 수 있다
    //주의할 점, 파일을 한번에 읽어오는 것이 아니라 buffer를 통해 하나씩 모아서 한번에 방출
    //-> buffer크기를 줄여서 로딩시간 단축(나머지는 차차)
    //따라서 비동기 통신을 할 때 promise형태로 가져와야 오류 X
})