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

function countProps(object) {
  let propCount = 0;
  // Change code below this line
    for (const key in object) {
        console.log(key);
        const property = Object.hasOwnProperty(key);
        console.log(property);
        if (property) {
        propCount += 1;
        }
    }
  // Change code above this line
  console.log(propCount);
  return propCount;
}

countProps({name: "Mango", age: 2})