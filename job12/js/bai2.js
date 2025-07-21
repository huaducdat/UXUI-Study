$('#add-butt').on('click', function () {
    const txt = $('#work-name-input').val();
    const desTxt = $('#description-input').val();
    if (txt === "") return;
    const newrow = $(`<tr>
        <td>${txt}</td>
        <td><label><input type="checkbox"  name="status-tog">Done</label></td>
        <td>${desTxt}</td>
        <td><button class="remove-btn">Remove</button><button class="edit-butt">Edit</button></td>
        </tr>`);

    $('#table-body').append(newrow);

    newrow.find('td:last').css({
        'display': 'flex',
        'gap': '9px'
    });
    $('#work-name-input').val('');
    $('#description-input').val('');
});
$(document).on('click', '.remove-btn', function () {
    $(this).closest('tr').remove();
});
let currentRow;
$(document).on('click', '.edit-butt', function () {
    $('#edit-box').fadeIn(150);
    currentRow = $(this).closest('tr');
    const name = currentRow.find('td:eq(0)').text();
    const des = currentRow.find('td:eq(2)').text();
    $('#edit-name-input').val(name);
    $('#edit-des-input').val(des);
});
$(document).on('click', '#cancel-btn', function () {
    currentRow = null;
    $('#edit-box').fadeOut(150);
});
$('#edit-form').on('submit', function (e) {
    e.preventDefault();
    const name = $('#edit-name-input').val();
    const des = $('#edit-des-input').val();
    currentRow.find('td:eq(0)').text(name);
    currentRow.find('td:eq(2)').text(des);
    this.reset();
    currentRow = null;
    $('#edit-box').fadeOut(150);
});
$('#save-data-btn').on('click', function () {
    const table = $('#work-table');
    const rows = table.find('tbody tr');
    const data = [];
    const rowsCount = rows.length;
    if (rowsCount < 1) {
        alert("List is empty!");
        return;
    }
    rows.each(function () {
        const cells = $(this).find('td');
        const name = cells.eq(0).text().trim();
        const checkBox = cells.eq(1).find('input[type="checkbox"]').is(':checked');
        const des = cells.eq(2).text().trim();
        data.push({
            name,
            done: checkBox,
            des
        });
    });

    localStorage.setItem("data", JSON.stringify(data));
    const file = localStorage.getItem("data");
    const parse = JSON.parse(file);
    console.log(parse);


    alert("Saved!");

});