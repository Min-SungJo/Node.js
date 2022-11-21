//setTimeout : n초 후에 실행
/**1.5초 후에 실행하는 함수**/
const timeout = setTimeout(()=>{
    console.log('1.5초 후에 실행');
},1500);

//setInterval : n초 마다 실행
/**1초 마다 실행하는 함수**/
const interval = setInterval(()=>{
    console.log('1초마다 실행');
},1000);

/**3초 후에 실행하는 함수**/
const timeout2 = setTimeout(()=>{
    console.log('실행되지 않습니다');
},3000);

/**생성한 timeout2, interval 2.5초 후에 삭제하는 함수*/
const clearTime = setTimeout(()=>{
    console.log('2.5초가 지났습니다')
    clearTimeout(timeout2); //생성한 timeout 삭제
    clearInterval(interval); //생성한 interval 삭제
    console.log('종료')
},2500);
clearTime;

/**호출이 되면, 다른 것보다 먼저 실행되는 함수*/
const immediate = setImmediate(()=>{
    console.log('즉시실행')
})
/**생성한 immediate삭제*/
clearImmediate(immediate);