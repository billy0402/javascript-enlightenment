var myArray = ['blue', 'green', 'orange', 'red'];

var myArrayLength = myArray.length; // 快取陣列長度，來避免沒必要的查詢
var counter = 0; // 設定計數器

// 若計數小於陣列長度，則執行
while (counter < myArrayLength) {
    console.log(myArray[counter]);
    // logs 'blue', 'green', 'orange', 'red'
    counter++; // 計數器加 1
}