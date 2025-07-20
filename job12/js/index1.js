
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
        console.log(name);
        currentRow = row;
        $('#edit-box').fadeIn(150);
        $('#name-input').val(name);
        $('#age-input').val(age);
        $('input[name="edit-gender]').prop('checked', false);
    })

    $('#edit-board').on('submit', function (e) {
        e.preventDefault();


        this.reset();
    })

    $('#cancel-btn').on('click', function () {
        $('#edit-box').fadeOut(150);
        currentRow = null;
        const name = "";
        const age = "";
        $('#edit-board').reset();
    })
});




