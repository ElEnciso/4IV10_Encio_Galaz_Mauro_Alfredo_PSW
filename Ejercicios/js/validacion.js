//Respuesta 1
function funcionUno() {
    //Varaibles
    let capitalIngresado = document.getElementById("inversion").value;
    let tiempoIngresado = document.getElementById("meses").value;
    let ganancia;
    let totalCambiante;
    let totalFinal;
  
    //Proceso
    let lector = /\D/;
  
    if (lector.test(capitalIngresado) || lector.test(tiempoIngresado)) {
      alert("Ingresa datos validos");
      return false;
    } else {
      capitalIngresado = parseFloat(capitalIngresado);
      tiempoIngresado = parseFloat(tiempoIngresado);
      if (tiempoIngresado > 0 && tiempoIngresado <= 36) {
        if (capitalIngresado > 0 && capitalIngresado <= 999999) {
          for (let i = 0; i < tiempoIngresado; i++) {
            ganancia = capitalIngresado * 0.08;
            totalCambiante = capitalIngresado + ganancia;
            capitalIngresado = totalCambiante;
          }
          totalFinal = totalCambiante;
          alert(
            "Tu inversion en " +
              tiempoIngresado +
              " meses genera: $" +
              totalFinal.toFixed(2)
          );
        } else {
          alert("Ingresa una cantidad de capital valida");
          return false;
        }
      } else {
        alert("Los meses ingresados son invalidos");
        return false;
      }
    }
  }
  
  function vaciar() {
    document.getElementById("inversion").value = "";
    document.getElementById("meses").value = "";
  }
  
  //Respuesta 2
  function secondF() {
    let salarioV = document.getElementById("pagoV").value;
    let lector = /\D/;
  
    if (lector.test(salarioV)) {
      alert("Ingresa un salario valido");
      return false;
    } else {
      salarioV = parseFloat(salarioV);
      if (salarioV > 0 && salarioV < 999999) {
        let pagoV = salarioV * 5;
        let extra = 0.1 * pagoV;
        let salarioF = pagoV + extra;
        let impuestos = 0.12 * salarioF;
        let total = salarioF - impuestos;
        alert("Tu cobro mensual es de: $" + total);
      } else {
        alert("Ingresa un salario valido");
        return false;
      }
    }
  }
  
  function secondV() {
    document.getElementById("pagoV").value = "";
  }
  
  //Respuesta 3
  function thirdF() {
    //Variables
    let productoIngresado = document.getElementById("producto").value;
    let marcaIngresada = document.getElementById("marca").value;
    let tipoIngresado = document.getElementById("tipoProducto").value;
    let precioIngresado = document.getElementById("precioProducto").value;
    let lector = /\D\./;
    let lector2 = /\d/;
  
    if (
      lector.test(precioIngresado) ||
      lector2.test(
        productoIngresado ||
          lector2.test(marcaIngresada) ||
          lector2.test(tipoIngresado)
      )
    ) {
      alert("Ingresa datos validos");
      return false;
    } else {
      //Cambiando tipo de dato
      productoIngresado = String(productoIngresado);
      marcaIngresada = String(marcaIngresada);
      tipoIngresado = String(tipoIngresado);
      precioIngresado = parseFloat(precioIngresado);
      //Proceso
      if (precioIngresado > 0 && precioIngresado < 999999) {
        if (
          productoIngresado != "" &&
          marcaIngresada != "" &&
          tipoIngresado != ""
        ) {
          if (
            productoIngresado.length < 100 &&
            marcaIngresada.length < 100 &&
            tipoIngresado.length < 100
          ) {
            //Varibles finales
            let precioFinal;
            let descuento;
            //Dato ingresado a minusculas
            tipoIngresado = tipoIngresado.toLowerCase();
            //Calculos de cada caso
            switch (tipoIngresado) {
              case "papa":
                descuento = precioIngresado * 0.02;
                precioFinal = precioIngresado - descuento;
                alert(
                  'Tu producto "' +
                    productoIngresado +
                    '" de la marca "' +
                    marcaIngresada +
                    '" tiene un descuento del 2% y su precio final es de: $' +
                    precioFinal.toFixed(2)
                );
                break;
              case "pastelito":
                descuento = precioIngresado * 0.1;
                precioFinal = precioIngresado - descuento;
                alert(
                  'Tu producto "' +
                    productoIngresado +
                    '" de la marca "' +
                    marcaIngresada +
                    '" tiene un descuento del 10% y su precio final es de: $' +
                    precioFinal.toFixed(2)
                );
                break;
              case "lacteo":
                descuento = precioIngresado * 0.075;
                precioFinal = precioIngresado - descuento;
                alert(
                  "Tu producto " +
                    productoIngresado +
                    " de la marca " +
                    marcaIngresada +
                    " tiene un descuento del 7.5% y su precio final es de: $" +
                    precioFinal.toFixed(2)
                );
                break;
              default:
                precioFinal = precioIngresado;
                alert(
                  "Tu producto " +
                    productoIngresado +
                    " de la marca " +
                    marcaIngresada +
                    " no tiene descuento por lo tanto su precio es: $" +
                    precioFinal
                );
                break;
            }
          } else {
            alert("Ingresa en los campos informacion valida");
            return false;
          }
        } else {
          alert("Llena los campos");
          return false;
        }
      } else {
        alert("Ingresa un precio valido");
        return false;
      }
    }
  }
  
  function thirdV() {
    document.getElementById("producto").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("tipoProducto").value = "";
    document.getElementById("precioProducto").value = "";
  }
  
  //Respuesta 4
  function fourthF() {
    //Variables
    let parcial1 = document.getElementById("parcial1").value;
    let parcial2 = document.getElementById("parcial2").value;
    let parcial3 = document.getElementById("parcial3").value;
    let examenFinal = document.getElementById("examenFinal").value;
    let trabajoFinal = document.getElementById("trabajoFinal").value;
  
    //Lector
    let lector = /\D\./;
  
    //Validacion extra
    if (
      lector.test(parcial1) ||
      lector.test(parcial2) ||
      lector.test(parcial3) ||
      lector.test(examenFinal) ||
      lector.test(trabajoFinal)
    ) {
      alert("Ingresa datos validos");
      return false;
    } else {
      //Parseo de datos
      parcial1 = parseFloat(parcial1);
      parcial2 = parseFloat(parcial2);
      parcial3 = parseFloat(parcial3);
      examenFinal = parseFloat(examenFinal);
      trabajoFinal = parseFloat(trabajoFinal);
  
      //Proceso
      if (
        parcial1 >= 0 &&
        parcial2 >= 0 &&
        parcial3 >= 0 &&
        examenFinal >= 0 &&
        trabajoFinal >= 0
      ) {
        if (
          parcial1 <= 10 &&
          parcial2 <= 10 &&
          parcial3 <= 10 &&
          examenFinal <= 10 &&
          trabajoFinal <= 10
        ) {
          //Variables Finales
          let promedioParciales;
          let porcentajeParciales;
          let porcentajeExamenFinal;
          let porcentajeTrabajoFinal;
          let calificacionFinal;
  
          //Calculos
          promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
          alert(
            "Tu promedio de los parciales es: " + promedioParciales.toFixed(2)
          );
          porcentajeParciales = promedioParciales * 0.55;
          porcentajeExamenFinal = examenFinal * 0.3;
          porcentajeTrabajoFinal = trabajoFinal * 0.15;
          calificacionFinal =
            porcentajeParciales + porcentajeExamenFinal + porcentajeTrabajoFinal;
          alert("Tu calificacion final es: " + calificacionFinal.toFixed(2));
        } else {
          alert("Ingresa calificaciones validas");
          return false;
        }
      } else {
        alert("Ingresa una calificacion valida ");
        return false;
      }
    }
  }
  
  function fourthV() {
    document.getElementById("parcial1").value = "";
    document.getElementById("parcial2").value = "";
    document.getElementById("parcial3").value = "";
    document.getElementById("examenFinal").value = "";
    document.getElementById("trabajoFinal").value = "";
  }
  
  //Respuesta 5
  function fifthF() {
    //Variables
    let hombres = document.getElementById("hombres").value;
    let mujeres = document.getElementById("mujeres").value;
  
    //Lector
    let lector = /\D/;
  
    //Validacion extra
    if (lector.test(hombres) || lector.test(mujeres)) {
      alert("Ingresa datos validos");
      return false;
    } else {
      //Parseo de datos
      hombres = parseInt(hombres);
      mujeres = parseInt(mujeres);
  
      //Proceso
      if (hombres >= 0 && mujeres >= 0) {
        if (hombres <= 100 && mujeres <= 100) {
          //Variables Finales
          let porcentajeHombres;
          let porcentajeMujeres;
          let totalPersonas;
  
          //Calculos
          totalPersonas = hombres + mujeres;
          porcentajeHombres = (hombres / totalPersonas) * 100;
          porcentajeMujeres = (mujeres / totalPersonas) * 100;
          alert(
            "El 100% de personas en el grupo es: " +
              totalPersonas +
              ", el porcentaje de hombres es: " +
              porcentajeHombres.toFixed(0) +
              "% y el porcentaje de mujeres es: " +
              porcentajeMujeres.toFixed(0) +
              "%"
          );
        } else {
          alert("Ingresa datos validos");
          return false;
        }
      } else {
        alert("Ingresa datos validos");
        return false;
      }
    }
  }
  
  function fifthV() {
    document.getElementById("hombres").value = "";
    document.getElementById("mujeres").value = "";
  }
  
  //Validaciones de teclado
  
  function inputNumeros(e) {
    let teclado = document.all ? e.keyCode : e.which;
    if (teclado == 8) return true;
    let patron = /[0-9\d .]/;
    let codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
  }
  
  function inputLetras() {
    var charCode = event.keyCode;
  
    if (
      (charCode > 64 && charCode < 91) ||
      (charCode > 96 && charCode < 123) ||
      charCode == 8
    )
      return true;
    else return false;
  }
  //Respuesta 6
