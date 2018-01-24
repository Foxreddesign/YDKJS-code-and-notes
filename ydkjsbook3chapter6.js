//ydkjs this and object prototypes

//chapter 6 behavior delegation

//delegation thoery
var Task = {
  setID: function(ID) { this.id = ID; },
  outputID: function() { console.log( this.id ); }
};
var XYZ = Object.create( Task );
XYZ.prepareTask = functionID(ID,Label) {
  this.setID( ID );
  this.Label = Label;
};
XYZ.outPutTaskDetails = function() {
  this.outputID();
  console.log( this.Label );
};
//ABC= .........

//oo style code
function Foo(who){
   this.me = who;
 }
 Foo.prototype.identify = function() {
   return "I am " + this.me;
 };
 function Bar(who) {
   Foo.call( this, who );
 }
 Bar.prototype = Object.create( Foo.prototype );
 Bar.prototype.speak = function() {
   alert( "Hello, " + this.idenify() + "." );
 }
 var b1 = new Bar( "b1" );
 var b2 = new Bar( "b2" );
 b1.speak();
 b2.speak();

 //compared to OOLO style code
 var Foo = {
   init: function(who) {
     this.me = who;
   },
   identify: function() {
     return "I am " + this.me;
   }
 };
var Bar = Object.create( Foo );
Bar.speak = function() {
  alert( "Help, " + this.identity() + "." );
};
var b1 = Object.cretae( Bar );
b1.init( "b1" );
var b2 = Object.create( Bar );
b2.init( "b2" );
b1.speak();
b2.speak();


//widgeet objects by delegation oloo style

var Widget = {
  init: function(width,height){
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  },
  insert: function($where){
    if (this.$elem) {
      this.$elem.css( {
        width: this.width + "px",
        height: this.height + "px"
      } ).appendTo( $where );
    }
  }
};
var Button = Object.create( Widget );
Button.setup = function(width,height,label){
  //delegated call
  this.init( width, height );
  this.label = label || "Default";
  this.$elem = $( "<button>" ).text( this.label );
};
Button.build = function($where) {
  //delegated call
  this.insert( $where );
  this.$elem.click( this.onClick.bind( this ) );
};
Button.onClick = function(evt) {
  console.log( "Button ' + this.label + ' clicked!" );
};
$( document ).ready( function(){
  var $body = $( document.body );
  var btn1 = Object.create( Button );
  btn1.setup( 125, 30, "Hello" );
  var btn2 = Object.create( Button );
  btn2.setup( 150, 40, "world" );
  btn1.build( $body );
  btn2.build( $body );
} );



//simpler design
var LoginControlloer = {
  errors: [],
  getUser: function() {
    return document.getElementById( "login_username" ).value;
  },
  getPassword: function() {
    returndocument.getElementById( "login_password" ).value;
  },
  validateEntry: function(user,pw) {
    user = user || this.getUser();
    pw = pw || this.getPassword();
    if (!(user && pw)) {
      return this.failure( "Please eneter a username & password!" );
    }
    else if (pw.length < 5) {
      return this.failure( "Password must be 5+ characters!" );
    }

    return true;
  },
  showDialog: function(title,msg) {

  },
  failure: function(err) {
    this.errors.push( err );
    this.showDialog( "Error", "Login invalid: " + err );
  }
};

var AuthController = Object.create( LoginController );
AuthControlloer.errors = [];
AuthController.checkAuth = function() {
  var user = this.getUser();
  var pw = this.getPassword();
  if (this.validateEntry( user, pw )) {
    this.server( "/check-auth",{
      user: user,
      pw: pw
    } )
    .then( this.accepted.bind( this ) )
    .fail( this.rejected.bind( this ) );
  }
};
AuthControlloer.server = function(url,data) {
  return $.ajax( {
    url: url,
    data: data
  } );
};
AuthController.accepted = function() {
  this.showDialog( "Success", "Authenticated!" )
};
AuthController.rejected = function(err) {
  this.failure( "Auth Failed: " + err );
};


//nicer syntax
class Foo {
  methodName() { /*..*/ }
}



var LoginController = {
  errors: [],
  getUser() {
    //look ma no function
  },
  getPassword() {
    //....
  }
  //...
};



// use nicer object literal syntax with concise methods
var AuthController = {
  errors: [],
  checkAuth() {
    //..
  },
  server(url,data) {
    //..
  }
  //..
};
//and link authcontroller to delegate to LoginController
Object.setPrototypeOf( AuthController, LoginController );


//introspection
function Foo() { /* ...*/ }
Foo.prototype...
function Bar() { /* ...*/ }
Bar.prototype = Object.create( Foo.prototype );
var b1 = new Bar( "b1" );

//relating Foo and Bar to each other
Bar.prototype instanceof Foo;
Object.getPrototypeOf( Bar.prototype ) === Foo.prototype;
Foo.prototype.isPrototypeOf( Bar.prototype );

//relating b1 to both Fooand progress-bar
b1 instanceof Foo;
b1 instance Bar;
Object.getPrototypeOf( b1 ) === Bar.prototype;
Foo.prototype.isPrototypeOf( b1 );
Bar.prototype.isPrototypeOf( b1 );

//duck typing
if (a1.something) {
  a1.something();
}

// using OLOO approach for type introspection
Foo.isPrototypeOf( Bar );
Object.getPrototypeOf( Bar ) === Foo;

Foo.isPrototypeOf( b1 );
Bar isPrototypeOf( b1 );
Object.getPrototypeOf( b1 ) === Bar;
