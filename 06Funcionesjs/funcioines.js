/*
Las variables que se ocupan dentro de js son 3

var -> que actualmente esta en sustitucion:
let -> es una variable "protegida" porque solo funciona dentro de una funcion con metodo declarado en un fragmento de codigo
const -> es el valor constante en todo el documento y no puede cambiar su estado
*/

var x = "x";

if(true){
    //declaramos una constante
    const x = "y";
    console.log(x);
}

//vamos a ver la diferencia entre una funcion y una funcion flecha

//por ejemplo vamos a sumar 2 numeros

function sumarFuncionNormal(n1,n2){
    return n1+n2
}

console.log(`la suma de (3,4): ${sumarFuncionNormal(3,4)}`); //``se ocupa para cuando nosotros queremos modificar el comportamiento de HTML o queremos incrustar en JS codigo de HTML

/*Una funcion flecha tiene como estructura :
"Cadena" -> id, clase, atributo, name
*/

const sumarFuncionFlecha = (n1,n2) => n1+n2;

console.log(`la suma de (5,4): ${sumarFuncionFlecha(3,4)}`); 

const razasDePerros = [
    "gran danes",
    "pastor aleman",
    "chihuaha",
    "pitbull",
    "dalmata",
    "san bernardo",
];

//con un for normal

for(let i = 0; i < razasDePerros.length; i++){
    console.log(razasDePerros[i]);
};

for(const raza of razasDePerros){
    console.log(raza);
};

for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}

/*forEach es poder iterar sobre elementos del arreglo que no devuelven nada  */

razasDePerros.forEach(raza, indice, arregloOriginal) => console.log(raza);
    
