// let arr = [];
// arr.push("An");
// arr.push("Binh");
// arr.push("Chi");
// console.log(arr);


// const run = function () {
//     setTimeout(() => {
//         arr.unshift("Dung");
//         console.log(arr);
//     }, 1000);
// }

// function run1() {
//     setTimeout(() => {
//         arr.splice(1, 1);
//         console.log(arr);
//     }, 1000);
//     run();
// }
// run1();

// let arr1 = [1, 2, 3, 4, 5];
// const arr2 = arr1.filter(value => {
//     if (value % 2 === 0) return value;
// })
// console.log(arr2);
// const arr3 = arr1.map(value => {
//     return value * 2;
// })
// console.log(arr3)
// const s = arr1.reduce((total, value) => {
//     return total + value;
// }, 0);
// console.log(s);

// const book = {
//     bookName: "The passion of Messiah. The King of the Kingdom of Heaven.",
//     description: "You don't find him, he will find you!",
//     author: "Dat Duc Hua",
//     pages: 99
// };
// console.log("Book name: " + book.bookName);
// console.log("Description: " + book.description);
// console.log("Author: " + book.author);

// const student = {
//     nameStu: "Dummy",
//     scores: {
//         english: 6,
//         math: 6
//     }
// };
// console.log("Student name: " + student.nameStu);
// console.log("English score: " + student.scores.english);
// console.log("Math score: " + student.scores.math);

// const info = {
//     name: "",
//     age: "",
//     grades:{
//         math: "",
//         english: "",
//     }
// };

// let newInfo = JSON.parse(JSON.stringify(info));
// newInfo.name = "Dat Duc Hua";
// newInfo.age = 31;
// newInfo.grades.math = 6;
// newInfo.grades.english = 6;
// console.log(newInfo);
// console.log(info);
const devices = [
    { name: 'iphone', price: 1000 },
    { name: 'laptop', price: 1500 },
    { name: 'mouse', price: 50 }
];
console.log(devices);
devices.forEach(item => console.log('Device: ' + item.name));
devices.push({name: 'keyboard', price:100});
let newLst =  devices.filter(item => {if(item.price > 1000) return item});
console.log(newLst);

const student1s = [];
student1s.push({name:'A', score: 10});
student1s.push({name:'b', score: 9});
student1s.push({name:'c', score: 6});
student1s.push({name:'d', score: 7});
student1s.push({name:'e', score: 2});
student1s.push({name:'f', score: 5});
console.log(student1s);

let maxScore = 0;
student1s.forEach(stu => {
    if(maxScore < stu.score) maxScore = stu.score;
});

const studenMax = student1s.find(stu => stu.score === maxScore);
console.log(studenMax);
let passStus = student1s.filter(stu => stu.score >= 5)
console.log(passStus);
const missStu = student1s.find(stu => stu.score < 3);
console.log(missStu);