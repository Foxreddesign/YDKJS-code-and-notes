//ydkjsbook3chapter5 this and objejct prototypes
//prototypes

[[PROTOTYPE]]
// is an internal property of every object, which is a refernece to another object

var myObject = {
  a: 2
};
myObject.a;
//[[GET]] will will check for a property in the object itself
//if not there [[GET]] will follow the prototype link of the object

var anotherObject = {
  a: 2
};
var myObject = Object.create( anotherObject );
myObject.a;
//myObject.a looks in itself for a, when it cant be found it follows the prototype link to
//anotherObject to find it there. and so on if not

//if none is ever found and the prototype chain ends it will return undefined

//in operator will check entire chain for existence of property

var anotherObject = {
  a: 2
};
var myObject = Object.create( anotherObject );
for (var k in myObject) {
  console.log("found: " + k);
}
("a" in myObject);

//Object.prototype object is the end of every normal chain

//shadowing can occur implicitily subtlely
var anotherObject = {
  a: 2
};
var myObject = Object.create( anotherObject );
anotherObject.a;
myObject.a;
anotherObject.hasOwnProperty( "a" );
myObject.hasOwnProperty( "a" );
myObject.a++;
anotherObject.a;
myobject.a;
myObject.haOwnProperty( "a" );

//class functions
//JS objects all have a non enumerable property called prototype which points at an otherwise arbituary objects
function Foo() {
  //..
}
foo.prototype;



function Foo() {
  //..
}
var a = new Foo();
Object.getPrototypeOf( a ) === Foo.prototype; // true

function Nothing Special() {
  console.log( "Dont'mind me" );
}
var a = new NothingSpecial();
a;


function Foo(name) {
  this.name = name;
}
Foo.prototype.myName = function() {
  return this.name;
};
var a = new Foo( "a" );
var b = new Foo( "b" );
a.myName();
b.myName();

function Foo( {/*.....*/})
Foo.prototype = {/*..*/} //create new prototype object
var a1 = new Foo();
a1.constructor === Foo; // false
a1.constructor === Object; //true

//adding .constructor back to Foo.prototype to manually fix.constructor
function Foo() {/*....*/}
Foo.prototype = {/*....*/};
Object.defineProperty( Foo.prototype, "constructor" , {
  enumerable: false,
  writable: true,
  configurable: true,
  value: Foo
} );


// prototype style code
function Foo(name) {
  this.name = name;
}
Foo.prototype.myName = function() {
  return this.name;
};
function Bar(name,label) {
  Foo.call( this, name );
  this.label = label;
}
Bar.prototype = Object.create( Foo.prototype );
Bar.prototype.myLabel = function() {
  return this.label;
};
var a = new Bar( "a", "obj a" );
a.myName();
a.myLabel();


//inspecting an instance in JS for it delegation lnkage
//introspection ( or reflection)

function Foo() {
  //....
}
Foo.prototype.blah = ...;
var a = new Foo();

a instanceof Foo; //true



// creat()ing links

var foo = {
  something: function() {
    console.log( "Tell me something good...");
  }
};
var bar = Object.create( foo );
bar.something();

//Object.create() polyfilled
if (!Object.create) {
  Object.create = function(o) {
    function F(){}
    F.prototype = o;
    return new F();
  };
}


var anotherObject = {
  a: 2
};
var myObject = Object.create( anotherObject, {
  b: {
    enumerable: false,
    writable: true,
    configurable: false,
    value: 3
  },
  c: {
    enumerable: true,
    writable: false,
    configurable: false,
    value: 4
  }
} );
myObject.hasOwnProperty( "a" );
myObject.hasOwnProperty( "b" );
myObject.hasOwnProperty( "c" );
myIbject.a;
myObject.b;
myObject.c;

//as it can only be partially polyfilled some strict developers prefer custom utilities instead
function createAndLinkObject(o) {
  functionF(){}
  F.prototype = o;
  return new F();
}
var anotherObject = {
  a: 2
};
var myObject = createAndLinkObject( anotherObject );
myObject.a;


//links as fallbacks
var anotherObject = {
  cool: function() {
    console.log( "Cool!" );
  }
};
var myObject = Object.create( anotherObject );
myObject.cool();

//better designed ode that still takes advantage of delegation is
var anotherObject = {
  cool: function() {
    console.log( "cool!" );
  }
};
var myObject = Object.create( anotherObject );
myObject.doCool = function() {
  this.cool();
};
myObject.doCool();
