var obj1=new Object();
var obj2=obj1;
obj1.myCustomProperty='Awesome!';
console.log(obj2.myCustomProperty);//'Awesome!'

var items=new Array();
var now = new Date();
var error=new Error("something bad happened");
var func=new Function("console.log('Hi')");
var obj=new Object();
var re=new RegExp('\\d+');

var book={
    name:"The Principles of Object-Oriented JavaScript",
    year:2014
};
//->
var book2={
    "name":"The Principles of Object-Oriented JavaScript",
    "year":2014
};
var book3=new Object();
book3.name="The Principles of Object-Oriented JavaScript";
book3.year=2014;

var colors=['red','blue','green'];
console.log(colors[0]);
//->
var colors2=new Array('red','blue','green');
console.log(colors[0]);

function reflect(value){return value;}
//is the same as
var reflect2= new Function('value','return value;');

var numbers=/\d+/g;

var numbers2=new RegExp('\\d+','g');

var array=[];
array.push(12345);
//->
var array2=[];
array2['push'](12345);

//
var arr3=[];
var method='push';
arr3[method](12345);
