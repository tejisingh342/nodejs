const student = function () {
  this.name = 'Tejinder Singh';
  this.age = 25;
  this.email = 'demo@gmail.com';
};

student.prototype = {
  address: 'Ropar',
  getName: function () {
    return this.name;
  },
};

var stud = new student();

console.log(stud.address);
