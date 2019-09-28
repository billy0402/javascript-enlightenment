// 將物件封裝，建立物件樹
var object1 = {
    object1_1: {
        object1_1_1: { foo: 'bar' },
        object1_1_2: {}
    },
    object1_2: {
        object1_2_1: {},
        object1_2_2: {}
    }
};

console.log(object1.object1_1.object1_1_1.foo);
// logs 'bar'