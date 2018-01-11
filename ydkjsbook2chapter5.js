//ydkjs book 2 chapter 5 scope and closures
//closure is when a function is able to remember and access its lexical scope even
//when that function is executing outside its lexical scope

function foo() {
  var a = 2;
  function bar() {\console.log( a );
  }
  bar();
}
foo();

function foo() {
  var a = 2;
  function bar() {
    console.log( a );
  }
  return bar;
}
var baz = foo();
baz();

//examples of observing/exercising closures
function foo() {
  var a = 2;
  function baz() {
    console.log( a );
  }
  bar( baz );
}
function bar(fn) {
  fn();
}
//indirect passing around of functions
var fn;
function foo() {
  var a = 2;
  function baz() {
    console.log( a );
  }
  fn = baz;
}
function bar() {
  fn();
}
foo();
bar



function wait(message) {
  setTimeout( function timer(){
    console.log( message );
  },1000 );
}
wait( "Hello, closure!");



//loops and closure
for (var i=1; i<=5; i++) {
  setTimeout( function timer(){
    console.log( i );
  }, i*1000 )
}



//IIFE to add closure for semantic correcting
for (var i-1; i<=5; i++) {
  (function(){
    setTimeout( function timer(){
      console.log( i );
    },i*1000 );
  })();
} //doesnt work needs its own variable
for (var i=1; i<=5; i++) {
  (function(){
    var j = i;
    setTimeout( function timer(){
      console.log( j );
    }, j*1000 );
  })();
}

//varaition on the abpve
for (var i-=1; i<=5; i++) {
  (function(j){
    setTimeout( function timer(){
      console.log( j );
    }, j*1000 );
  })( i );
}

//block scoping to provide closure
for (var i=1; i<=5; i++) {
  let j=i;
  setTimeout( function timer(){
    console.log( j );
  }, j*1000 );
}

//let declaration in head of foor loops
//declares variable for each loop and iteration
for (let i=1; i<=5; i++) {
  setTimeout( function timer(){
    console.log( i )
  }, i*1000 );
}


// modules
function foo() {
  var something = "cool";
  var another = [1,2,3];
  function doSomething() {
    console.log( something );
  }
  function doAnother() {
    console.log( another.join( " ! "));
  }
}

// the above shows no observable closures

function CollModule() {
  var somehting = "cool";
  var another = [1,2,3];
  function doSomething() {
    console.log( something );
  }
  function doAnother() {
    console.log( anoher.join( " ! " ) );
  }
  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}
var foo = coolModule();

foo.doSomething();
foo.doAnother();

//module as a singleton to have one instance
var foo = (function CoolModule() {
  var something = "cool";
  var another = [1,2,3];
  function doSomething(){
    console.log( something );
  }
  function doAnother() {
    console.log( another.join( " ! " ) );
  }
  return {
    doSomething: doSomething, doAnother: doAnother
  };
})();
foo.doSomething();
foo.doAnother();


//modules are functions and can receive parameters
function CoolModule(id) {
  function identify() {
    console.log( id );
  }
  return {
    identify:identify
  };
}
var foo1 = CoolModule( "foo 1" );
var foo2 = CoolModule( "foo 2" );
foo1.identify();
foo2.identify();


// naming the object you are returning as your API
var foo = (function CoolModule(id) {
  function change() {
    publicAPI.identify = identify2;
  }
  function identify1() {
    console.log( id );
  }
  function identify2() {
    console.log( id.toUpperCase() );
  }
  var publicAPI = {
    change: change,
    identify: identify1
  };
  return publicAPI
})( "foo module" );
foo.identify();
foo.change();
foo.identify();

//modern modules- how simple libraries use module APIs
var MyModules = (function Manager() {
  var modules = {};
  function define (name, deps, impl) {
    for (ar i=0; i<deps.length; i++) {
      deps[i] = modules[deps[i]];
    }
    modules[name] = impl.apply( impl, deps );
  }
  function get(name) {
    return modules[name];
  }
  return {
    define: define,
    get: get
  };
})();

//here it is defined as modules in text-uppercase

MyModules.define( "bar", [], function(){
  function hello(who) {
    return "let me introduce: " + who;
  }
  return {
    hello: hello
  };
} );
MyModules.define( "foo", ["bar"], function(bar){
  var hungry = "hippo";
  function awesome() {
    console.log( bar.hello( hungry  ).toUpperCase() );
  }
  return {
    awesome: awesome
  };
} );
var bar = MyModules.get( "bar" );
var foo = MyModules.get( "foo" );

console.log(
  bar.hello( "hippo" )
);
foo.awesome();



//es6 statitc modules not inline and so require seperate files

/* bar.js*/
function hello(who) {
  return "Let me introduce: " + who;
}
export hello;
/*foo.js*/
import hello from "bar";
var hungry = "hippo";
function awesome() {
  console.log(
    hello( hungry ).toUpperCase
  );
}
export awesome;

module fpoo from "foo";
module bar from "bar";
console.log(
  bar.hello( "rhino" )
);
foo.awesome();
