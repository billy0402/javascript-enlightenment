var cody = {
    age: 23,
    gender: 'male'
};

// key 是用來表示每一個屬性名稱的變數
for (var key in cody) {
    // 跳過從原型鏈繼承來的屬性
    if (cody.hasOwnProperty(key)) {
        console.log(key);
    }
}