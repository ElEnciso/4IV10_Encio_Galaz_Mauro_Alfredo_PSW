const leer = document.querySelectorAll('#')


//p1

//p2

//p3
function problema3(){
    //definimos alfabeto 

    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    //OBTENER ENTRADA DE DATOS  

    var p3_input = document.querySelector('#p3-input').value;

    //separar todo por ,

    var p3_palabras = p3_input.split(',');

    //funcion para recuperar cada palabra, eliminar espacios

    p3_palabras = p3_palabras.map(function(palabras){
        return palabras.replace(/\s/g, '').toUppercase();
    });

    //calcular caracteres unicos

    var p3_respuesta = '';

    //funcion calcula contenido y separa el caracter para contar

    p3_palabras.forEach(function(palabra, i){
        var letras_unicas = [];
        var palabra_array = palabra.split('');

        //iterar el alfabeto

        alfabeto.forEach(function(letra, j){
            //iterar palabras
            palabra_array.forEach(function(letras_palabras, k){
                //comprobar que la letra este dentro del alfabeto
                if(letras_palabras == letra){
                    //se agrega las letras unicas en un array
                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        //vamos a contar la salida
        p3_respuesta += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });
    //imprimir salida
    document.querySelector('#p3-output').textContent = p3_respuesta;
}