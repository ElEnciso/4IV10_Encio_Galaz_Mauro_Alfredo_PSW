const formulario = document.getElementById('formulario');
let tableref = document.getElementById('table');

/*function calcular(e){

    e.preventDefault();

    var monto_inicial = document.getElementById('monto_inicial').value;
    if (monto_inicial > 100000){
        alert("El Numero es muy alto ");
    }
    else{
        var inter_comp = monto_inicial * 1.331; /* = ((1 + (0.3 / 3))^3)*/
        /*var interes = inter_comp * 0.3;
        console.log(interes);
    }

    console.log(inter_comp.toFixed(2));

    let tableref = document.getElementById('table');

    let newrow = tableref.insertRow(tableref.rows.length);

    let newcell = newrow.insertCell(0);
    var number = 1;
    newcell.textcontent = number;
    if (typeof calcular == 'function'){
        number++;
    }
    else{
        alert("Esto no se puede hacer ")
    }

    newcell = newrow.insertCell(1);
    newcell.textcontent = monto_inicial;

    newcell = newrow.insertCell(2);
    newcell.textcontent = getElementById('monto_inicial');

    newcell = newrow.insertCell(3);
    newcell.textcontent = inter_comp;

    newcell = newrow.insertCell(4);
    newcell.textcontent = inter_comp;

    newcell = newrow.insertCell(2);
    newcell.textcontent = inter_comp;

    return false;
}*/

function no_punto(event) { 
    var e = event || window.event;
    var key = e.keyCode || e.which;

    if ( key === 110 || key === 190 || key === 188 ) {     
        e.preventDefault();     
    }
}

//formulario.addEventListener('submit', calcular(e), e == false);

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    
    var monto_inicial = document.getElementById('monto_inicial').value;
    if (monto_inicial > 100000){
        alert("El Numero es muy alto ");
    }
    else{
        var inter_comp = monto_inicial * 1.331; /* = ((1 + (0.3 / 3))^3)*/
        var interes = inter_comp * 0.3;
        console.log(interes);
    }

    console.log(inter_comp.toFixed(2));

    let tableref = document.getElementById('table');

    var newrow = tableref.insertRow(tableref.rows.length);

    var newcell = newrow.insertCell(0);
    var number = 1;
    newcell.innerHTML = number;
    
    number++;

    var newcell1 = newrow.insertCell(1);
    newcell1.textcontent = monto_inicial;

    var newcell2 = newrow.insertCell(2);
    newcell2.innerHTML = monto_inicial;

    var newcell4 = newrow.insertCell(3);
    newcell.textcontent = inter_comp;

    var newcell5 = newrow.insertCell(4);
    newcell.textcontent = inter_comp;

    var newcell6 = newrow.insertCell(2);
    newcell.textcontent = inter_comp;
});

