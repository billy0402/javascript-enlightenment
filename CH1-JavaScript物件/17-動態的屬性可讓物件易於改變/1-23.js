// 在內建的字串建構式 Funtion() 中加入 augmentedProperties 屬性
String.augmentedProperties = [];

// 如果原型沒有 trimIT() 的話，加入它
if (!String.prototype.trimIT) {
    String.prototype.trimIT = function () {
        return this.replace(/^\s+|\s+$/g, '');
    }

    // 在 augmentedProperties 陣列中加入 trimIT 字串
    String.augmentedProperties.push('trimIT');
}

var myString = '  trim me  ';

console.log(myString.trimIT());
// 呼叫自訂的 trimIT 字串方法，logs 'trim me'

console.log(String.augmentedProperties.join());
// logs 'trimIT'