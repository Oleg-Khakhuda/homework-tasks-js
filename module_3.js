// Tasks 1

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],  
    };


// Tasks 2

const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Spacious apartment in the city center',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    
        owner: {
        name: "Henry",
        phone: "982-126-1588",
            email: "henry.carter@aptmail.com",
    },
    };


// Tasks 3

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    };
    
    // Change code below this line
    const aptRating = apartment.rating;
    const aptDescr = apartment.descr;
    const aptPrice = apartment.price;
    const aptTags = apartment.tags;
    // Change code above this line


// Tasks 4

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    },
    };
    
    // Change code below this line
    const ownerName = apartment.owner.name;
    const ownerPhone = apartment.owner.phone;
    const ownerEmail = apartment.owner.email;
    const numberOfTags = apartment.tags.length;
    const firstTag = apartment.tags[0];
    const lastTag = apartment.tags[2];
    // Change code above this line


// Tasks 5

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    };
    
    // Change code below this line
    const aptRating = apartment["rating"];
    const aptDescr = apartment["descr"];
    const aptPrice = apartment["price"];
    const aptTags = apartment["tags"];
    // Change code above this line


// Tasks 6

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    },
    };
    apartment.price = 5000;
    apartment.rating = 4.7;
    apartment.owner.name = "Henry Sibola";
    apartment.tags.push("trusted");
    // Change code below this line


// Tasks 7

    const apartment = {
        imgUrl: "https://via.placeholder.com/640x480",
        descr: "Spacious apartment in the city center",
        rating: 4.7,
        price: 5000,
        tags: ["premium", "promoted", "top", "trusted"],
        owner: {
          name: "Henry Sibola",
          phone: "982-126-1588",
          email: "henry.carter@aptmail.com",
        },
      };
      apartment.area = 60;
      apartment.rooms = 3;
      apartment.location = {
      country: "Jamaica",
      city: "Kingston", 
      };
      // Change code below this line


// Tasks 8

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Change code below this line
name,
price,
image,
tags  
  // Change code above this line
};


// Tasks 9

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
[emailInputName]: "henry.carter@aptmail.com",  
[passwordInputName]: "jqueryismyjam"  
  
  // Change code above this line
};


// Tasks 10

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for(const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}


// Tasks 11

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
};
  // Change code above this line
}


// Tasks 12

function countProps(object) {
  let propCount = 0;
  // Change code below this line
let arr = [];
  const keys = Object.keys(object);
   for (key of keys) {
     arr.push(key);
     propCount = arr.length;
   }
  // Change code above this line
  return propCount;
}


// Tasks 13

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys) {
  values.push(apartment[key]);
}


// Tasks 14

function countProps(object) {
  // Change code below this line
  let propCount = 0;
	const keys = Object.keys(object);
  for (const key of keys) {   
      propCount += 1;
  }

  return propCount;
  // Change code above this line
}


// Tasks 15

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);


// Tasks 16

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
for (const salary of Object.values(salaries)) {
  totalSalary += salary
}
  // Change code above this line
  return totalSalary;
}


// Tasks 17

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}


// Tasks 18

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (product of products) {
    if (product.name === productName) {
    return product.price;
    }
  }
  return null; 
  // Change code above this line
}


// Tasks 19

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let property = [];
  for (product of products) {
  for (key in product) {
    if (key === propName) {
      property.push(product[key])
    }
  }
    
  }
  return property;
  return null;
  // Change code above this line
}


// Tasks 20

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
let total = 0;
  for (product of products) {
    for (key in product) {
    if (productName === product.name) 
   total = product.price * product.quantity 
    }
  }
return total;
  // Пиши код выше этой строки
}


// Деструктуризация объектов!


// Tasks 21

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday, today, tomorrow } = highTemperatures;
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
const meanTemperature = (yesterday + today + tomorrow) / 3;


// Tasks 22 Присвоение

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;

const meanTemperature = (yesterday + today + tomorrow) / 3;


// Tasks 23  Изменение имени переменной

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// Tasks 24  Деструктуризация в циклах

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }


// Tasks 25

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
    icon: "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
  },
};
// Change code below this line

const { 
  today: { high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, 
  tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
} = forecast;


// Tasks 26

// Change code below this line
function calculateMeanTemperature(forecast) {
 
  const { today: { low: todayLow, high: todayHigh },
        tomorrow: { low: tomorrowLow, high: tomorrowHigh}} = forecast
    // Change code above this line
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  }


// Tasks 27   Операция spread

  const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores); // 93
const worstScore = Math.min(...scores); // 17


// Tasks 28

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores); // 97
const worstScore = Math.min(...allScores); // 14


// Tasks 29

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings, theme: "light", public: false, withPassword: true, minNumberOfQuestions: 10, timePerQuestion: 30 };


// Tasks 30

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
	const task = {completed, category, priority};
  	return editedData = {...task, ...data}
  // Change code above this line
}


// Tasks 31

// Change code below this line
function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
  // Change code above this line
}


// Tasks 32

// Change code below this line
function addOverNum(...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > args[0])
    total += arg;
  }

  return total;
  // Change code above this line
}


// Tasks 33

// Change code below this line
function findMatches(arreys, ...arguments) {
  const matches = []; // Don't change this line
    for (argument of arguments) {
      if (arreys.includes(argument))
        matches.push(argument)
    }
    
  // Change code above this line
  return matches;
}


// Tasks 34

const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
   removeBook(bookName) {
  return `Deleting book ${bookName}`
  },
  updateBook(oldName, newName) {
  return `Updating book ${oldName} to ${newName}`
  }
  // Change code above this line
};


// Tasks 35

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
	const bookIndex = this.books.indexOf(oldName);
     this.books.splice(bookIndex, 1, newName)
    // Change code above this line
  },
};


// Tasks 36

const atTheOldToad = {
  // Change code below this line
 potions: [] 
  // Change code above this line
};


// Tasks 37

const atTheOldToad = {
  // Change code below this line
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
  return this.potions
  }
  // Change code above this line
};


// Tasks 38

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    // Change code below this line
    return this.potions.push(potionName)
    // Change code above this line
  },
};


// Tasks 39

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    const potionsIndex = this.potions.indexOf(potionName)
     return this.potions.splice(potionsIndex, 1);
    // Change code above this line
  },
};


// Tasks 40

const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
    const potionsIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionsIndex, 1, newName)
    // Change code above this line
  },
};


// Tasks 41

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for(let i=0; i < this.potions.length; i += 1) {
    	if(this.potions[i].name === potionName) {
        	this.potions.splice(i, 1)
        }
    }
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
    if (this.potions[i].name === oldName) {
    this.potions[i].name = newName;
      return this.potions;
    }
    }
  
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};