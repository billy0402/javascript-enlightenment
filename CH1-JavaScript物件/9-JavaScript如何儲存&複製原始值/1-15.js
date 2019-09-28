var myString = 'foo'; // 建立一個原始的字串物件
var myStringCopy = myString; // 將它的值複製到一個新的變數

var myString = null; // 處理 myString 變數的值

/* 
 * myString 的原始值已被複製到 myStringCopy。
 * 我們可以更新 myString 的值，並檢查 myStringCopy 的值來確認這一點。
 */

console.log(myString, myStringCopy);
// logs 'null foo'