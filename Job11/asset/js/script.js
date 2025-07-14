
const submitBtn = document.getElementById("submitButt");
const table = document.getElementsByTagName("table")[0];

const form = document.getElementsByTagName("form")[0];

let number = 0;

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputName = document.getElementById("uName").value;
    const inputAge = document.getElementById("uAge").value;
    const selected = document.querySelector('input[name="toggle"]:checked');
    if(!inputName || !inputAge || !selected)
    {
        alert("You have to input all information to submit!");
        return;
    }
    


    handleAddUser(inputName, inputAge, selected.value);
})

function handleAddUser(name, age, genderCheck) {
    ++number;
    const newRow = table.insertRow();
    const numberCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const ageCell = newRow.insertCell(2);
    const genderCell = newRow.insertCell(3);
    const funcCell = newRow.insertCell(4)
    numberCell.textContent = number;
    nameCell.textContent = name;
    ageCell.textContent = age;
    if (genderCheck === "0") {
        genderCell.textContent = "Male";
    }
    else if (genderCheck === "1") {
        genderCell.textContent = "Female";
    }
    else {
        genderCell.textContent = "Unknown";
    }
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => newRow.remove();
    removeBtn.classList.add("func-in-cell");
    funcCell.append(removeBtn);
    form.reset();
}