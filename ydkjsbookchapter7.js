//ydkjsbook2chapter7 polyfilling block scope
//in es6 environment
{
  let a = 2;
  console.log( a );
}
console.log( a );
//in pre es6 environment
try{throw 2}catch(a){
  console.log( a );
}
console.log( a );

//tracuer code transpiler version
{
  try{
    throw undefined;
  } catch (a) {
    a = 2;
    console.log( a );
  }
}
console.log( a );

//let block
let (a = 2) {
   console.log( a );
}
console.log( a );
