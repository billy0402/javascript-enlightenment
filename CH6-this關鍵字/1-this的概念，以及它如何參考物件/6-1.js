var cody = {
    living: true,
    age: 23,
    gender: 'male',
    getGender: function () {
        return cody.gender;
    }
};

console.log(cody.getGender());
// logs 'male'