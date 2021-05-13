// STEP 1: create a Dog (anonymous declaration) and a Cat (named declaration) class using constructor syntax

// function Cat() {
// };

// const Dog = function() {
// };

// STEP 2: create a new instance of both the Cat and Dog classes

// const mila = new Cat();
// const buddy = new Dog();

// STEP 3: create a new class using constructor syntax called Animal with a method that displays a message

// function Animal() {
//     console.log(`The Animal has been created`);
// }
// const animal1 = new Animal();

// STEP 4: create a new class using code in step 3 that accepts an argument that is displayed in the console window

// function Animal(sound) {
//     this.sound = sound;
//     console.log(`This Animal says ${this.sound}.`);
// }
// const animal1 = new Animal('meow');

// STEP 5: create a new Animal class using constructor syntax with five properties

// function Animal(type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
//     console.log(`The Animal is a ${this.color} ${this.breed} ${this.type} that is ${this.height} in tall and ${this.length} in long.`);
// }
// const mila = new Animal('cat', 'wild', 'pink', 20, 15);

// STEP 6: use a for loop to display all of the properties in the Animal class

// function Animal(type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
// }

// mila = new Animal('cat', 'wild', 'pink', 20, 15);
// for (var key in mila) {
//     console.log(`${key}: ${mila[key]}`);
// }

// STEP 7: create a public method called speak with a conditional to check the type of animal created

// function Animal(type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
//     this.speak = function() {
//         if (this.type === "cat") {
//             console.log(`The ${this.color} cat is meowing!`);
//         } else if (this.type === "dog") {
//             console.log(`The ${this.color} dog is barking!`);
//         };
//     }
// };

// const mila = new Animal('cat', 'wild', 'pink', 20, 15);
// mila.speak();

// STEP 8: convert properties to private properties with a private method and a privileged method that returns the value

// function Animal(type, breed, color, height, length) {
//     let _type = type;
//     let _breed = breed;
//     let _color = color;
//     let _height = height;
//     let _length = length;
//     let checkType = function() {
//         if (_type === "cat") {
//             console.log(`The ${_type} has made a noise!`);
//         } else if (_type === "dog") {
//             console.log(`The ${_type} has made a noise!`);
//         }
//     }
//     this.speak = function() {
//         checkType();
//     }
// };

// const mila = new Animal('cat', 'wild', 'pink', 20, 15);
// mila.speak();

// STEP 9: create a string method called findWords that finds all instances of a specific word within a paragraph







