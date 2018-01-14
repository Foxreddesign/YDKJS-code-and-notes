//ydkjsbook3chapter2 this and object prototypes

//call site and call stack

function baz() {
  // call stack is baz
  // our call site is global scope
  console.log( "baz" );
  bar(); // call site for bar
}
function bar() {
  //call stack is baz->bar
  //call site in in baz
  console.log( "bar" );
  foo(); // call site for foo
}
function foo() {
  //call stack is baz->bar->foo
  //call site is in bar
  console.log( "foo" );
}
baz(); // call site for baz




//default this binding
function foo() {
  console.log( this.a );
}
var a = 2;
foo();

//if strict mode is on effect, global not allowed so returns undefined
function foo() {
  "use strict";
  console.log( this.a );
}
var a = 2;
foo();

//code should be all strict or no strict

//implicit binding
function foo() {
  console.log( this.a );
}
var obj = {
  a: 2,
  foo: foo
};
obj.foo();

//only top/last level matters to the call site
function foo() {
  console.log( this.a );
}
var obj2 = {
  a: 42;
  foo: foo
};
var obj1 = {
  a: 2,
  obj2: obj2
};
obj1.obj2.foo();


//implicity lost - bar appears to refernce obj.foo but is really just referncing foo itself
// call site means default binding anyway
function foo() {
  console.log( this.a );
}
var obj = {
  a: 2,
  foo: foo
};
var bar = obj.foo;
var a = "oops, global";
bar();

// more common and unexpected way it occurs
function foo() {
  console.log( this.a );
}
function doFoo(fn) {
  fn();
}
var obj = {
  a: 2,
  foo: foo
};
var a = "oops, global";
doFoo( obj.foo );


//built in to language function being passed
function foo() {
  console.log( this.a );
}
var obj = {
  a: 2,
  foo: foo
};
var a = "oops, global";
setTimeout( obj.foo, 100);



//explicit binding
function foo() {
  console.log( this.a );
}
var obj = {
  a: 2
};
foo.call( obj );

//hard binding
function foo() {
  console.log( this.a );
}
var obj + {
  a: 2
};
var bar = function() {
  foo.call( obj );
};
bar();
setTimeout( bar, 100 );
bar.call( window );

//wrap a function with a hard binding
function foo(something) {
  console.log( this.a, something );
  return this.a + something;
}
var obj = {
  a: 2
};
var bar = function() {
  return foo.apply( obj, arguments );
};
var b = bar( 3 );
console.log( b );
// another way is to use a re-usable helper
function foo(something) {
  console.log( this.a, something );
  return this.a + something;
}
function bind(fn, obj) {
  return function() {
    return fn.apply( obj, arguments );
  };
}
var obj = {
  a:2
};
var bar = bind( foo, obj );
var b = bar( 3 );
console.log( b );

//es5 built in utility for hard binding
function foo(something) {
  console.log( this.a, something );
  return this.a + something;
}
var obj = {
  a: 2
};
var bar = foo.bind( obj );
var b = bar( 3 );
console.log( b );


//API call contexts
function foo(el) {
  console.log( el, this.id );
}
var obj = {
  id: "awesome"
};
[1,2,3].forEach( foo,obj );

//new binding
function foo(a) {
  this.a = a;
}
var bar = new foo( 2 );
console.log( bar.a );

//order of precedence
function foo() {
  console.log( this.a );
}
var obj1 = {
  a: 2,
  foo: foo
};
var obj2 = {
  a: 3,
  foo: foo
};
obj1.foo();
obj2.foo();
obj1.foo.call( obj2 );
obj2.foo.call( obj1 );
//explicit over implicity

function foo(something) {
  this.a = something;
}
var obj1 = {
  foo: foo
};
var obj2 = {};
obj1.foo( 2 );
console.log( obj1.a );

obj1.foo.call( obj2, 3);
console.log( obj2.a );

var bar + new obj1.foo( 4 );
console.log( obj1.a );
console.log( bar.a );
//new binding over implicity

function foo(something) {
  this.a = something;
}
var obj1 = {};
var bar = foo.bind( obj1 );
bar(2);
console.log( obj1.a );

var baz = new bar( 3 );
console.log( obj1.a );
console.log( baz.a );


//partial application due to new over hard binding

function foo(p1,p2) {
  this.val = p1 + p2;
}
var bar = foo.bind( null, "p1" );
var baz = new bar( "p2" );
baz.val;

/* determoning this from a calls call site
in order of precendence
1. is the function called with NEW ? if so THIS is the newly constructed object
var bar = new foo()
2. is the function called with CALL or APPLY even hidden inside a BIND hard binding
if so THIS is the excplicitly specified media-objectimg-thumbnailvar bar = foo.call( obj2 )
3. is the function called with a context binding, owning or containing object?
if so THIS is that objectimg
var bar = obj1.foo
4. otherwise, default the THIS. if in strict mode pick undefined otherwise pick the global objectimg
var bar = foo()
*/

//ignored this
//null or undefined passed to call, apply or bind are ignored
function foo() {
  console.log( this.a )
}
var a = 2;
foo.call( null );



function foo(a,b) {
  console.log( "a:" + a + ", b:" + b );
}
//spreading out array as parameters
foo.apply( null, [2, 3] );//a: 2, b: 3
//currying with "bind(..)"
var bar = foo.bind( null, 2 );
bar(  3 ); //a:2, b:3

//safer THIS create an empty object to insulate any effects from the global object
function foo(a,b) {
  console.log( "a:" + a + ", b:" + b );
}
//DMZ empty object
var ø = object.create( null );
//spreading out array as parameters
foo.apply( ø, [2, 3] );//a:2, b:3
//currying with 'bind(..)'
var bar = foo.bind( ø, 2 );
bar( 3 ); //a:2, b:3

//Indirection
//imdirect references from an assignment
function foo() {
  console.log( this.a );
}
var a = 2;
var o = {a: 3, foo: foo };
var p = {a: 4 };
o.foo();
(p.foo = o.foo)();

//soft binding
function foo() {
  console.log("name: " + this.name);
}
var obj = { name: "obj" },
    obj2 = {name: "obj2" },
    obj3 = { name: "obj3" };
var fooOBJ = foo.softBind( obj );
fooOBJ();
obj2.foo = foo.softBind(obj);
obj2.foo();
fooOBJ.call( obj3 );
setTimeout( obj2.foo, 10 );


//  => fat arrow function
function foo() {
  return (a) => {
    console.log( this.a )
  };
}
var obj1 = {
  a:2
};
var obj2 = {
  a:3
};
var bar = foo.call( obj1 );
bar.call( obj2 );

// most common use case use of callbacks such as event handlers like timers
function foo() {
  setTimeout(() => {
    console.log( this.a );
  },100);
}
var obj = {
  a:2
};
foo.call( obj );

//same as the pre es6 pattern of
function foo() {
  var self = this;
  setTimeout( function(){
    console.logh( self.a );
  },100 );
}
var obj = {
  a:2
};
foo.call( obj );
