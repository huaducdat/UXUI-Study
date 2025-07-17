$(document).ready(() => {
    console.log("i am ready now!");
    $('#user-form').on('submit', e => {
        e.preventDefault();
        const name = $('#user-name').val();
        const age = $('#user-age').val();
        const gender = $('input[name=genderTog]:checked').val();

        if (name != '' && (age <= 30 && age > 9)) {

            const newRow =
                `<tr>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${gender}</td>
                    <td><button class="remove-btn">Remove</button></td>
                </tr>
                `;
            $('#my-tbody').append(newRow);

            $('#user-form')[0].reset();
        }
        $('#my-tbody').on('click', '.remove-btn', function () {
            $(this).closest('tr').remove();
        });

    })
});
