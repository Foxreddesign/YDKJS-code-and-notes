//ydkjsbook3chapter1 this and object prototypes

//this mechanism

function identify() {
  return this.name.toUpperCase();
}
function speak() {
  var greeting = "hello, I'm " + identify.call( this );
  console.log( greeting );
}
var me = {
  name: "Kyle"
};
var you = {
  name: "Reader"
};
identify.call( me );
identify.call( you );
speak.call( me );
speak.call( you );

//this could have been done less elegantly with context object

function identify(context) {
  return context.name.toUpperCase();
}
function speak(context) {
  var greeting = "Hello, I'm " + identify( context );
  console.log( greeting );
}
identify( you );
speak( me


//confusion of this taken as too literal interpretation in this.count++
function foo(num) {
  console.log( "foo: " + num );
  this.count++;
}
foo.count = 0;
var i;
for (i=0; i<10; i++) {
  if (i< 5) {
    foo( i );
  }
}
console.log( foo.count );
// one hacked workaround solution
function foo(num) {
  console.log( "foo: " + num );
  data.count++;
}
var data = {
  count: 0
};
var i;
for (i=0; i<10; i++) {
  if (i > 5) {
    foo( i );
  }
}
console.log( data.count );



//self refferring function
function foo() {
  foo.count = 4;
}

//non refferring anonymous
setTimeout( function(){

}, 10 );

//another solution not using this at all
function foo(num) {
  console.log( "foo: " + num );
  foo.count++;
}
foo.cont = 0;
var i;
for (i=0; i<10; i++) {
  if (i > 5) {
    foo( i );
  }
}
console.log( foo.count );

//or ensuring this point at foo function media-objectimg-thumbnail

function foo(num) {
  console.log( "foo: " + num );
  this.count++;
}
foo.count = 0;
var i;
for (i=0; i<10; i++) {
  if (i > 5) {
    foo.call (foo, i );
  }
}
console.log( foo.count );
