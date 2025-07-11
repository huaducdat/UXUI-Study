const addButt = document.getElementById("addButt");
const inputField = document.getElementById("inputWName");
const ulLst = document.getElementById("nameLst");

function getInputValue() {
    let txt;
    if (inputField.value !== "") {
        txt = inputField.value;
        return txt;
    }
    else return "";
}

function addLstElement(txt) {
    let ele = document.createElement("li");
    let subButt = document.createElement("button");
    ele.innerHTML = txt;
    subButt.innerHTML = "Sub";

    subButt.classList.add("subButt");
    ele.append(subButt);
    ulLst.append(ele);
    subButt.onclick = () => {
        ele.remove();
        ele = null;
        subButt = null;
    }
}

function addFunc() {
    let txt = getInputValue();
    if (txt !== "") {
        addLstElement(txt);
        inputField.value = "";
    }
}
addButt.onclick = addFunc;

inputField.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        addFunc();
    }
})
