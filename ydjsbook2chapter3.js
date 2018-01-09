// scope and closures

//function scope
function foo(a) {
  var b = 2;
  //jdwcicuw
  function bar() {
    //wgcwiycg
  }
  //wiuehguih
  var c = 3;
}

//hiding in plain scope
function doSomething(a) {
  b = a + doSomethingElse( a * 2 );

  console.log( b * 3 );
}
function doSomethingElse(a) {
  return a - 1;
}
var b;
doSomething( 2 );

//should be written as
function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }
  var b;
  b = a + doSomethingElse(a*2);
  console.log(b*3);
}
doSomething( 2 );

//collision avoidance
function foo() {
  function bar(a) {
    i=3;
    console.log(a+i);
  }
  for (var i=0; i<10; i++) {
    bar(i*);
  }
}
foo();


//namespaces
var MyReallyCoolLibrary = {
  awesome: "stuff",
  doSomething: function() {
    //hdscysb
  }
  doAnotherThing: function() {
    //cjudvybc
  }
};

//functions as scopes
var a = 2;
function foo() {
  var a = 3;
  console.log( a );
}
foo();
console.log( a );

//should instead be
var a = 2;
(function foo (){
  var a = 3;
  console.log(a);
})();

console.log( a );

//function expression as a callback parameter
setTimeout( function(){
  console.log("I waited 1 second!");
},1000 );

//name function expressions
setTimeout( function timeoutHandler(){
  console.log("I waited 1 second!");
}, 1000);

//invoking function expressions immediately
var a =2;
(function foo() {
  var a = 3;
  console.log( a );
})();
console.log( a );

//name IIFE also

var a = 2;
(function IIFE(){
  var a= 3;
  console.log( a );
})();
console.log( a );

//UMD project project style
var a = 2;
(function IIFE ( def ){
  def( window);
})(function def ( global){
  var a = 3 ;
  console.log( a );
  console.log( global.a );
});


//b;ock scope
for (var i=0; i<10; i++) {
  console.log( i );
}

var foo = true;
if (foo) {
  var bar = foo * 2;
  bar = something( bar );
  console.log( bar );
}



//try/catch
try {
  undefined();
}
cstch (err) {
  console.log(err);
}
console.log( err );

//let keyword
var foo + true;
if (foo) {
  let bar = foo*2;
  bar = something( bar );
  console.log( bar );
}
console.log( bar );

//explicit block
var foo = true;
if (foo) {
  {
    let bar = foo * 2;
    bar = something( bar );
    console.log(  bar );
  }
}
console.log( bar );

//garbage collection
function process(data) {
  //do something  inuhiusdhliush
}
var someReallyBigData = {..};
process( someReallyBigData );
var btn = document.getElementById( "my_button" );
btn.addEventListener( "click", function click(evt){
  console.log("button clicked");
}, /*capturingPhase=*/ false );

//blockscoping for garbage collection
function process(data)  {
  // do something interesting
}
{
  let someReallyBigData = {..};
  process( someReallyBigData );
}
var btn = document.getElementById( "my_button" );
btn.addEventListener( "click", function click(evt){
  console.log("button clicked");
}/*capturing pahase=*/false);

//let loops
for (let i=0; i<10; i++) {
  console.log( i );
}
console.log( i );

//let per iteration binding explanation
{
  let j;
  for (j=0; j<10; j++) {
    let i = j;
    console.log( i );
  }
}

//const keyword
var foo = true;
if (foo) {
  var a = 2;
  const b= 3;
  a = 3;
  b = 4;
}
console.log( a );
console.log( b );
