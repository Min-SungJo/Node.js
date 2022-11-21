const {odd,even}  = require('./var');

/**숫자의 짝수/홀수 구하기*/
function checkOddOrEven(num){
    if(num%2){
        return odd;
    }else{
        return even;
    }
}

module.exports = checkOddOrEven;