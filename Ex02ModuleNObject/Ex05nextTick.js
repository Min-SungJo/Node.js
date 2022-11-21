//실행 순서 확인
/**즉시 실행하고 싶을 때 권장하는 함수*/
const immediate= setImmediate(()=>{ //3

    console.log('immediate');
});

setTimeout(()=>{ //2 빠르게 작동시키기 위한 함수가 아님
    console.log('timeout');
},0);

/**이벤트루프가 다른 함수보다 우선으로 처리하도록 만듬*/
const nextTick = process.nextTick(()=>{
    console.log('nextTick');
})