function validar(formulario){
    if(formulario.nombre.value.length <=3){
        alert("Favor de ingresar mas de 3 caracteres en campo nombre");
        formulario.nombre.focus();
        return 0;

    }

    var checarABC = "qwertyuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM"

    var cadenaNombre = formulario.nombre.value;

    alert(cadenaNombre);

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j= 0; j <checarABC.length;){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if (j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Ingresa solo letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }
    var prueba = /([Aa-ZZ]+[0-9]+\.){10}\@([Aa-Zz]+[0-9]){8}\.([Aa-Zz]+[0-9]){3}/g;

    alert("Email" + (prueba.test(email) ? " ": " NO ") + "valido");

    return prueba.test;
}
