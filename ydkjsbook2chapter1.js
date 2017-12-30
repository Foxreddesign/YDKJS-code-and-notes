//You dont know java script scope and closures
//chapter 1

var a = 2;
/* variable declaration
a = identifier
= ...; is the assignment expression
which in this case is a Numericliteral of 2
*/

a = 2;
//assignment operation

function foo(a) {
  console.log(a);
}

foo(2);
//above icludes an implicitally assigned a = 2

function foo(a) {
  var b = a;
  return a + b;
}

//nested scopes
function foo(a) {
  console.log(a + b);
}
var b = 2;

foo(2);
