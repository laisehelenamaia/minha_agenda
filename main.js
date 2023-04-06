$(document).ready(function () {

    // Adiciona o efeito de deslizar para baixo no form
    $('header button').click(function () {
        $('form').slideDown();
    })
    // Adiciona o efeito de deslizar para cima no form
    $('form #bt-cancel').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const nameContact = $('#nome').val();
        const numberContact = $('#fone').val();

        const novoItem = $(`<tr></tr>`);
        $(`
        <th>${nameContact}</th>
        <th>${numberContact}</th>
        
        `).appendTo(novoItem);


        $(novoItem).appendTo('#tbody-table-contacts');
        $(novoItem).fadeIn();
    })


})