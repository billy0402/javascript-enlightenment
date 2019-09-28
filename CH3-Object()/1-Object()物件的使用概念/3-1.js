// 建立一個沒有屬性的空物件
var cody = new Object();

// 確認 cody 是個通用的空物件
for (key in cody) {
    if (cody.hasOwnProperty(key)) {
        // 不會看到任何的 log，因為 cody 本身沒有任何屬性
        console.log(key);
    }
}