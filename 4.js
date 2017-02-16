function reflect(value){
    return value;
}
console.log(typeof reflect);//'function'

var items=[];
var obj={};

console.log(items instanceof Array);//true
console.log(obj instanceof Object);//true
console.log(reflect instanceof Function);//true

console.log(items instanceof Object);//true
console.log(obj instanceof Array);//false
console.log(reflect instanceof Object);//true

console.log(Array.isArray(items));//true  跨浏览器
