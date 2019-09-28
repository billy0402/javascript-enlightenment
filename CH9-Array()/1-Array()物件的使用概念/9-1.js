var myArray = ['blue', 'green', 'orange', 'red'];

console.log(myArray[0]); 
// logs blue，使用 0 索引來存取 myArray 裡面的字串

/* vs */

// 亦稱為關聯陣列/hash，在 JavaScript 中，它是物件
var myObject = {
    'blue': 'blue',
    'green': 'green',
    'orange': 'orange',
    'red': 'red'
};

console.log(myObject['blue']); 
// logs blue