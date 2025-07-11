const titleTxt = document.getElementsByTagName("h1")[0];

function setTitleTxt() {
    let txt = "Welcome to the JavaScript Course."

    setTimeout(() => {
        titleTxt.innerText = txt;
    }, 2000);
}
setTitleTxt();

const desTxt = document.getElementsByClassName("description")[0];

function setDes() {
    let txt = "You are going to learn about <strong>DOM, Events!</strong>"
    setTimeout(() => {
        desTxt.innerHTML = txt;
    }, 2000);
}
setDes();

const nameInput = document.getElementById("nameStu");
const noticeTxt = document.querySelector("#helloUser");
const butt = document.querySelector("#myButt");
function setNotice() {
    setTimeout(() => {
        const data = nameInput.value.trim();
        if (data != "") {
            noticeTxt.innerHTML = `Hello, <strong>${data}</strong>!`
            function e() {
                butt.style.display = "none";
            }
            e();
        }
    }, 500);
}

const countClickButt = document.getElementById("newButt");
let clickCount = 0;

const clickButtTxt = countClickButt.innerHTML;
countClickButt.addEventListener("click", () => {
    ++clickCount;
    console.log(`click count: ${clickCount}`);
    countClickButt.innerHTML = clickButtTxt + " " + clickCount;

})

const userName = "Dat";
const userGender = "male"
const userAge = "31";

const saveUserButt = document.getElementById("saveUserInfo");
const clearUserButt = document.getElementById("clearData");

saveUserButt.onclick = () => {
    localStorage.setItem("userName", userName);
    localStorage.setItem("userGender", userGender);
    localStorage.setItem("userAge", userAge);
}
clearUserButt.onclick = () => {
    localStorage.clear();
}


// let lstElement = document.createElement("li");
// lstElement.textContent = "Oke";
// const passengerLst = document.getElementById("passengerLst");
// passengerLst.append(lstElement);
// lstElement.classList.add("lst-element");
// const liButt = document.createElement("button");
// lstElement.append(liButt);
// liButt.textContent = "➕";
// liButt.classList.add("li-butt");

function creatLstEle() {
    let lstElement = document.createElement("li");
    lstElement.textContent = "Oke";
    const passengerLst = document.getElementById("passengerLst");
    passengerLst.append(lstElement);
    lstElement.classList.add("lst-element");
    const liButt = document.createElement("button");
    lstElement.append(liButt);
    liButt.textContent = "➖";
    liButt.classList.add("remove-butt");
}

const toggleBut = document.getElementsByName("toggleButt")[0];
toggleBut.onclick = () => {
    toggleBut.classList.toggle("toggleBut");
}
