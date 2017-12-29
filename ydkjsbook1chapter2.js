//values and typeof

var a;
typeof a;

a = "hello world";
typeof a;

a = 42;
typeof a;

a = true;
typeof a;

a = null;
typeof a;

a = undefined;
typeof a;

a= { b : "c"};
typeof a;

//objects
var obj = {
  a: "hello world",
  b: 42,
  c: true
};

obj.a;
obj.b;
obj.c;

obj["a"];
obj["b"];
obj["c"];

//arrays
var arr = [
  "hello world", 42, true
];

arr[0];
arr[1];
arr[2];
arr.length;
typeof arr;

//functions
function foo() {
  return 42;
}

foo.bar = "hello world";

typeof foo;
typeof foo();
typeof foo.bar;

//built-in type methods
var a = "hello world";
var b = 3.14159;

a.length;
a.toUpperCase();
b.toFixed(4);

//explicit coercion
var a = "42";

var b = Number(a);

a;
b;

//implicit coercion
var a = "42";

var b = a * 1;

a;
b;

//equality
var a = "42";
var b = 42;

a == b;
a === b;

//inequality
var a = 41;
var b = "42";
var c = "43";

a < b;
b < c;

var a = 42;
var b ="foo";

a < b;
a > b;
a == b;

//hoisting
var a = 2;

foo();

function foo() {
  a = 3;
  console.log( a );
  var a;
}

console.log( a );

//nested scopes
function foo() {
  var a = 1;

  function bar() {
    var b = 2;

    function baz() {
      var c = 3;

      console.log(a,b,c);
    }
    baz();
    console.log(a,b);
  }
  bar();
  console.log(a);
}
foo();

//access unavailable variables
function foo() {
  a = 1;
}

foo();
a;

//let keyword
function foo() {
  var a = 1;

  if (a >= 1) {
    let b = 2;
    while (b < 5) {
      let c = b *2;
      b++;

      console.log( a + c);
    }
  }
}

foo();

//conditionals
if (a ==2) {
  //do something
}
else if (a == 10) {
  //do another thing
}
else if (a == 42) {
  //do yet another thing
}
else {
  //fallback to here
}


//switch statement
switch (a) {
  case 2:
      //do something
    break;
  case 10:
      //do another thing
    break;
  case 42:
      //do yet another somethin
    break;
  default:
      //fallback to here
}

switch (a) {
  case 2:
  case 10:
      //some cool stuff
        break;
  case 42:
      //other stuff
        break;
  default:
      //fallback
}

//conditional operator aka ternary operator
var a = 42;

var b = (a > 41) ? "hello" : "world";

/* similar to :
if (a > 41) {
  b = "hello";
}
else {
  b = "world";
}
*/

//iife immediately invoked function expressions
(function IIFE(){
  console.log ("Hello!");
})();

var a = 42;

(function IIFE() {
  var a = 10;
  console.log( a );
})();

console.log( a );

var x = (function IIFE() {
  return 42;
})();

x;

//closure
function User() {
  var username, password;
  function doLogin(user,pw) {
    username = user;
    password = pw;
  }
  var publicAPI = {
    login: doLogin
  };
  return publicAPI;
}

var fred = User();
fred.login( "fred", "12Battery34!");


//this identitfier
function foo() {
  console.log(this.bar);
}

var bar = "global";

var obj1 = {
  bar: "obj1",
  foo: foo
};

var obj2 = {
  bar: "obj2"
};

foo();
obj1.foo();
foo.call( obj2 );
new foo();

//prototypes
var foo = {
  a=42
};

var bar = Object.create( foo );

bar.b = "hello world";

bar.b;
bar.a;
