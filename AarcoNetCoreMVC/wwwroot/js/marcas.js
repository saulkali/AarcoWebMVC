function ObtenerMarcasAjax(url) {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: "json",
        contentType: "application/json",
        success: AgregarMarcas,
        error: ErrorGenerico
    });
}


function ObtenerSubMarcasAjax(url,idMarca) {
    $.ajax({
        url: url + "/" + idMarca,
        type: 'GET',
        dataType: "json",
        contentType: "application/json",
        success: AgregarSubMarcas,
        error: ErrorGenerico
    });
}

function ObtenerModelSubAjax(url, idSubMar) {
    $.ajax({
        url: url + "/" + idSubMar,
        type: 'GET',
        dataType: "json",
        contentType: "application/json",
        success: AgregarModelSubMar ,
        error: ErrorGenerico
    });
}


function ErrorGenerico(response) {

}

function AgregarMarcas(response) {
    response.forEach(marca => {
        $("#selectMarcas").append($("<option>", { value: marca.id, text: marca.nombre }));
    });
    
}

function AgregarSubMarcas(response) {
    $("#selectSubMarca").empty();
    $("#selectSubMarca").append($("<option>", { value: "", text: "Elige una opcion" }));
    response.forEach(subMarca => {
        $("#selectSubMarca").append($("<option>", { value: subMarca.id, text: subMarca.nombre }));
    });
}



function AgregarModelSubMar(response) {
    $("#selectModelSub").empty();
    $("#selectModelSub").append($("<option>", { value: "", text: "Elige una opcion" }));
    response.forEach(modelSub => {
        $("#selectModelSub").append($("<option>", { value: modelSub.id, text: modelSub.nombre }));
    });
}





function getCP() {
    var url = "https://api-test.aarco.com.mx/api-examen/api/examen/sepomex/"; // hardcoding
    var cp = document.getElementById("CP").value;
    $.ajax({
        url: url + cp,
        dataType: "json",
        contentType: "application/json",
        type: "get",
        success: AddCp,
        error: error => alert(error)
    });
}


function AddCp(response) {
    var jsonResponse = JSON.parse(response.CatalogoJsonString);
    document.getElementById("estado").value = jsonResponse[0].Municipio.Estado.sEstado;
    document.getElementById("municipio").value = jsonResponse[0].Municipio.sMunicipio;
    
    console.log(jsonResponse);
    AgregarColonia(jsonResponse[0].Ubicacion);
}

function AgregarColonia(ubicaciones) {
    $("#selectColonia").empty();
    $("#selectColonia").append($("<option>", { value: "", text: "Elige una opcion" }));
    ubicaciones.forEach(colonia => {
        $("#selectColonia").append($("<option>", { value: "", text: colonia.sUbicacion }));
    });
}




function AbrirModal() {
    console.log("abrir modal");
    $("#exampleModal").modal();
}



function ConfigurarEventosSelect() {
    $("#selectMarcas").on("change", eve => {
        var id = $(eve.target).val();
        ObtenerSubMarcasAjax("http://localhost:4562/api/SubMarcas",id); // hardcoding
    });

    $("#selectSubMarca").on("change", eve => {
        var id = $(eve.target).val();
        ObtenerModelSubAjax("http://localhost:4562/api/ModelSubMars", id); //hardcoding
    });
}

$(document).ready(() => {
    ObtenerMarcasAjax("http://localhost:4562/api/Marcas"); // hardcoding
    ConfigurarEventosSelect();
});





