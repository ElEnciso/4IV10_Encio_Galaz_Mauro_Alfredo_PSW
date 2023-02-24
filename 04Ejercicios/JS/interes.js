function validar(event) {
    var teclado = (document.all) ? e.keyCode : e.wich;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function interes() {
    
    var valor = document.getElementById("cantidad").value;

    var result = parseInt(valor);

    var interes = result * 0.02;

    var total = result + interes;

    document.getElementById("cantidadi").value = "$ " + total;
}

function eliminar() {
    
    document.getElementById("cantidad").value = "";
    document.getElementById("cantidadi").value = "";
}