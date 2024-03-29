// Task 1

const parent = {
    name: 'Stacey',
    surname: 'Moore',
    age: 54,
    heritage: 'Irish'
  };
  // Пиши код ниже этой строки
  
  const child = Object.create(parent);
  
  // Пиши код выше этой строки
  child.name = 'Jason';
  child.age = 27;


// Task 2

  const ancestor = {
    name: 'Paul',
    age: 83,
    surname: 'Dawson',
    heritage: 'Irish'
  };
  // Пиши код ниже этой строки
  
  const parent = Object.create(ancestor);
  parent.name = 'Stacey';
  parent.surname = 'Moore';
  parent.age = 54;
  
  const child = Object.create(parent);
  child.name = 'Jason';
  child.age = 27;
  
  // Пиши код выше этой строки


// Task 3

  function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  
  const audi = new Car('Audi', 'Q3', 36000);
  const bmw = new Car('BMW', 'X5', 58900);
  const nissan = new Car('Nissan', 'Murano', 31700);


// Task 4

  function Car({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  
    const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
    const bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
    const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });


// Task 5

    function Car({ brand, model, price }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
      }
      
      Car.prototype.getPrice = function() {
      return this.price;
      }
      
      Car.prototype.changePrice = function(newPrice) {
      this.price = newPrice;
      }


// Task 6

      function Storage(items) {
        this.items = items;
        }
          Storage.prototype.getItems = function() {
          return this.items;
      }
        Storage.prototype.addItem = function(newItem) {
        this.items.push(newItem)
        }
        Storage.prototype.removeItem = function(item) {
        for(let i = 0; i < this.items.length; i += 1) {
              if(this.items[i] === item) {
                  this.items.splice(i, 1)
              }
        }
        }
      
      // Пиши код выше этой строки
      const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
      console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
      storage.addItem('Дроид');
      console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
      storage.removeItem('Пролонгер');
      console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// Task 7

    function StringBuilder(baseValue, value) {
        this.baseValue = baseValue;
        this.value = value;
    }

        StringBuilder.prototype.getValue = function() {
            return this.baseValue;
    }
    
        StringBuilder.prototype.padEnd = function(str) { 
            return this.baseValue += str;
        
    }
        StringBuilder.prototype.padStart = function(str) {
        
            return this.baseValue = str + this.baseValue;
    
    }
        StringBuilder.prototype.padBoth = function(str) {
            return this.baseValue = str + this.baseValue + str;
    }

    // Пиши код выше этой строки
    const builder = new StringBuilder('.');
    console.log(builder.getValue()); // '.'
    builder.padStart('^');
    console.log(builder.getValue()); // '^.'
    builder.padEnd('^');
    console.log(builder.getValue()); // '^.^'
    builder.padBoth('=');
    console.log(builder.getValue()); // '=^.^='


// Task 8

    class Car {
    }


// Task 9

    class Car {
        brand;
        model;
        price;
        
    constructor({ brand, model, price }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        }
    }


// Task 10

    class Car {
        constructor({ brand, model, price }) {
          this.brand = brand;
          this.model = model;
          this.price = price;
        }
        getPrice() {
        return this.price;
        }
        changePrice(newPrice) {
        this.price = newPrice;
        }
      }


// Task 11

    class Car {
    #brand;
    constructor({ brand, model, price }) {
        this.#brand = brand;
        this.model = model;
        this.price = price;
    }
    getBrand() {
        return this.#brand;
    }
    changeBrand(newBrand) {
    this.#brand = newBrand;
    }
    }   


// Task 12

    class Storage {
    #items;
      constructor (items) {
      this.#items = items;
      }
    
    getItems() {
      return this.#items;
    };
    
    addItem(newItem) {
      this.#items.push(newItem);
    };
    
    removeItem(item) {
      const itemIndex = this.#items.indexOf(item);
      this.#items.splice(itemIndex, 1);
    };
    };

    // Пиши код выше этой строки
    const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
    console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
    storage.addItem("Дроид");
    console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
    storage.removeItem("Пролонгер");
    console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// Task 13

    class StringBuilder {
        #value;
        constructor (baseValue, value) {
        this.baseValue = baseValue;
        this.#value = baseValue;
    }
    
    getValue() {
        console.log(this.#value);
        return this.#value;
    };
    
    padEnd(str) {
        this.#value += str;
    };
    
    padStart(str) {
        this.#value = str + this.#value;
    };
    
    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    };
    };
    
    // Пиши код выше этой строки
    const builder = new StringBuilder('.');
    console.log(builder.getValue()); // '.'
    builder.padStart('^');
    console.log(builder.getValue()); // '^.'
    builder.padEnd('^');
    console.log(builder.getValue()); // '^.^'
    builder.padBoth('=');
    console.log(builder.getValue()); // '=^.^='



