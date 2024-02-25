// const user = {
//   name: 'Ahmed',
//   age: 27,
//   sayHi() {
//     console.log(`Hi, my name is ${this.name}`);
//   },
//   sayBye() {
//     console.log(`Bye, my name is ${this.name}`);
//   },
// };

// function user(name: string, age: number) {
//   return {
//     name: name,
//     age: age,
//     sayHi() {
//       console.log(`Hi, my name is ${this.name}`);
//     },
//     sayBye() {
//       console.log(`Bye, my name is ${this.name}`);
//     },
//   };
// }

// const ahmed = user('Ahmed', 27);
// const momen = user('Momen', 30);

// console.log(ahmed);
// console.log(momen);

// console.log(ahmed.sayHi === momen.sayHi);

// --------------------------------------------------

// needed for typescript
declare class User {
  constructor(name: string, age: number);
  name: string;
  age: number;
  sayHi(): void;
  sayBye(): void;
}

//"noImplicitThis": false
// this: User as first parameter to change this type context
function User(this: User, name: string, age: number) {
  this.name = name;
  this.age = age;
  // this.sayHi = function () {
  //   console.log(`Hi, my name is ${this.name}`);
  // };
  // this.sayBye = function () {
  //   console.log(`Bye, my name is ${this.name}`);
  // };
}

User.prototype.sayHi = function () {
  console.log(`Hi, my name is ${this.name}`);
};

User.prototype.sayBye = function () {
  console.log(`Bye, my name is ${this.name}`);
};

const ahmed = new User('Ahmed', 27);
const momen = new User('Momen', 27);
console.log(ahmed.sayHi === momen.sayHi);
console.log(ahmed);
