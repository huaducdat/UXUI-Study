const txtEle = document.getElementById("helloTxt");

const oriTxt = txtEle.innerHTML;


let isClick = false;

function changeTxt() {

    if (!isClick) {
        txtEle.innerHTML = "Fuck you!"
        isClick = true;
    }
    else {
        txtEle.innerHTML = oriTxt;
        isClick = false;
    }
}


// const ulLst = document.getElementsByTagName("ul");
// const uls = document.querySelectorAll("ul");
// uls.forEach(item => {
//     item.style.display = "flex";
//     item.style.flexDirection = "row";
//     item.style.gap = "30px";
// })
// // ulLst.style.flexDirection = "row";
// for (let i = 0; i < ulLst.length; i++) {
//     ulLst[i].style.color = "red";
    
    
// }
// const uulLst = document.getElementsByClassName("nameLst");
// for (let i = 0; i < uulLst.length; i++) {
//     uulLst[i].style.color = "blue";
// }
const ulLst = document.querySelectorAll("ul li");
const uls = document.querySelectorAll("ul");
uls.forEach(item => {
    item.style.display = "flex";
    item.style.flexDirection = "row";
    item.style.gap = "30px";
})
// ulLst.style.flexDirection = "row";
for (let i = 0; i < ulLst.length; i++) {
    ulLst[i].style.color = "gray";
    
    
}
// const uulLst = document.getElementsByClassName("nameLst");
// for (let i = 0; i < uulLst.length; i++) {
//     uulLst[i].style.color = "blue";
// }