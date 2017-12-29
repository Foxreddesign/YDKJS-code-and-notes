//Up and going book 1 chapter 1

// single line comment
/* multi
line
comment */

var amount = 99.99;

amount = amount *2;

console.log( amount );

amount = "£" + String( amount);

console.log( amount );

//example of variables
var TAX_RATE = 0.08;

var amount = 99.99;

amount = amount * 2;

amount = amount + (amount * TAX_RATE);

console.log(amount);
console.log(amount.toFixed(2));

//introduction of const as unchangeable value variables
const TAX_RATE = 0.08;

var amount = 99.99;

amount = amount * 2;

amount = amount + (amount * TAX_RATE);

console.log(amount);
console.log(amount.toFixed(2));

//general block
var amount = 99.99;

{
    amount = amount *2;
    console.log( amount );
}


//block attached to a control statement
var amount = 99.99;

if (amount > 10) {
      amount = amount *2;
      console.log( amount );
}

//if statement
var bank_balance = 302.13
var amount = 99.99;

if (amount < bank_balance) {
      console.log( "I want to buy this phone!");
}

const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

amount = amount *2;

if (amount < bank_balance) {
    console.log( "I'll take the accessory!");
    amount = amount + ACCESSORY_PRICE;
}
else {
    console.log( "No, thanks.")
}

//While loops
while (numOfCustomers > 0) {
    console.log( "How may I help you?");

    numOfCustomers = numOfCustomers - 1;
}

//do while loop
do {
  console.log( "How may I help you?");

  numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);

//counting with loops
var i = 0;

while (true) {
  if ((i <= 9) === false) {
    break;
  }

  console.log( i );
  i = i + 1;
}

//syntactic alternative loop
for (var i = 0; i <= 9; i= i + 1) {
  console.log( i );
}

//function
function printAmount () {
  console.log ( "£" + amount.toFixed(2));
}

function formatAmount () {
    return "£" + amount.toFixed( 2 );
}

var amount = 99.99;

printAmount();

amount = amount * 2;

amount = formatAmount();
console.log( amount );

//functions as logical coding for cleaner code
var TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
  amt = amt + ( amt * TAX_RATE);
  return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount ( amount );

console.log( amount.tofixed(2));

//scopes
function one () {
  var a = 1;
  console.log( a );
}
function two () {
  var a = 2;
  console.log( a );
}

one();
two();

//nested scopes
function outer (){
  var a = 1;
  function inner (){
    var b = 2;
    console.log (a+b);
  }
  inner();
  console.log ( a )
}
outer();



const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) {
  amt = amt + (amt * TAX_RATE);
  return amt;
}

//book 1 practice excercise
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function formatAmount(amount) {
  return "£" + amount.toFixed(2);
}

while (amount < bank_balance) {
  amount = amount + PHONE_PRICE;
  if (amount < SPENDING_THRESHOLD) {
      amount = amount + ACCESSORY_PRICE;
  }
}

amount = amount + calculateTax(amount);

console.log(
  "Your purchase:" + formatAmount(amount)
);

if (amount > bank_balance) {
  console.log(
    "You can't afford this purchase. :( "
  );
}
