//ydkjsbook2chaapter8 scope and closures

//arrow function
var foo a => {
  console.log( a );
};
foo( 2 );




var obj = {
  id: "awesome",
  cool: function cooFn() {
    console.log( this.id );
  }
};
var id = "not awesome";
obj.cool();
setTimeout( obj.cool, 100 );
/*The problem is the loss of this binding on the cool() function.
There are various ways to address that problem, but one often-repeated
solution is var self = this;.

That might look like:*/
var obj = {
  count: 0,
  cool: function coolFn() {
    var self = this;
    if (self.count < 1) {
      setTimeout( function timer(){
        self.count++;
        console.log( "awesome?" );
      }, 100 );
    }
  }
};
obj.cool();

//arrow function solution is
var obj = {
  count: 0,
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout( () => {
        this.count++;
        console.log( "awesome?" );
      }, 100 );
    }
  }
};
obj.cool();



//more appropriate approach using this mechanism
var obj = {
  count: 0,
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout( function timer(){
        this.count++;
        console.log( "more awesome" );
      }.bind ( this ), 100 );
    }
  }
};
obj.cool();
