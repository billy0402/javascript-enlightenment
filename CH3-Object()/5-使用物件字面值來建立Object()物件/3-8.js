var cody = {
    'living': true,
    'age': 23,
    'gender': 'male',
    'getGender': function () {
        return cody.gender;
    }
};

console.log(cody);
// logs cody 物件與屬性

/*
 * 屬性指定為字串:
 * 1. 是保留的關鍵字 https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords
 * 2. 含有空格或特殊符號(除了數字.字母.錢號 $ 或底線 _ 字元之外的所有字元)
 * 3. 以數字開頭
 */