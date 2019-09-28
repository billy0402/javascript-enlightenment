var myStringVar = 'myString';
var myFunctionVar = function () { };
myString = 'myString';
myFunction = function () { };

console.log('myStringVar' in window); // logs true
console.log('myFunctionVar' in window); // logs true
console.log('myString' in window); // logs true
console.log('myFunction' in window); // logs true