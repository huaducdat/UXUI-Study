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
// const devices = [
//     { name: 'iphone', price: 1000 },
//     { name: 'laptop', price: 1500 },
//     { name: 'mouse', price: 50 }
// ];
// console.log(devices);
// devices.forEach(item => console.log('Device: ' + item.name));
// devices.push({name: 'keyboard', price:100});
// let newLst =  devices.filter(item => {if(item.price > 1000) return item});
// console.log(newLst);

// const student1s = [];
// student1s.push({name:'A', score: 10});
// student1s.push({name:'b', score: 9});
// student1s.push({name:'c', score: 6});
// student1s.push({name:'d', score: 7});
// student1s.push({name:'e', score: 2});
// student1s.push({name:'f', score: 5});
// console.log(student1s);

// let maxScore = 0;
// student1s.forEach(stu => {
//     if(maxScore < stu.score) maxScore = stu.score;
// });

// const studenMax = student1s.find(stu => stu.score === maxScore);
// console.log(studenMax);
// let passStus = student1s.filter(stu => stu.score >= 5)
// console.log(passStus);
// const missStu = student1s.find(stu => stu.score < 3);
// console.log(missStu);
const students = [
    { id: 1, name: 'An', age: 16, gender: 'Nam', scores: [7, 8, 9] },
    { id: 2, name: 'Bình', age: 17, gender: 'Nam', scores: [6, 6, 5] },
    { id: 3, name: 'Cúc', age: 16, gender: 'Nữ', scores: [9, 9, 10] },
    { id: 4, name: 'Dương', age: 18, gender: 'Nữ', scores: [4, 5, 6] },
    { id: 5, name: 'E', age: 15, gender: 'Nam', scores: [10, 10, 10] }
];
students.forEach(stu => {
    console.log(`Name: ${stu.name}, Age: ${stu.age}`);
})

const newArr = students.map(stu => {
    const average = stu.scores.reduce((total, mark) => total + mark, 0) / stu.scores.length;
    // const decimal = Math.floor((average % 1) * 10);
    const trimed = Number(average.toFixed(1));
    return { name: stu.name, averMark: trimed };
})
console.log("New list!");
newArr.forEach(stu => console.log(`Name: ${stu.name}, Average mark: ${stu.averMark}`));
const newStu = students.find(stu => stu.age >= 17);
console.log(`${newStu.name} was larger than 17.`);
const newLst = newArr.filter(stu => stu.averMark < 5);
if (newLst.length < 1) {
    console.log("There is no student has average mark lower than 5.");

}
else {
    newLst.forEach(stu => {

        console.log(`${stu.name}'s average mark is lower or than 5.`)
    });
}

const isEveryLarger = students.every(stu => stu.age >= 15);
console.log(`All people are lager than 15 or equal to 15: ${isEveryLarger}`);
const allAverage = newArr.reduce((sum, stu) => sum + stu.averMark, 0) / newArr.length;
console.log("Average of the class is: " + allAverage);
