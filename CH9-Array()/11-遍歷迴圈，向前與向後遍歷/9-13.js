var myArray = ['blue', 'green', 'orange', 'red'];

var myArrayLength = myArray.length;

// 如果 length 不等於 0，執行遍歷並減 1
while (myArrayLength--) {
    console.log(myArray[myArrayLength]);
    // logs 'red', 'orange', 'green', 'blue'
}