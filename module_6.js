// Task 1

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки
    orderedItems.forEach(function(orderItem) {
      totalPrice += orderItem;
      })
      // orderedItems.forEach((orderItem) => {totalPrice += orderItem});
  // Пиши код выше этой строки
  return totalPrice;
    }

calculateTotalPrice([12, 85, 37, 4]) возвращает 138


// Task 2

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки
numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  })

  // Пиши код выше этой строки
  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]


// Task 3

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки

  firstArray.forEach((array) => {
    if (secondArray.includes(array)) {
      commonElements.push(array);
    }
  })

  return commonElements;
  // Пиши код выше этой строки
}

getCommonElements([1, 2, 3], [2, 4]) возвращает [2]


// Task 4

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
}

calculateTotalPrice(5, 100) возвращает 500


// Task 5 неявный возврат

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

calculateTotalPrice(5, 100) возвращает 500


// Task 6

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}

calculateTotalPrice([12, 85, 37, 4]) возвращает 138


// Task 7

const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]


// Task 8

// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return commonElements;
}

getCommonElements([1, 2, 3], [2, 4]) возвращает [2]


// Task 9

function changeEven(numbers, value) {
  // Пиши код ниже этой строки
addChangeEven = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      addChangeEven.push(number + value);
    } else if (number % 2 !== 0) {
      addChangeEven.push(number)
    }
  })
return addChangeEven
   // Пиши код выше этой строки
}

hangeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5]



// Task 10  map()

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length);

Значение переменной planetsLengths это массив [5, 4, 6, 6]


// Task 11

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const titles = books.map(book => book.title);

Значение переменной titles это массив ['Последнее королевство', 'На берегу спокойных вод', 'Сон смешного человека', 'Красна как кровь', 'Враг Божий']



// Task 12   flatMap()

const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика']
  }
];
// Пиши код ниже этой строки

const genres = books.flatMap(book => book.genres);

Значение переменной genres это массив [ 'приключения', 'историческое', 'фантастика', 'ужасы', 'мистика' ]



// Task 13

const getUserNames = users => {
  return users.map(user => user.name)  
   };


// Task 14

const getUserEmails = users => {
  return users.map(user => user.email)  
};


// Task 15

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

Значение переменной evenNumbers это массив [24, 82, 36, 18, 52]
Значение переменной oddNumbers это массив [17, 61, 47, 73]


// Task 16

const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения']
  }
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genres, index, books) => books.indexOf(genres) === index);


// Task 17

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);


// Task 18

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color)
 };


// Task 19

 const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age > minAge && user.age < maxAge)
 };


// Task 20

 const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName)) 
};


// Task 21

const getFriends = (users) => {
  const allFriends = users.flatMap((user) => user.friends)  //массив друзей всех пользователей
  const uniqueFriends = allFriends.filter((friends, index, users) => users.indexOf(friends) === index)  //массив всех неповторяющихся друзей
  return uniqueFriends
};


// Task 22  

const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive)  //возвращает массив активных пользователей
};


// Task 23

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive)  //возвращает массив не активных пользователей
};


// Если метод filter(callack) используется для поиска всех элементов удовлетворяющим условию, 
// то метод find(callback) позволяет найти и вернуть первый подходящий элемент, 
// после чего перебор массива прекращается. То есть он ищет до первого совпадения.

// Task 24

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);


// Task 25

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email) 
};


// Task 26   every()

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(arr => arr % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(arr => arr % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(arr => arr % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(arr => arr % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(arr => arr % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(arr => arr % 2 === 0);


// Task 27

const isEveryUserActive = (users) => {
  return users.every(user => user.isActive) 
};


// Task 28

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(arr => arr % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(arr => arr % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(arr => arr % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(arr => arr % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(arr => arr % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(arr => arr % 2 !== 0);


// Task 29  Задача. Есть ли активные пользователи?

const isAnyUserActive = users => {
  return users.some(user => user.isActive) 
};


// Task 30 reduce()

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((acc, playtime) => acc + playtime, 0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;


// Task 31

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки
 const totalAveragePlaytimePerGame = players.reduce((total, { playtime, gamesPlayed }) => 
 total + playtime / gamesPlayed, 0);

 totalAveragePlaytimePerGame это число 1023


// Task 32  // считает сумму всех средств 

 const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0) 
};


// Task 33  // считает общее количество друзей

const getTotalFriendCount = users => {
  return users.reduce((total, user) => total + user.friends.length, 0) 
};


// Task 34  // sort()

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();


// Task 35 

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a,b) => a - b);  // сортировка по возростанию

const descendingReleaseDates = [...releaseDates].sort((a,b) => b - a);  // сортировка по убыванию


// Task 36

const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский',
  'Говард Лавкрафт'
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));  // сортировка в алфавитном порядке по возростанию

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));  // сортировка в алфавитном порядке по убыванию


// Task 37   Сортировка объектов

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author));

const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author));

const sortedByAscendingRating = [...books].sort((firstRating, secondRating) => firstRating.rating - secondRating.rating);

const sortedByDescentingRating = [...books].sort((firstRating, secondRating) => secondRating.rating - firstRating.rating);


// Task 38

const sortByAscendingBalance = users => {
  return [...users].sort((a, b) => a.balance - b.balance) 
};


// Task 39  Сортирует по убыванию количества друзей объектов

const sortByDescendingFriendCount = users => {
  return [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length)
  };


// Task 40   сортировка в алфавитном порядке по возростанию объектов

const sortByName = users => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name)) 
};


// Task 41

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

  const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .sort((a, b) => a.localeCompare(b));


// Task 42  Имена отсортированые по возрастанию количества друзей

const getNamesSortedByFriendCount = users => {
  return [...users].sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length).map(user => user.name)
};


// Task 43    Массив уникальных имён друзей отсортированный по алфавиту

const getSortedFriends = users => {
  return users.flatMap((user) => user.friends).filter((friends, index, users) => users.indexOf(friends) === index).sort((a, b) => a.localeCompare(b))
}


// Task 44   общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender

const getTotalBalanceByGender = (users, gender) => {
  return [...users].filter((user) => user.gender === gender).reduce((total, user) => total + user.balance, 0) 
};