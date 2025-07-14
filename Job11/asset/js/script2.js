let arr = [];
arr.push("An");
arr.push("Binh");
arr.push("Chi");
console.log(arr);


const run = function () {
    setTimeout(() => {
        arr.unshift("Dung");
        console.log(arr);
    }, 1000);
}

function run1() {
    setTimeout(() => {
        arr.splice(1, 1);
        console.log(arr);
    }, 1000);
    run();
}
run1();