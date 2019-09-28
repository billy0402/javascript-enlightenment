// 建立 cody Object() 物件
var cody = new Object();

// 設定屬性
cody['living'] = true;
cody['age'] = 33;
cody['gender'] = 'male';
cody['getGender'] = function () {
    return cody.gender;
};

// 取得屬性
console.log(
    cody['living'],
    cody['age'],
    cody['gender'],
    cody['getGender']() // just slap the function invocation on the end!
);
// logs 'true 33 male male'

// 更新屬性，非常類似設定
cody['living'] = false;
cody['age'] = 99;
cody['gender'] = 'female';
cody['getGender'] = function () {
    return 'Gender = ' + cody.gender;
};

console.log(cody);