function sixth() {
    let ingresoNacimiento = document.getElementById("fecha").value;
    let nacimientoIngresado = new Date(ingresoNacimiento);
    let fechaActual = new Date();
    let mesActual = fechaActual.getMonth();
    let añoActual = fechaActual.getFullYear();
    let edadAño;
    let edadMes;
  
    if (!!nacimientoIngresado.valueOf()) {
      año = parseInt(nacimientoIngresado.getFullYear());
      mes = parseInt(nacimientoIngresado.getMonth());
      dia = parseInt(nacimientoIngresado.getDate());
    }
  
    if (año > añoActual || año < "1940") {
      alert("No se puede ingresar ese año ");
      return false;
    } else {
      edadAño = añoActual - año;
      edadMes = mesActual - mes;
  
      if (edadMes < 0) {
        edadAño--;
      }
  
      alert("Tu edad es de: " + edadAño + " años");
    }
  }
  
  //Respuesta 7
  function seventh() {
    let numeroUno = document.getElementById("numeroUno").value;
    let numeroDos = document.getElementById("numeroDos").value;
    let resultado;
    let lector = /\D/;
  
    if (lector.test(numeroUno) || lector.test(numeroDos)) {
      alert("Ingresa datos validos");
      return false;
    } else {
      numeroUno = parseFloat(numeroUno);
      numeroDos = parseFloat(numeroDos);
      if (numeroUno < 1000 || numeroDos < 1000) {
        if (numeroUno > numeroDos) {
          resultado = Math.pow(numeroUno, numeroDos);
          alert(
            "El numero mayor es: " +
              numeroUno +
              " entonces el resultado de la operacion es: " +
              resultado
          );
        } else if (numeroDos > numeroUno) {
          resultado = numeroDos / numeroUno;
          alert(
            "El numero mayor es: " +
              numeroDos +
              " entonces el resultado de la operacion es: " +
              resultado
          );
        } else if (numeroDos == numeroUno) {
          resultado = numeroUno * numeroDos;
          alert(
            "Los numeros son iguales entonces el resultado de la operacion es: " +
              resultado
          );
        }
      } else {
        alert("Ingresa numeros menores a 1000");
        return false;
      }
    }
  }
  
  function seventhI(e) {
    let teclado = document.all ? e.keyCode : e.which;
    if (teclado == 8) return true;
    let patron = /[0-9\d .]/;
    let codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
  }
  
  function seventhV() {
    document.getElementById("numeroUno").value = "";
    document.getElementById("numeroDos").value = "";
  }
  
  //Respuesta 8
  function eighth() {
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let numberThree = document.getElementById("numberThree").value;
    let mayor;
    let lector = /\D/;
  
    if (
      lector.test(numberOne) ||
      lector.test(numberTwo) ||
      lector.test(numberThree)
    ) {
      alert("Ingresa datos validos");
      return false;
    } else {
      mayor = Math.max(numberOne, numberTwo, numberThree);
      alert("El numero mayor es: " + mayor);
    }
  }
  
  //Respuesta 9
  function ninth() {
    let salario = document.getElementById("payment").value;
    let horasTrabajadas = document.getElementById("hours").value;
    let horasSobrantes;
    let horasDoble;
    let horasTriple;
    let pago;
    let pagoExtra;
    let pagoDoble;
    let pagoTriple;
    let pagoTotal;
    let lector = /\D/;
  
    if (
      lector.test(salario) ||
      lector.test(horasTrabajadas) ||
      salario == 0 ||
      horasTrabajadas == 0
    ) {
      alert("Ingresa datos validos");
      return false;
    } else {
      if (horasTrabajadas > 40) {
        pagoExtra = true;
      } else {
        pagoExtra = false;
      }
  
      if (
        salario > 0 &&
        salario < 999999 &&
        horasTrabajadas > 0 &&
        horasTrabajadas < 100000
      ) {
        if (pagoExtra == true) {
          horasSobrantes = horasTrabajadas - 40;
          if (horasSobrantes > 8) {
            horasTriple = horasSobrantes - 8;
            horasDoble = horasSobrantes - horasTriple;
            pagoDoble = horasDoble * (salario * 2);
            pagoTriple = horasTriple * (salario * 3);
            pago = 40 * salario;
            pagoTotal = pago + pagoDoble + pagoTriple;
          } else {
            horasDoble = horasSobrantes;
            pagoDoble = horasDoble * (salario * 2);
            pago = 40 * salario;
            pagoTotal = pago + pagoDoble;
          }
        } else {
          pagoTotal = horasTrabajadas * salario;
        }
        alert("Tu pago de todo es: $" + pagoTotal);
      } else {
        alert("Ingresa datos validos");
        return false;
      }
    }
  }
  
  //Respuesta 10
  function tenth() {
    let salario = parseInt(document.getElementById("lastment").value);
    let antiguedad = parseInt(document.getElementById("years").value);
    let utilidad;
    let pago;
    let lector = /\D/;
  
    if (lector.test(salario) || lector.test(antiguedad)) {
      alert("Ingresa datos validos");
      return false;
    } else {
      if (antiguedad > 0 && antiguedad < 70) {
        if (salario > 0 && salario < 999999) {
          if (antiguedad < 1) {
            utilidad = 0.05;
          } else if (antiguedad >= 1 && antiguedad <= 2) {
            utilidad = 0.07;
          } else if (antiguedad >= 2 && antiguedad <= 5) {
            utilidad = 0.1;
          } else if (antiguedad >= 5 && antiguedad <= 10) {
            utilidad = 0.15;
          } else if (antiguedad > 10) {
            utilidad = 0.2;
          }
          pago = salario * utilidad;
          alert("Tu utilidad es: $" + pago);
        } else {
          alert("Ingresa un salario valido");
          return false;
        }
      } else {
        alert("Ingresa unos años validos");
        return false;
      }
    }
  }
  
  function tenthI(e) {
    let teclado = document.all ? e.keyCode : e.which;
    if (teclado == 8) return true;
    let patron = /[0-9\d .]/;
    let codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
  }
  
  function tenthV() {
    document.getElementById("lastment").value = "";
    document.getElementById("years").value = "";
  }