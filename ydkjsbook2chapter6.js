// ydkjsbook2chapter6 dynamic scope


//dynamic code illustrated
function foo() {
  console.log( a );
}
function bar () {
  var a = 3;
  foo();
}
var a = 2;
bar();

//So, if JavaScript had dynamic scope, when foo() is executed,
//theoretically the code below would instead result in 3 as the output.
function foo() {
  console.log( a );
}
function bar() {
  var a = 3;
  foo();
}
var a = 2;
bar();
