// function showMessEx() {
//     alert("I am from external!");
// }
// let a = 10;
// let b = 3;
// console.log(" a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a == b", a == b);
// console.log("a === b", a === b);
// console.log("a != b", a != b);
// console.log("a !== b", a !== b);
// console.log("a < b", a < b);
// console.log("a > b", a > b);
// console.log("a >= b", a >= b);
// console.log("a <= b", a <= b);

// let i = 1;

// do {
//     console.log(6 * i++);
// } while (i < 11);
// let j = 1;
// let qua = 0;
// while (j < 101) {
//     qua += j++;
// }
// console.log(qua);

// let passWord;



// while (passWord !== "123456") {
//     passWord = prompt("Nhap Mat khau");
//     if (passWord !== "123456") {
//         alert("❌ Nhap mat khau sai! 🤦‍♂️");
//     }
// }

// if (passWord === "123456") {
//     alert("✅ Đăng nhập thành công!💕");
// }

// const printHello = function () {
//     console.log("hello!");
// }
// printHello();
// printHello();

// let d = x => {
//     x *= x;
//     return x;
// }

// const printDbX = () => {
//     console.log(d(5));
// }
// printDbX();
// const checkNum = x => {
//     if (x % 2 === 0) return "TRUE"
//     else return "FALSE";
// }
// const printCheckNumber = () => {
//     console.log("This number is even: ", checkNum(d(6)));
// }
// printCheckNumber();

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let o = Math.random();
//         let isSucc = o > 1;
//         if (isSucc) resolve("Success!");
//         else reject("Error!:" + o);
//     }, 3000);
// })
// myPromise.then(result => {
//     console.log(result);
// })
//     .catch(reject => {
//         console.log(reject);
//     })
let n = prompt("Nhap so nguyen");
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

        if (n % 2 == 0) {
            resolve("even number!");
        }
        else {
            reject("odd number!");
        }
    }, 1500)
})
myPromise.then(result => {
    console.log(n + " is: " + result);
}).catch(
    result => { console.log(n + " is: " + result); }
).finally(
    () => {
        console.log("promise finish!");
    }
)

const runAsync = async function () {
    try {
        const result = await myPromise;
        console.log("current number is: " + result);
    }
    catch (result) {
        console.log("current number is: " + result);
    }
    finally {
        console.log("async await finish!");
    }
}

runAsync();
