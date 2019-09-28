/* 0 -0 null false NaN undefined '' >> false */

// 以下都會回傳 false 布林值
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));

// 以下都會回傳 true 布林值
console.log(Boolean(1789));
console.log(Boolean('false')); // 字串的 'false'，不是布林的 false
console.log(Boolean(Math));
console.log(Boolean(Array()));