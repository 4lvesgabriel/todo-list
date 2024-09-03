function novoItem() {
    let content = $("#titulo").val();
    let string = String(content)
    var $li = $('<li></li>');

    var $span = $('<span></span>').text(content);

    var $button = $(`<button></button>`).addClass('btn btn-danger').text('x');

    $button.on('click', function() {
        deletar(string);
    });

    $li.append($span).append($button);

    $li.attr("id",content)

    if(content){
        $('#uLista').append($li);
    }
}

function deletar(id){
    $(`#${id}`).remove()
}


