// Задача

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value, який точно є числом.
// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// Рішення:

// function changeEven(numbers, value) {
//     const newNumbers = [];
//     numbers.forEach((number) => {
//       if (number % 2 === 0) {
//         newNumbers.push(number + value);
//       }else{
//         newNumbers.push(number);
//       }
//     });
//     return newNumbers;
//   };

// Задача

// В масиві planets зберігаються назви планет. Доповни код таким чином, щоб у змінній planetsLengths вийшов масив, що буде складатися з довжин назв кожної планети з масиву planets. Обов'язково використовуй метод map().

// Розвязання

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(function(plenet){
//   return plenet.length;
// });

// Задача

// Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers, а у змінній oddNumbers — масив непарних. Обов'язково використовуй метод filter().

// Розвязок

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// Задача 

// Масив books містить колекцію об'єктів книг, кожен з яких містить властивості title, author, rating. Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

// Розвязок

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
  
//   const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
//   const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// Задача

// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, одним гравцем. У змінній players зберігається об'єкт, де ключ це ім'я гравця, а значення - його ігровий час. У змінній playtimes зберігається масив значень об'єкта players, тобто масив ігрового часу усіх гравців. Значенням змінної averagePlayTime буде середній час, проведений одним гравцем в іграх.

// Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes. Використовуй метод reduce().

// Розвязання

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244,
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
  
//   const totalPlayTime = playtimes.reduce((total, time) => total + time, 0);
  
//   const averagePlayTime = totalPlayTime / playtimes.length;
  
// Задача

// У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.
// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
// Поради:
// Використовуй метод reduce() для ітерації по масиву players та обчислення загальної суми середнього часу на одну гру.
// Усередині колбек функції reduce(), поділи playtime гравця на gamesPlayed, щоб отримати середній час, витрачений на одну гру кожним гравцем.
// Накопичуй результат у змінній acc і повертай його в кінці кожної ітерації.
// Ініціалізуй параметр acc методу reduce() початковим значенням 0, щоб уникнути отримання NaN при виконанні обчислень.
// В результаті змінна totalAveragePlaytimePerGame міститиме загальну суму середнього часу на одну гру для всіх гравців.

// Розвязання 

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
  
//   const totalAveragePlaytimePerGame = players.reduce((acc, player) => { return acc + player.playtime / player.gamesPlayed; }, 0);

// Задача 

// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
// Доповни код таким чином, щоб:
// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// РОзвязання 

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       rating: 7.94,
//     },
//     {
//       title: "Enemy of God",
//       author: "Bernard Cornwell",
//       rating: 8.67,
//     },
//   ];
  
//   const sortedByAuthorName = books.toSorted((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
  
//   const sortedByReversedAuthorName = books.toSorted((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
  
//   const sortedByAscendingRating = books.toSorted((firstBook, secondBook) => firstBook.rating - secondBook.rating);
  
//   const sortedByDescentingRating = books.toSorted((firstBook, secondBook) => secondBook.rating - firstBook.rating);
   
// Задача

// Додай класу Admin наступні властивості і методи.
// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну властивість blacklistedEmails
// Клас Admin містить публічний метод blacklist
// Клас Admin містить публічний метод isBlacklisted
// Після виклику mango.blacklist("poly@mail.com") значення властивості blacklistedEmails - це масив ["poly@mail.com"]
// Виклик mango.isBlacklisted("mango@mail.com") повертає false
// Виклик mango.isBlacklisted("poly@mail.com") повертає true

// Розвязок

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     static role = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     // Публічна властивість для зберігання чорного списку поштових адрес
//     blacklistedEmails = [];
  
//     constructor({ email, access }) {
//       super(email);
//       this.access = access;
//     }
  
//     // Публічний метод для додавання пошти у чорний список
//     blacklist(email) {
//       this.blacklistedEmails.push(email);
//     }
  
//     // Публічний метод для перевірки пошти у чорному списку
//     isBlacklisted(email) {
//       return this.blacklistedEmails.includes(email);
//     }
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     access: Admin.role.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.access); // "superuser"
  
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true
  
