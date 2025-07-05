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

const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

console.log("Fruits List:");
fruits.forEach((fruits, index) => {
  console.log(`${index + 1}. ${fruits}`);
}); 

