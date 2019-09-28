var myString = 'string'
var myNumber = 10;
var myBoolean = false; // 可為 true 或 false，但它就是這個值
var myNull = null;
var myUndefined = undefined;

console.log(myString, myNumber, myBoolean, myNull, myUndefined);

/* array 或 object 等複合物件可由許多原始值組成，因而是由許多值組成的集合。 */

var myObject = {
    myString: 'string',
    myNumber: 10,
    myBoolean: false,
    myNull: null,
    myUndefined: undefined
};

console.log(myObject);

var myArray = ['string', 10, false, null, undefined];

console.log(myArray);