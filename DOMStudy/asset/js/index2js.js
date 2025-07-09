const titleTxt = document.getElementsByTagName("h1")[0];

function setTitleTxt() {
    let txt = "Wellcome to the JavaScript Course."

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
function setNotice()
{
    setTimeout(() => {
        const data = nameInput.value.trim();
        if(data != "")
        {
            noticeTxt.innerHTML = `Hello, <strong>${data}</strong>!`
            function e(){
                butt.style.display = "none";
            }
            e();
        }
    }, 500);
}
