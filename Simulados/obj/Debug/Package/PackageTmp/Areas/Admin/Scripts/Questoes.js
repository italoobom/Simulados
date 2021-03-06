﻿$("#categoria").change(function () {
    loadsubcat($(this).val());
});
$("#cat").change(function () {
    loadsubcat($(this).val());
});
function loadsubcat(id) {
    $.getJSON(relativeUri + "/Subcategorias/?categoria=" + id)
    .done(function (json) {
        $("#subcategoria").empty();
        for (i = 0; i < json.length; i++) {
            $('#subcategoria').append($('<option>', {
                value: json[i].Id,
                text: json[i].Nome
            }));
        }
    })
    .fail(function (jqxhr, textStatus, error) {
        alert('Não foi possível carregar a página corretamente. Tente Novamente.');
    });
}
$("#uploadAltImage").change(function () {
    var data = new FormData();
    var files = $("#uploadAltImage").get(0).files;
    if (files.length > 0) {
        data.append("imagem", files[0]);
    }
    $.ajax({
        url: relativeUri + "/UploadImage",
        type: "POST",
        processData: false,
        contentType: false,
        data: data,
        success: function (response) {
            $("#imageName").val(JSON.stringify(response));
        },
        error: function (er) {
            alert(er);
        }

    });
});
$("#uploadImage").change(function () {
    var data = new FormData();
    var files = $("#uploadImage").get(0).files;
    if (files.length > 0) {
        data.append("imagem", files[0]);
    }
    $.ajax({
        url: relativeUri + "/UploadImage",
        type: "POST",
        processData: false,
        contentType: false,
        data: data,
        success: function (response) {
            $("#imagem").val(JSON.stringify(response));
        },
        error: function (er) {
            alert(er);
        }

    });
});
$("#subAlt").click(function () {
    alt = $("#alternativa").val();
    img = $("#imageName").val();
    $.ajax({
        url: relativeUri + "/AddAlternativa",
        type: "GET",
        processData: false,
        contentType: false,
        data: $.param({alternativa : alt, imagem:img}),
        success: function (id) {
            $("#alt-group").append(
                '<div class="input-group" id="a'+id+'">'+
                        '<input type="text" class="form-control" disabled="disabled" value="' + alt + '" aria-describedby="basic-addon2">' +
                        '<input type="hidden" name="alternativa" value="' + id + '">' +
                        '<span class="input-group-btn" id="basic-addon2">' +
                            '<button class="btn btn-default" onclick="$(\'#a' + id +'\').remove()" type="button">X</button>' +
                        '</span>'+
                    '</div>'
                );
            $('#correta').append($('<option>', {
                value: id,
                text: alt
            }));
        },
        error: function (er) {
            alert(er);
        }

    });
});

$("#editAlt").click(function () {
    alt = $("#alternativa").val();
    img = $("#imageName").val();
    alt_id = $("#altId").val();
    $.ajax({
        url: relativeUri + "/EditAlternativa",
        type: "GET",
        processData: false,
        contentType: false,
        data: $.param({ id: alt_id, alternativa: alt, imagem: img }),
        success: function (id) {
            $("#alt" + id).val(alt);
        },
        error: function (er) {
            alert(er);
        }

    });
});

function setAlt(id) {
    $("#altId").val(id);
    img = $("#altImg" + id).val();
    alt = $("#alt" + id).val();
    $("#imageName").val(img);
    $("#alternativa").val(alt);
}