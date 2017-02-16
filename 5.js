var name='Nicholas';
var firstChar=name.charAt(0);
console.log(firstChar);//N

//what the JavaScript engine does

var name='Nicholas';
var temp=new String(name);
var firstChar=temp.charAt(0);
temp=null;
console.log(firstChar);//N

var name='Nicholas';
name.last='Zakas';
console.log(name.last);//undefined

//what the JavaScript engine does
var name='Nicholas';
var temp=new String(name);
temp.last='Zakas';
temp=null;

var temp=new String(name);
console.log(temp.last);//undefined
temp=null;

var name='Nicholas';
var count=10;
var found=false;

console.log(name instanceof String);//false
console.log(count instanceof Number);//false
console.log(found instanceof Boolean);//false

var name=new String('Nicholas');
var count=new Number(10);
var found=new Boolean(found);

console.log(typeof name);//'object'
console.log(typeof count);//'object'
console.log(typeof found);//'object'

var found=new Boolean(false);//->true
if(found){
    console.log('Found');
}
