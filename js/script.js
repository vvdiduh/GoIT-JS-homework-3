///////////////////////////// task 4

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// console.log(lastTag);

///////////////////////////// task 7

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//     },
// };

// // Change code below this line

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// console.log(apartment.location.city);

///////////////////////////// task 10

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//     keys.push(key);
//     console.log('keys',keys);
//     values.push(apartment[key])
//     console.log('values', values);
//     console.log('//////////////');
// }

///////////////////////////// task 12

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (const key in object) {
//         console.log(key);
//         const property = Object.hasOwnProperty(key);
//         console.log(property);
//         if (property) {
//         propCount += 1;
//         }
//     }
//   // Change code above this line
//   console.log(propCount);
//   return propCount;
// }

// countProps({name: "Mango", age: 2})

///////////////////////////// task 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const salarys = Object.values(salaries);
//   console.log(salarys);
//   for (const salary of salarys) {
//     console.log(salary);
//     totalSalary += salary;
//     console.log(totalSalary);
//   }
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })

///////////////////////////// task 17

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

///////////////////////////// task 18

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       return console.log(product.price);
//     }
//   }
// console.log('null');
  
//   // Change code above this line
// }

// // getProductPrice("Radar")
// getProductPrice("Grip")
// // getProductPrice("Engine")

///////////////////////////// task 19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const values = [];
//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       values.push(product[propName])
//     }
//   } console.log(values);

//   return values;


//   // Change code above this line
// }

// getAllPropValues("quantity")

///////////////////////////// task 20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
//   for (const product of products) {
    
//     // console.log(product.name === productName);
//     if (product.name === productName) {
//       // console.log(product.name === productName);
//       // console.log(product.price);
//       // console.log(product.quantity);
//       totalPrice = product.price * product.quantity;
//       // console.log(totalPrice);
//     }
//   }
// return totalPrice;

//   // Change code above this line
// }

// calculateTotalPrice("Blaster")


///////////////////////////// task 21

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

///////////////////////////// task 22

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// return meanTemperature;

///////////////////////////// task 30

// function makeTask(data) {
//   const completed = false;
//   // const category = "General";
//   // const priority = "Normal";
//   // Change code below this line
//   const { text, category = 'General', priority = "Normal", } = data;
//   const newData = { text, category, priority, completed };
//   console.log(newData);
//   return newData;
//   // Change code above this line
// }

// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// // makeTask({})

///////////////////////////// task 31

// Change code below this line
// function add(...args) {
//   console.log(args);
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
  
//   console.log(sum);
//   // Change code above this line
// }

// add(15, 27)
// add(12, 4, 11, 48)

///////////////////////////// task 32

// function addOverNum(...args) {
//   let total = 0;
//   const firstEl = args[0];
//   console.log(firstEl);

//   for (const arg of args) {
//     if (arg > firstEl) {
//       total += arg;
//     }
//     console.log(total);
    
//   }
// // console.log(total);
//   return total;
//   // Change code above this line
// }
// // addOverNum(50, 15, 27)
// addOverNum(10, 12, 4, 11, 48, 10, 8)


///////////////////////////// task 32

// function findMatches(array, ...numbers) {
//   const matches = []; // Don't change this line
  
//   for (const number of numbers) {
//     // console.log(number);
//     // console.log(array.includes(number));
//     if (array.includes(number)) {
//       matches.push(number)
//     }
//   }

//   // Change code above this line
//   // console.log(matches);
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)


///////////////////////////// task 33


// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };


///////////////////////////// task 35

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//       console.log(this.books);
//       const numberEl = this.books.indexOf(oldName);
//       console.log(numberEl);
//       this.books.splice(numberEl, 1)
//       console.log(this.books);
//       this.books.splice(numberEl, 0, newName)

//     // Change code above this line
//       console.log(this.books);
//   },
// };


// bookShelf.updateBook("Haze", "Dungeon chronicles")

///////////////////////////// task 36

// const atTheOldToad = {
//     // Change code below this line
//     potions :[],
//
//   // Change code above this line
// };

///////////////////////////// task 37

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//   // Change code above this line
// };

// atTheOldToad.getPotions()

///////////////////////////// task 38

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//     console.log(this.potions);
//     // Change code below this line
//         this.potions.push(potionName);
//     // Change code above this line
//     console.log(this.potions);
//   },
// };

// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion")

///////////////////////////// task 39

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//       const potionNumber = this.potions.indexOf(potionName);
//       console.log(potionNumber);
//       this.potions.splice(potionNumber, 1);
//       console.log(this.potions);
//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Dragon breath")

///////////////////////////// task 40

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//       console.log(this.potions);
//     // Change code below this line
//       const potionNumber = this.potions.indexOf(oldName);
//     //   console.log(potionNumber);
//       this.potions.splice(potionNumber, 1);
//       console.log(this.potions);
//       this.potions.splice(potionNumber, 0, newName);
//       console.log(this.potions);
//     // Change code above this line
//   },
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")

///////////////////////////// task 41

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
//     addPotion(newPotion) {
//         const {name, price} = newPotion
//         const nameDecoction = [];

//         for (const {name} of this.potions) {
//             nameDecoction.push(name);
//         }
//         // console.log(nameDecoction);
        
//         if (nameDecoction.includes(name)) {
//             return `Error! Potion ${name} is already in your inventory!`;
//             
//         }
//         nameDecoction.push(name);
//         console.log(nameDecoction);
//         return this.potions.push(newPotion);
//         console.log(this.potions);
//   },
    // removePotion(potionName) {

    //     console.log(this.potions);

    //     const arrayPotionName = [];

    //     for (const { name } of this.potions) {
    //         arrayPotionName.push(name);
    //     }

    //     console.log(arrayPotionName);
    //     const potionIndex = arrayPotionName.indexOf(potionName);
    //     console.log(potionIndex);
        
    //     if (potionIndex === -1) {
    //         console.log(`Potion ${potionName} is not in inventory!`); 
    //     }

    //     this.potions.splice(potionIndex, 1);
    //     console.log(this.potions);
    // },
    updatePotionName(oldName, newName) {
        console.log("old name:", oldName);

        for (const potion of this.potions) {
            console.log("name", potion.name);
            console.log(potion.name === oldName);
            if (potion.name === oldName) {
                potion.name = newName;
            }
            
        }
        console.log(this.potions);
    },
  // Change code above this line
};

atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
