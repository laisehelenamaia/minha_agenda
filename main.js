$(document).ready(function () {

    $('#formulario').on('submit', function (e) {
        e.preventDefault();
        const nameContact = $('#nome').val();
        const numberContact = $('#fone').val();

        const novoItem = $(`<tr></tr>`);
        $(`
        <th>${nameContact}</th>
        <th>${numberContact}</th>
        
        `).appendTo(novoItem);


        $(novoItem).appendTo('#tbody-tabela');
        $(novoItem).fadeIn();
    })


})