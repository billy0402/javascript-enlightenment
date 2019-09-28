var foo = { bar: 'bar' };
delete foo.bar;

console.log('bar' in foo);
// logs false，因為 foo 的 bar 已被刪除