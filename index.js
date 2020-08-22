const users = {
  name: 'Tejinder Singh',
  age: 25,
  email_id: 'tejisingh342@gmail.com',
};

users.lastname = 'singh'; //you can change the value of object constant but not variable.
users.lastname = 'Singh';

console.log(users);

let person = (a, b) => {
  console.log(`Multiplication of ${a} and ${b} is ${a * b}`);
};

person(3, 4);

module.exports.us = users;
