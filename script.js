// var a = 5;

// function print()
// {
//     var a = "Khush"
//     // console.log(a);
// }
// var a = "Khush"
// console.log(a)
// print();

// let a = 40;
// function print()
// {
//     let a = 30;
//     console.log(a);
// }
// console.log(a);
// print();    

// let a = 3;
// let b = 3;

// function result()
// {
//     console.log(a**b);
// }

// result();

// let a = 2;
// console.log(a++);
// console.log(a);

// console.log(6 != '5'); 
// console.log(5 != 5);

// let age=17;

// let show = (age>18) ? "vote" : "not vote";

// console.log(show);

// let ans = (true && true && false);
// console.log(ans);

// let solve = (false || false || false);
// console.log(solve);

// let check = (! false);
// console.log(check);
// for(i=1;i<=2;i++)
// {
//     console.log("Hii Duniya");
// }

// while(i=1;i<=5;i++)
// {
//     console.log("Hello Duniya");
// }
// let i=1;
// while(i <= 10)
// {
//     console.log(2*i);
//     i++;
// }

// let i = 1;
// do {
//     console.log(2 * i);
//     i++;
// } while(i<=10)

// function display()
// {
//     console.log("Hello Khush !");
// }

// display();

// function sum(a , b)
// {
//     return a+b;
// }

// console.log(sum(2,4));

// let sub = function(a,b)
// {
//     return a-b;
// }

// console.log(sub(4,2));

// let mul = (a,b) => a*b;


// console.log(mul(4,3));


// function display()
// {
//     console.log("Hello User !");
// }

// display();

// function display(name)
// {
//     console.log("Hello "+ name );
// }

// display("Khush");

// let calculation = function (langname)
// {
//     console.log(`Hello from ${langname}`);
// }

// calculation("JavaScript");

//Arrow Functions here !!

// let calculation = (a ,b) => 
// {
//     console.log(`The sum of ${a} and ${b} is ${a+b}`);
//     return 50;

// }

// calculation(2,3);
// console.log(calculation(3,3));

// //One Liner arrow funtion
// let calculation = (a,b) => console.log(a+b);
// calculation(4,2)

// const student = {
//     name: 'khush',
//     age: 20,
//     course: 'BCA',
//     hobbies: ["Coding", "Gaming", "Music"]
// }

// console.log(student.name.age);

// const Arr = [0,1,2,3,4,5,6]
// console.log(Arr.length);

// let arr = [1, 2, 3, 4, 5];
// let subArr = arr.slice(1, 4); // [2, 3, 4]
// console.log(arr); // [1, 2, 3, 4, 5] (original unchanged)
// console.log(subArr);

// let arr = ["a", "b", "c", "d"];
// arr.splice(2, 1, "x", "y");
// console.log(arr);

// const Arr = [1,2,3,4,5,6];
// Arr.push(7);
// console.log(Arr);

// let arr = [12,20,52,64,37,49]
// arr.forEach( (n,i,arr) => 
// {
//     console.log(n,i,arr);
// } )

// let arr = [10,20,30,40,50,60,70];
// let above30 = arr.filter(num => num>30);
// console.log(above30);

// let number = [1,2,3]
// const doubled = number.map(num => num*2);
// console.log(doubled);

// let num = [1,2,3,4,5,6,7,8,9,10];
// let even = num.filter(n => n % 2 === 0);
// console.log("Even Numbers:", even);

// const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

// console.log("Fruits List:");
// fruits.forEach((fruits, index) => {
//   console.log(`${index + 1}. ${fruits}`);
// }); 


// let input = "Apple, Banana, Mango, Orange, Pineapple";
// let filterList = input.split(",").trim();
// console.log(filterList);


let cart = [
    { id: 1, name: "Shoes", price: 1200 },
    { id: 2, name: "T-shirt", price: 800 },
    { id: 3, name: "Jeans", price: 1500 },
    { id: 4, name: "Books", price: 500 },
    { id: 5, name: "Paintings", price: 700 },
    { id: 6, name: "Speakers", price: 600 },
];

// ----------- practicing Array Methods -----------

// Add a new item to the end of the cart array
cart.push({ id: 4, name: "Watch", price: 1000 }); 

// Remove the last item from the cart (i.e., "Watch")
cart.pop();

// Remove the first item from the cart (i.e., "Shoes")
cart.shift();

// Add a new item at the beginning of the cart
cart.unshift({ id: 1, name: "Phone", price: 3200 });

// Print the total number of items currently in the cart
console.log(`Total item counts ${cart.length}`);

// Create a new array by slicing from index 1 to the end (non-destructive)
let sliceCart = cart.slice(1);
console.log(sliceCart); // Display the sliced array

// Replace 1 item at index 3 with a new item (modifies original array)
let spliceCart = cart.splice(3, 1, { id: 4, name: "Socks", price: 200 });
console.log(spliceCart); // Show the item that was removed

// Loop through each item in the cart and print its name
cart.forEach(function (item) {
    console.log(`name ${item.name}`);
});

// Filter items with price greater than 1000
let aboveFilter = cart.filter(function (item) {
    return item.price > 1000;
});
console.log(aboveFilter); // Display the filtered list (price > 1000)

// Create a new array of just item names using map
let itemnames = cart.map(function (item) {
    return item.name;
});
console.log(itemnames); // Print the names of all items

// Find the first item whose name is exactly "Speakers"
let speaker = cart.find(function (item) {
    return item.name === "Speakers";
});
console.log(speaker); // Print the item object if found

// Check if the brand "Nike" exists in the brands array
let brands = ["Nike", "Puma", "Adidas"];
console.log(brands.includes("Nike")); // true if "Nike" is present

// Join all item names into a single comma-separated string
let joinedNames = itemnames.join(", ");
console.log("Items:", joinedNames); // Print the combined string

// Calculate the total price of all items in the cart using reduce
let totalPrice = cart.reduce(function (acc, item) {
    return acc + item.price;
}, 0);
console.log(totalPrice); // Print the total sum of prices

// Show the final state of the cart after all operations
console.log(cart);



//declaration of objects  OR create a object
const car =
{
    brand: "Toyota",
    model: "fortuner",
    year: 2022
};

//access values
console.log(car.brand); //dot notation
console.log(car["model"]); //bracket notation

//update values
car.year = 2025;

//add new property
car.color = "White";
car.power = "4 by 4";

//delete a property
delete car.power;

for (let key in car) {
  console.log(key, "=>", car[key]);
}

console.log(car);