// //when using normal export:
// //import {apikey} from "./util.js"

// //when using export default:
// //import apikey(it can be any name prefferably the name of what youre exporting) from "./util.js"

// //when exporting mutiple things:
// //import {apikey,abc}  from "./util.js"

// //functions
// // function greetUsers(user, name = "rita") {
// //   console.log(user);
// //   console.log(name);
// // }
// // greetUsers("max", "uche");
// // greetUsers();
// //Arrow functions in your note

// //objects and classes
// const user = {
//   name: "max",
//   age: 34,
//   //objects can also store functions which we call methods
//   // that can accept parameters
//   greet() {
//     console.log("hello");
//     //the function can access properties of the object
//     console.log(this.name);
//   },
// };
// console.log(user);
// //to get the value in an object
// console.log(user.name);
// //to acess the function
// user.greet();
// //using classes
// class User {
//  constructor(name,age){
//   this.name=name;
//   this.age=age;
//  }

//  greeting(){
//   console.log("hi");
//  }
// }
//  //create an instance of the class
//  const user1=new User("uche",50);
//  console.log(user1)
//  User1.greet();

//Arrays
// const hobbies=["sports","reading","cooking"]
// console.log(hobbies[0]);
// //built in methods for array can be accessed by using the array
// // name and a dot then the name of the method
// hobbies.push("sleeping")//it would be added at the end of the array when you call it
// const index = hobbies.findIndex((item) => {
// return item ==="reading"
// })
// console.log(index)//takes in a function that can have at least one parameter and executes the function executing the function is checking if each item in the array is "reading"
// // if its true it will return the index of "reading" if not it will not  do anything

// //the function can also be written like this
// const index1 = hobbies.findIndex((item) => item ==="reading")
// console.log(index1)
// //another method is map which allows you transform evey item in the array to another item it also takes in a function
// const editedHobbies = hobbies.map((item) => item+"9");
// console.log(editedHobbies);
// //you can even transformit to objects this is a short form of writing it
// const editedHobbies2= hobbies.map((item) => ({key:item}));
// console.log(editedHobbies2);

//Destructuring
// const userNameData = ["Thelma", "Lawson"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];
// //instead of doing this above you can destructure it to get whats in the array
// const [firstName1, lastName1] = ["Thelma", "Lawson"];
// console.log(firstName1);
// console.log(lastName1);
// so above destructuring took place on the left side the first name is for the fist element and the second is for the second element

//Destructuring can also be used for objects
// const user = {
//     name: "max",
//     age: 34,
// }
// const name=user.name;
// const age=user.age;
//instead of doing this above to get the name and age you can just destructure it
// const { name, age } = {
//   name: "max",
//   age: 34,
// };
// console.log(name);
// console.log(age);
//notice its curly braces not squre on the left side and the propeties inside "name and age" depend on the key of the objects
