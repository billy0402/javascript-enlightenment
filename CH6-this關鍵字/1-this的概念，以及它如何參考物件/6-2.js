var cody = {
    living: true,
    age: 23,
    gender: 'male',
    getGender: function () {
        return this.gender;
    }
};

console.log(cody.getGender());
// logs 'male'