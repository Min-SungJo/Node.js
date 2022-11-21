let i = 1;
/**1초마다 i가 증가하여 5가 되면 종료 */
const interval = setInterval(()=>{
    if(i===5){
        console.log('종료');
        process.exit();
    }
    console.log(i);
    i++;
},1000);