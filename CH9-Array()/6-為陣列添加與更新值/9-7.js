var myArray = new Array();
myArray[50] = 'blue';
myArray[50] = { 'color': 'blue' }; // 將物件類型由字串改為 Object() 物件
console.log(myArray[50]);
//logs 'Object {color="blue"}'

// 使用括號來存取陣列的索引，接著是屬性 blue
console.log(myArray[50]['color']);
//logs 'blue'

// 使用點號
console.log(myArray[50].color);
//logs 'blue'