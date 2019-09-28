var CustomConstructor = function CustomConstructor() {
    return 'Wow!';
};
var instanceOfCustomObject = new CustomConstructor();

console.log(instanceOfCustomObject.constructor === CustomConstructor);
// logs true

console.log(instanceOfCustomObject.constructor);
// returns 'function() { return 'Wow!'; };'，回傳 CustomConstructor() 函式的參考