var foo = false;
var bar = false;

var myFunction = function (foo, bar) {
    arguments[0] = true;
    bar = true;
    console.log(arguments[0], bar);
    // logs true true
}

myFunction();