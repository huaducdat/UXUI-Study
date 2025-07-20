
let currentRow;

$(document).ready(() => {
    console.log("i am ready now!");
    $('#user-form').on('submit', e => {
        e.preventDefault();
        const name = $('#user-name').val();
        const age = $('#user-age').val();
        const gender = $('input[name=genderTog]:checked').val();

        if (name != '' && (age <= 30 && age > 9)) {

            const newRow = $(`<tr>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${gender}</td>
                    <td><button class="remove-btn">Remove</button><button class="edit-btn">Edit</button></td>
                </tr>
                `);

            newRow.find('td:last').css({
                display: 'flex',
                gap: '9px',
                'justify-content': 'center'
            });

            $('#my-tbody').append(newRow);
            $('#user-form')[0].reset();

        }

    })
    $('#my-tbody').on('click', '.remove-btn', function () {
        $(this).closest('tr').remove();
    });
    $('#my-tbody').on('click', '.edit-btn', function () {
        const row = $(this).closest('tr');
        const name = row.find('td:eq(0)').text();
        const age = row.find('td:eq(1)').text();
        const gender = row.find('td:eq(2)').text();
        // console.log(name);
        currentRow = row;
        $('#edit-box').fadeIn(150);
        $('#name-input').val(name);
        $('#age-input').val(age);
        $('input[name="edit-gender-tog"]').prop('checked', false);
        $(`input[name="edit-gender-tog"][value="${gender}"]`).prop('checked', true);
    })

    $('#edit-board').on('submit', function (e) {
        e.preventDefault();
        const name = $('#name-input').val();
        const age = $('#age-input').val();
        const gender = $('input[name="edit-gender-tog"]:checked').val();
        currentRow.find('td:eq(0)').text(name);
        currentRow.find('td:eq(1)').text(age);
        currentRow.find('td:eq(2)').text(gender);
        currentRow = null;
        this.reset();
        $('#edit-box').fadeOut(150);
    })

    $('#cancel-btn').on('click', function () {
        $('#edit-box').fadeOut(150);
        currentRow = null;

        $('#edit-board')[0].reset();
    })
});

const saveButt = document.getElementById("save-data-btn");

saveButt.onclick = () => {
    const table = document.getElementById("my-table");
    const rows = table.getElementsByTagName("tr");
    let number = rows.length;
    if (number < 1) {
        alert("There is no information to save!");
        return;
    }

    const arr = [];
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        const newHuman = { ...human };
        newHuman.name = cells[0].textContent.trim();
        newHuman.age = cells[1].textContent.trim();
        newHuman.gender = cells[2].textContent.trim();
        arr.push(newHuman);
    }
    localStorage.setItem("saveHumans", JSON.stringify(arr));
    alert("data saved to local storage, now!");
    const saved = localStorage.getItem("saveHumans");
    const parsed = JSON.parse(saved);
    console.log(parsed);
}

const human = {
    name: "",
    age: "",
    gender: ""
};
