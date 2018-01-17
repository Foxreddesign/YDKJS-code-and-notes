//ydkjsbook3chapter4 mixing (up)"class" Objects

//class thoery
vehicle=class=string
specific implementation of the class = car = method

vehicle definition includes things applicanble to all vehicles
eg ability to cary popele
car definition includes things applicable to car but also inherits/extends all things from vehicle also
car is said to specialize the general vehicle definition
each seperate vehicle is an instance of the class
// javascript is oo
//oo object orientated design -
//encapsulate (package up) data and behavoirs together as data structures
//others are classes
//polymorphism parent behavior being overridden to give it more specifics

//javascript does not have classes
//but they can be approximately be implemented as a design pattern within javascript


//whats its like forcing class like structure on javascript
//class mechanics
class and instance
an architect plans a building but has no concerns for its internals or location
at this point only the structure. the blue prints produced require a builedr
to build it as described. the builder is copying the intended characteristics
from the plans.
once complete the building is now a physical instantiation of the plan. hopefully a perfect
copy and the builder moves on
the blue print and building relationship is indirect. the blue prints show  how the building is contructed
but if you want to use the building you must go to the building itself.
a class would be the blue print, To actually get/use an object you need to instantiate the class
and do something with it.
the result of object construction is called an instance, on which methods can be called and public data accessed

The object is a copy of all characteristics described by the class.

a class is instantiated into object form by a copy operation

//constructor classes
special method of the class explicitly to initialize any information(state) the instance will intended
constructors need to be called with new to let the engine know to contruct a new class instance

//mixins
//javascript doesnt have classes , they have objects that arent copied but are linkecd
//javascript object mechanism does not perfom copy behaviour when you inherit/instantiat
//instead javascript an fake the missing behaviour with mixins, explicit and implicit

//parasitic inheritance
function Vehicle() {
  this.engines = 1;
}
Vehicle.prototype.ignition = function() {
  console.log( "Turning on my engine." );
};
Vehicle.prototype.drive = function() {
  this.ignition();
  console.log( "Steering and moving forward!" );
};
function Car() {
  var car = new Vehicle();
  car.wheels = 4;
  var vehDrive = car.drive;
  car.drive = function() {
    vehDrive.call( this );
    console.log( "Rolling on all " + this.wheels + " wheels!" );
  };
  return car;
}
var myCar = new Car;
myCar.drive();
