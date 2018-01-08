// you dont know java script scope and closures book 2 chapter 2

//lexical scope

function foo(a) {
  var b = a * 2;
  function bar(c) {
    console.log( a,b,c);
  }
  bar(b * 3);
}
foo( 2 );
/* this includes 3 nested scopes-
c- console.log(a,b,c)
a- var b = a * 2;
  function bar() {
  c-
  }
  bar(b * 3);
function foo() {
  a- var b
    c- console
}
foo( 2 );

eval() */

function foo(str,a) {
  eval(str);
  console.log(a,b);
}
var b = 2;
foo( "var b =3;",1);

//with

var obj = {
  a:1,
  b:2,
  c:3
};

//is the same as
obj.a=2;
obj.b=3;
obj.c=4;

//or the easier way
with (obj) {
  a = 3;
  b = 4;
  c = 5;
}




function foo(obj) {
  with (obj) {
    a=2;
  }
}

var o1 = {
  a: 3
};

var o2 = {
  b: 3
};

foo( o1 );
console.log( o1.a );

foo( o2 );
console.log( o2.a);
console.log( a );
