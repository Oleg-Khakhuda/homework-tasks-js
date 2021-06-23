// const fn = function () {
//   console.log("result");
// };
// const fnA = fn();
// console.log(fnA);

// // Почему функция fn сама исполняется(в консоли написана лишь строка, где return console.log('result');
// // и нет места вызова fn), и почему console.log(fnA) - undefind

// 1) Написать ф - ю конструктор которая создает обект person с такими ключами
// const person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить строку Привет {имя} мне {возраст} лет. Мне нравится {интерес}
//   },
//   greeting() {
//     // Привет, я {имя}
//   },
// };

// 2) Вынести методы из обекта person в __proto__

// 3) Создать конструктор Teacher который наследует свойства Person и добавляет в обект поле subject
// и метод greeting

// 4) Создать конструктор Student который наследует свойства Person и изменяет метод greeting

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hi = function () {
//   console.log("Hello");
// };

// const user = new Person("Bob", 25);

// console.log(`user`, user);
// user.hi();

// function Student(name, age) {
//   Person.call(this, name, age);
// }
// // Student.prototype = Object.create(Person.prototype);
// // Student.prototype.constructor = Student;

// const st = new Student("Jane", 23);

// console.log(`st`, st);
// st.hi();

// 5) Напиши конструктор Notes который управляет коллекцией заметок в свойстве items.
// Заметка это объект со свойствами text и priority.
// Добавь конструктору статическое свойство Priority, в котором будет храниться объект с приоритетами.
// {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high'
//   }

// const myNotes = new Notes([]); 

// myNotes.addNote({  text: 'Моя первая заметка', priority: Notes.Priority.LOW })
// console.log(myNotes.items); 

// myNotes.addNote({ text: 'Моя вторая заметка', priority: Notes.Priority.NORMAL })
// console.log(myNotes.items); 

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items); 

// myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items); 


function Person ({ firstName, lastName, age, gender, interest }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
  }
  
  Person.prototype.greeting = function () {
    console.log(`Привет я ${this.firstName} ${this.lastName}`);
  };
  
  Person.prototype.bio = function () {
    console.log(`Привет ${this.firstName} мне ${this.age} лет. Мне нравится ${this.interest}`);
  };
  
  const user = new Person({
    firstName: "Bob",
    lastName: "Dou",
    age: 21,
    gender: "male",
    interest: "football",
  });

  user.greeting()
  user.bio()
  console.log(user);


  const user2 = new Person({
    firstName: "John",
    lastName: "Dou",
    age: 35,
    gender: "male",
    interest: "hokey",
})

user2.greeting()
  user2.bio()
console.log(user2);


function Teacher(subject) {
  Person.call(this, subject);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

const teacher1 = new Teacher({
  firstName: "Jane",
  lastName: "Dou",
  age: 25,
  gender: "male",
  interest: "tennis",
  subject: "Math",
});

teacher1.greeting();
teacher1.bio();
console.log(teacher1);


function Student() {
  Person.call(this, ...arguments);
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function () {
  console.log("I am student method");
};

const student1 = new Student({
  firstName: "Oleg",
  lastName: "Khakhuda",
  age: 31,
  gender: "male",
  interest: "drive",
});

student1.greeting();
student1.bio();
console.log(student1);