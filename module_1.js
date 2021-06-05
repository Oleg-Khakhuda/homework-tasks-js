// Tasks 1

// Change code below this line
const productName = "Droid"
 console.log(productName);
// 'Droid'
const pricePerItem = 2000
 console.log(pricePerItem);
// 2000


// Tasks 2

let productName = "Droid";
productName = "Repair droid";
let pricePerItem = 2000;
pricePerItem = 3500;
// Change code below this line


// Tasks 3

// Change code below this line
let topSpeed = 160;
let distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false


// Tasks 4

const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;


// Tasks 5

const productName = "Droid";
const pricePerItem = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
// Change code below this line


// Tasks 6

// Change code below this line
const orderedQuantity = 6;
const pricePerDroid = 800;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`


// Tasks 7

// Change code below this line
function sayHi() {
    // Тело функции
    console.log("Hello, this is my first function!");
  }
  
  sayHi()


// Tasks 8

// Change code below this line
function add(a, b, c) {
    console.log(`Addition result equals ${a + b + c}`);
    // Change code above this line
  }
  
  // add(15, 27, 10);
  // add(10, 20, 30);
  // add(5, 10, 15);


// Tasks 9

function add(a, b, c) {
// Change code below this line

return a + b + c;

// Change code above this line
}

add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));


// Tasks 10

function makeMessage (name, price) {
    // Change code below this line
     const message = `You picked ${name}, price per item is ${price} credits`;
    // Change code above this line
    return message;
  };
  
  // makeMessage('Radar', 6150);
  // makeMessage('Scanner', 3500);
  // makeMessage('Reactor', 8000);


// Tasks 11

function calculateTotalPrice (orderedQuantity, pricePerItem) {
// Change code below this line
const totalPrice = orderedQuantity * pricePerItem;

// Change code above this line
return totalPrice;
};

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);                    
// calculateTotalPrice(12, 70);


// Tasks 12

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
  
    // Change code above this line
    return message;
  }
  
  // makeOrderMessage(2, 100, 50);
  // makeOrderMessage(4, 300, 100);
  // makeOrderMessage(10, 70, 200);

 
  // Tasks 13

  function isAdult(age) {
    // Change code below this line
    const passed = age >= 18;
    
    // Change code above this line
    return passed;
  }
  
  // isAdult(20);
  // isAdult(14);
  // isAdult(8);
  // isAdult(37);


  // Tasks 14

  function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    // Change code below this line
    const isMatch = SAVED_PASSWORD === password;
  
    // Change code above this line
    return isMatch;
  }
  
  // isValidPassword("mangodab3st");
  // isValidPassword("kiwirul3z");
  // isValidPassword("jqueryismyjam");


// Tasks 15

  function checkAge(age) {
    let message;
  
    if (age >= 18) { // Change this line
      message = 'You are an adult';
    } else {
      message = 'You are a minor';
    }
  
    return message;
  }
  // checkAge(20);
  // checkAge(8);
  // checkAge(14);
  // checkAge(38);


  // Tasks 16

  function checkStorage(available, ordered) {
    let message;
   // Change code below this line
   if (available < ordered) {
    message = "Not enough goods in stock!"
  }
    else {
      message = "Order is processed, our manager will contact you."
  }
  // Change code above this line
  return message;
}
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);


// Tasks 17

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;


// Tasks 18

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
    let totalPrice = (pricePerDroid * orderedQuantity);
    if (customerCredits < totalPrice) {
      message = `Insufficient funds!`
    }
    else { 
      message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
    }
    // Change code above this line
    return message;
  }
  // makeTransaction(3000, 5, 23000);
  // makeTransaction(1000, 3, 15000);
  // makeTransaction(5000, 10, 8000);
  // makeTransaction(2000, 8, 10000);
  // makeTransaction(500, 10, 5000);


// Tasks 19

  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
  
    if (password === null) { // Change this line
      message =  'Canceled by user!';
    } else if (password === ADMIN_PASSWORD) { // Change this line
      message = 'Welcome!';
    } else {
      message = 'Access denied, wrong password!';
    }
  
    return message;
  }
  // checkPassword("mangohackzor");
  // checkPassword(null);
  // checkPassword("polyhax");
  // checkPassword("jqueryismyjam");


  // Tasks 20

  function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  if (ordered === 0)
    message = "There are no products in the order!"
    else if (ordered > available) {
     message = "Your order is too large, there are not enough items in stock!"
    }
    else {
    message = "The order is accepted, our manager will contact you"
    }
    // Change code above this line
    return message;
  }
  // checkStorage(100, 50);
  // checkStorage(100, 130);
  // checkStorage(70, 0);
  // checkStorage(200, 20);
  // checkStorage(200, 250);
  // checkStorage(150, 0);


  // Tasks 21

  function isNumberInRange(start, end, number) {
    const isInRange = (number >= start && number <= end); // Change this line
  
    return isInRange;
  }
  // isNumberInRange(10, 30, 17);
  // isNumberInRange(10, 30, 5);
  // isNumberInRange(20, 50, 24);
  // isNumberInRange(20, 50, 76);


  // Tasks 22

  function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === "pro" || subType === "vip"; // Change this line
  
    return canAccessContent;
  }
  // checkIfCanAccessContent("pro");
  // checkIfCanAccessContent("starter");
  // checkIfCanAccessContent("vip");
  // checkIfCanAccessContent("free");


// Tasks 23

  function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Change this line
  
    return isNotInRange;
  }
  // isNumberNotInRange(10, 30, 17);
  // isNumberNotInRange(10, 30, 5);
  // isNumberNotInRange(20, 50, 24);
  // isNumberNotInRange(20, 50, 76);


// Tasks 24
  
  function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT
  } else if (totalSpent >= 20000 && totalSpent <= 50000) {
    discount = SILVER_DISCOUNT
  } else if (totalSpent >= 5000 && totalSpent <= 20000) {
    discount = BRONZE_DISCOUNT
  } else {
    discount = BASE_DISCOUNT
  } 
    // Change code above this line
    return discount;
  }
    // getDiscount(137000);
    // getDiscount(46900);
    // getDiscount(8250);
    // getDiscount(1300);
    // getDiscount(5000);
    // getDiscount(20000);
    // getDiscount(50000);


  // Tasks 25

    function checkStorage(available, ordered) {
      let message;
      // Change code below this line
    
      message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
      // Change code above this line
      return message;
    }
    // checkStorage(100, 50);
    // checkStorage(100, 130);
    // checkStorage(200, 20);
    // checkStorage(200, 150);
    // checkStorage(150, 180);


    // Tasks 26

    function checkPassword(password) {
      const ADMIN_PASSWORD = "jqueryismyjam";
      let message;
      // Change code below this line
    message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
      // Change code above this line
      return message;
    }
    // checkPassword("jqueryismyjam");
    // checkPassword("angul4r1sl1f3");
    // checkPassword("r3actsux");


  // Tasks 27

    function getSubscriptionPrice(type) {
      let price;
      // Change code below this line
    
     switch (type) { // Change this line
       case "starter": // Change this line
          price = 0; // Change this line
          break;
    
       case "professional": // Change this line
          price = 20; // Change this line
          break;
    
       case "organization": // Change this line
          price = 50; // Change this line
          break;
      }
    
      // Change code above this line
      return price;
    }


    // Tasks 28

    function checkPassword(password) {
      const ADMIN_PASSWORD = "jqueryismyjam";
      let message;
      // Change code below this line
      switch (password) {
          case null:
        message = "Canceled by user!";
            break;
       case ADMIN_PASSWORD:
        message = "Welcome!";
            break;
          default:
        message = "Access denied, wrong password!";
      }
    
      // Change code above this line
      return message;
    }
    // checkPassword("mangohackzor");
    // checkPassword(null);
    // checkPassword("polyhax");
    // checkPassword("jqueryismyjam");   


    // Tasks 29

    function getShippingCost(country) {
      let message;
      // Change code below this line
    switch (country) {
      case "China":
      price = 100;
        message = "Shipping to China will cost 100 credits"
      break;
      
      case "Chile":
      price = 250;
        message = "Shipping to Chile will cost 250 credits"
      break;
      
      case "Australia":
      price = 170;
        message = "Shipping to Australia will cost 170 credits"
      break;
      
      case "Jamaica":
      price = 120;
        message = "Shipping to Jamaica will cost 120 credits"
      break;
      
      default:
      message = "Sorry, there is no delivery to your country"
    }
      // Change code above this line
      return message;
    }
    // getShippingCost("Australia");
    // getShippingCost("Germany");
    // getShippingCost("Chile");
    // getShippingCost("Jamaica");
    // getShippingCost("Sweden");


  // Tasks 30

    function getNameLength(name) {
      const message = `Name ${name} is ${name.length} characters long`; // Change this line
    
      return message;
    }
    // getNameLength("Poly");
    // getNameLength("Harambe");
    // getNameLength("Billy");
    // getNameLength("Joe");


  // Tasks 31

    const courseTopic = "JavaScript essentials";
    // Change code below this line
    
    const courseTopicLength = courseTopic.length;
    const firstElement = courseTopic[0];
    const lastElement = courseTopic[courseTopic.length - 1];
    
    // Change code above this line


  // Tasks 32

    function getSubstring(string, length) {
      const substring = string.slice(0, length); // Change this line
    
      return substring;
    }
    // getSubstring("Hello world", 3);
    // getSubstring("Hello world", 6);
    // getSubstring("Hello world", 8);
    // getSubstring("Hello world", 11);
    // getSubstring("Hello world", 0);
    

  // Tasks 33

    function formatMessage(message, maxLength) {
      let result;
      // Change code below this line
     if (message.length <= maxLength) {
    result = message.slice(0, message.length);
    } else if (message.length >= maxLength) {
      result = message.slice(0, maxLength) + "...";
    }
      /// Change code above this line
       return result;
      
    }
    // formatMessage("Curabitur ligula sapien", 16);
    // formatMessage("Curabitur ligula sapien", 23);
    // formatMessage("Vestibulum facilisis purus nec", 20);
    // formatMessage("Vestibulum facilisis purus nec", 30);
    // formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
    // formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);


    // Tasks 34

    function normalizeInput(input) {
      const normalizedInput = input.toLowerCase(); // Change this line
    
      return normalizedInput;
    }
    // normalizeInput("Hello world");
    // normalizeInput("This ISN'T SpaM");
    // normalizeInput("Big SALE");


  // Tasks 35

    function checkForName(fullName, name) {
      const result = fullName.includes(name); // Change this line
       return result;
     }
    //  checkForName("Egor Kolbasov", "Egor");
    //  checkForName("Egor Kolbasov", "egor");
    //  checkForName("Egor Kolbasov", "egOr");
    //  checkForName("Egor Kolbasov", "Zhenya");
    //  checkForName("Vadim Nekrasov", "Vadim");
    //  checkForName("Vadim Nekrasov", "vadim");
    //  checkForName("Vadim Nekrasov", "Dima");


  // Tasks 36

     function checkForSpam(message) {
      let result;
      // Change code below this line
     result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale") ? true : false;
      // Change code above this line
      return result;
    }
    // checkForSpam("Latest technology news");
    // checkForSpam("JavaScript weekly newsletter");
    // checkForSpam("Get best sale offers now!");
    // checkForSpam("Amazing SalE, only tonight!");
    // checkForSpam("Trust me, this is not a spam message");
    // checkForSpam("Get rid of sPaM emails. Our book in on sale!");
    // checkForSpam("[SPAM] How to earn fast money?");