// Task 14

    class Car {
        #model;
        #price;
        #brand;
      
        constructor({ brand, model, price }) {
          this.#brand = brand;
          this.#model = model;
          this.#price = price;
        }
      
        get brand() {
          return this.#brand;
        }
      
        set brand(newBrand) {
          this.#brand = newBrand;
        }
      
        get model() {
          return this.#model;
        }
      
        set model(newModel) {
          this.#model = newModel;
        }
      
        get price() {
          return this.#price;
        }
      
        set price(newPrice) {
          this.#price = newPrice;
        }
      }
      

// Task 15

      class Car {
        // Пиши код ниже этой строки
        static MAX_PRICE = 50000;
        #price;
      
        constructor({ price }) {
          this.#price = price;
          
        }
      
        get price() {
          return this.#price;
        }
      
        set price(newPrice) {
          
          if (Car.MAX_PRICE <= newPrice) {
           return;
          }
         
          this.#price = newPrice;
        }
        // Пиши код выше этой строки
      }
      
      const audi = new Car({price: 35000});
      console.log(audi.price); // 35000
      
      audi.price = 49000;
      console.log(audi.price); // 49000
      
      audi.price = 51000;
      console.log(audi.price); // 49000



// Task 16

    class Car {
    static #MAX_PRICE = 50000;
    // Пиши код ниже этой строки
        static checkPrice(price) {
        
        if (price >= Car.#MAX_PRICE) {
        return 'Внимание! Цена превышает допустимую.'
        }
        return 'Всё хорошо, цена в порядке.'
        }
    // Пиши код выше этой строки
    constructor({ price }) {
        this.price = price;
    }
    }
    
    const audi = new Car({ price: 36000 });
    const bmw = new Car({ price: 64000 });
    
    console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
    console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


// Task 17

    class User {
        email;
      
        constructor(email) {
          this.email = email;
        }
      
        get email() {
          return this.email;
        }
      
        set email(newEmail) {
          this.email = newEmail;
        }
      }
      // Пиши код ниже этой строки
      class Admin extends User {
      static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' }
      }


// Task 18

    class User {
    email;
    
    constructor(email) {
        this.email = email;
    }
    
    get email() {
        return this.email;
    }
    
    set email(newEmail) {
        this.email = newEmail;
    }
    }
    
    class Admin extends User {
    // Пиши код ниже этой строки
    accessLevel = 0;
        constructor ({ email, accessLevel }) {
        super(email);
        this.accessLevel = accessLevel;
        }
    static AccessLevel = {
        BASIC: 'basic',
        SUPERUSER: 'superuser'
    };
    
    // Пиши код выше этой строки
    }
    
    const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER
    });
    
    console.log(mango.email); // mango@mail.com
    console.log(mango.accessLevel); // superuser


// Task 19

    class User {
        email;
      
        constructor(email) {
          this.email = email;
        }
      
        get email() {
          return this.email;
        }
      
        set email(newEmail) {
          this.email = newEmail;
        }
      }
      class Admin extends User {
        // Пиши код ниже этой строки
          blacklistedEmails = [];
        blacklist(email) {
        return this.blacklistedEmails.push(email);
        }
          isBlacklisted(email) {
         return this.blacklistedEmails.includes(email); 
          
        }
        static AccessLevel = {
          BASIC: 'basic',
          SUPERUSER: 'superuser'
        };
      
        accessLevel;
      
        constructor({ email, accessLevel }) {
          super(email);
          this.accessLevel = accessLevel;
        }
      
        // Пиши код выше этой строки
      }
      
      const mango = new Admin({
        email: 'mango@mail.com',
        accessLevel: Admin.AccessLevel.SUPERUSER
      });
      
      console.log(mango.email); // mango@mail.com
      console.log(mango.accessLevel); // superuser
      mango.blacklist('poly@mail.com');
      console.log(mango.blacklistedEmails); // 'poly@mail.com'
      console.log(mango.isBlacklisted('mango@mail.com')); //  false
      console.log(mango.isBlacklisted('poly@mail.com')); // true 




//Модуль 5. Занятие 9. Прототипное наследование


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