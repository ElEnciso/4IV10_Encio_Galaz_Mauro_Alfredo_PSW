const formulario = document.getElementById('formulario');
let tableref = document.getElementById('table');

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

    var newcell = newrow.insertCell(1);
    newcell.innerHTML = monto_inicial;

    var newcell = newrow.insertCell(2);
    newcell.innerHTML = monto_inicial;

    var newcell = newrow.insertCell(3);
    newcell.innerHTML = monto_inicial;

    var newcell = newrow.insertCell(4);
    newcell.innerHTML = monto_inicial;

    var newcell = newrow.insertCell(2);
    newcell.innerHTML = monto_inicial;
});

