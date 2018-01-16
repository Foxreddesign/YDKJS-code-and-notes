//ydkjsbook3chapter3 This and object prototypes

//chapter 3 objects

// literal syntax for an object
var myObj = {
  key: value
  //...
};
//constructed form
var myObj = new Object();
myObj.key = va;lue;

//built in functions used a constructor\
var strPrimitive = "i am a string";
typeof strPrimitive;
strPrimitive instanceof String;

var strObject = new String( "i am a string" );
typeof strObject;
strObject instanceof String;

Object.prototype.toString.call( strObject );

var strPrimitive = "I am a string";
console.log( strPrimitive.length );
console.log( strPrimitive.charAt( 3 )


var myObject = {
  a:2
};
myObject.a;
myObject["a"];

//computed property names
var prefix = "foo";
var myObject = {
  [prefix + "bar"]: "hello",
  [prefix + "baz"]: "world"
};
myObject["foobar"];
myObject["foobaz"];

var myObject = {
  [Symbol.Something]: "hello world"
};


//property vs method
function foo() {
  console.log( "foo" );
}
var someFoo = foo;
var myObject = {
  someFoo: foo
};
foo;
someFoo;
myObject.someFoo;

var myObject = {
  foo: function foo {
    console.log( "foo" );
  }
};
var someFoo = myObject.foo;
someFoo;
myObject.foo;


// arrays

var myArray = [ "foo", 42, "bar" ];
myArray.length;
myArray[0];
myArray[2];

//arrays are object, you can add properties
var myArray = [ "foo", 42, "bar" ];
myArray.baz = "baz";
myArray.legth;
myArray.baz;

//Be careful: If you try to add a property to an array, but the property name looks like a number, it will end up instead as a numeric index (thus modifying the array contents):
var myArray = [ "foo", 42, "bar" ];
myArray["3"] = "baz";
myArray.length;
myArray[3];

//du[licating objects
function anotherFunction() { /*..*/ }
var anotherObject = {
  c: true
};
var anotherArray = [];
var myObject = {
  a: 2,
  b: anotherObject,
  c: anotherArray,
  d: anotherFunction
};
anotherArray.push( anotherObject, myObject );

//object.assign
var newObj = Object.assign( {}, myObject );
newObj.a;
newObj.b === anotherObject;
newObj.c === anotherArray;
newObj.d ===anotherFunction;

//property descriptors
var myObject = {
  a: 2
};
Object.getOwnPropertyDescriptor( myObject, "a" );
//add/modify propert
var myObject = {};
Object.defineProperty( myObject, "a", {
  value: 2,
  writable: true,
  configurable: true,
  enumerable: true
} );
myObject.a;

//changing writable property
var myObject = {};
Object.defineProperty( myObject, "a", {
  value: 2,
  writable: false,
  configurable; true,
  enumerable: true
} );
myOject.a = 3;
myObject.a;
//modification of the value silently failed. If we try in strict mode, we get an error:

//changing confirgurable
var myObject = {
  a: 2
};
myObject.a = 3;
myObject.a;
Object.defineProperty( myObject, "a", {
  value: 4,
  wriatble: true,
  configurable:false,
  enumerable: true
} );
myObject.a;
myObject.a = 5;
myObject.a;
Object.defineProperty( myObject, "a", {
  value: 6,
  writable: true,
  configurable: true,
  enumerable: true
} );//changing to false is a one way go
//configurable:false prevents the ability to use delete property operator
var myObject = {
  a: 2
};
myObject.a;
delete myObject.a;
myObject.a;
Object.defineProperty( myObject, "a", {
  value: 2,
  writable: true,
  configurable: false,
  enumerable: true
} );
myObject.a;
delete myObject.a;
myObject.a;

//immutability
myImmutableObject.foo//[1,2,3]
myImmutableObject.foo.push( 4 );
myImmutableObject.foo//[1,2,3,4]

//Object constant
var myObject = {};
Object.defineProperty( myObject, "FAVORITE_NUMBER", {
  value: 42,
  writable: false,
  configurable: false
} );

//Prevent extensions
var myObject = {
  a: 2
};
Object.preventextensions( myObject );
myObject.b = 3;
myObject.b;

//seal
Object.seal(..)//sealed object prevents extensions and
//marks all properties to configurable:false so no delete only modify

//freeze
Object.freeze(..)// as with seal except data accessor writable:false



//property access [[GET]]

var myObject = {
  a: 2
};
myObject.a;
//first looks in object, then follows prototype chain
//if [[GET]] doesnt find property then returns undefined
var myObject = {
  a: 2
};
myObject.b;//
// variable refernence unsuccessful will throw undefined
// property access unsuccessful will throw referenceerror

var myObject = {
  a: 2
};
myObject.a;
myObject.b;


//[[PUT]]
//getters and setters
var myObject = {
  get a() {
    return 2;
  }
};
Object.definePorperty(
  myObject,
  "b",
  {
    get: function(){ return this.a * 2 },
    enumerable: true
  }
);
myObject.a;
myObject.b;


var myObject = {
  get a() {
    return 2;
  }
};
myObject.a = 3;
myObject.a;


varmyObject = {
  get a() {
    return this._a_;
  },
  set a(val) {
    this._a_ = val * 2;
  }
};
myObject.a = 2;
myObject.a;


//existence
var myObject = {
  a: 2
};
("a" in myObject);
("b" in myObject);
myObject.hasOwnProperty( "a" );
myObject.hasOwnProperty( "b" );
//in operator checks for property name and not the existence of a value inside a container


//enumeration
var myObject = { };
Object.defineProperty(
  myObject,
  "a",
  { enumerable: true, value: 2 }
);
Object.defineProperty(
  myObject,
  "b",
  { enumerable: false, value: 3 }
);
myObject.b;
("b" in myObject);
myObject.hasOwnProperty( "b" );

for (var k in myObject) {
  console.log( k, myObject[k] );
}

//for..in loops only on objects and traditional for loops with numeric
//iteration for values stored in arrays

var myObject = { };
Object.defineProperty(
  myObject,
  "a",
  { enumerable: true, value: 2 }
);
Object.defineProperty(
  myObject,
  "b",
  { enumerable: false, value: 3 }
);
myObject.propertyIsEnumerable( "a" );
myObject.propertyIsEnumerable( "b" );
Object.keys( myObject );
Object.getOwnPropertyNames( myObject );

//propertyIsEnumerable test if a given property name exist directly and enumerable is true
//Object.keys(..) returns an array of all enumerable properties
//whereas in vs hasOwnProperty(..) differ on prototype consultation
//keys and Object.getOwnPropertyNames both only inspect the direct objects




//iteration
// for .. in loops
var myArray = [1,2,3];
for (var i = 0; i < myArray.length; i++) {
  console.log( myArray[i] );
}

forEach(..) // iterates over all values in array
every(..) //keeps going until the end or a false
some(..) //keeps going until the end or text-truncate

//fo .. of loopsvar myArray = [1,2,3];
for (var v of myArray) {
  console.log( v );
}

//manually iterate an array
var myArray = [1,2,3];
var it = myArray[Symbol.iterator]();
it.next();
it.next();
it.next();
it.next();

//@@iterator is not the iterator object but a function that returns the iterator object
//only arrays have built in @@iterator
//define own @@iterator for any objects
var myObject = {
  a: 2,
  b: 3
};
Object.defineProperty( myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function() {
    var o = this;
    var idx = 0;
    var ks = Object.keys( o );
    return {
      next: function() {
        return {
          value: o[ks[idx++]],
          done: (idx > ks.length)
        };
      }
    };
  }
} );
var it = myObject[Symbol.iterator]();
it.next();
it.next();
it.next();
for (var v of myObject) {
  console.log( v );
}



var randoms = {
  [Symbol.iterator]: function() {
    return {
      next: function() {
        return { value: Math.random() };
      }
    };
  }
};
var randoms_pool = [];
for (var n of randoms) {
  randoms_pool.push( n );
  if (randoms_pool.length === 100) break;
}
