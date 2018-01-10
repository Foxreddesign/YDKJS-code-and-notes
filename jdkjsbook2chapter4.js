//you dont know javascript
//Chapter 4 Hoisting

foo();
function foo() {
  console.log( a );
  var a = 2;
}

//with hoisting could be interpreted as
function foo() {
  var a;
  console.log( a );
  var a = 2;
}

//function declarations hoisted before variable declarations
foo();
var foo;
function foo() {
  console.log( 1 );
}
foo = function() {
  console.log( 2 );
};
//in sterpreted by the engine as 
function foo(){
  console.log( 1 );
}
foo();
foo = function() {
  console.log( 2 );
};
/*While multiple/duplicate var declarations are effectively ignored,
subsequent function declarations do override previous ones*/
foo();
function foo() {
  console.log( 1 );
}
var foo = function(){
  console.log( 2 );
};
function foo() {
  console.log.( 3 );
}
