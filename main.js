//Etapa 1- Entrada de datos
let monto= parseInt(prompt("Ingrese el monto"));
let cuotas= parseInt(prompt("Ingrese la cantidad de cuotas: 3/6/12"))
let montoConIntereses= 0;
let interes= 0;
let mensaje="";

//Función 1
const calcularInteres = () =>{

    //Ciclo condicional
    if (cuotas===3) { 
        interes=20;
        mensaje= "Los intereses son del 20%"
    } else if (cuotas===6) {
        interes=30;
        mensaje="Los intereses son del 30%"
    } else if (cuotas===12) { 
        interes=40;   
        mensaje="Los intereses son del 40%"
    } 

    //Ciclo repetitivo
    while (cuotas!=3 && cuotas!=6 && cuotas!=12){
        interes=0;
        mensaje="Ingrese un numero de cuotas valido: 3, 6, 12";
        return
    }
}

//Función 2
const calcularMontoConInteres =() =>{
    montoConIntereses=monto+(monto*interes/100)
}

calcularInteres();
calcularMontoConInteres();

if (interes=== 0) {
    alert(mensaje)
} else {
    alert(mensaje)
    alert("Monto total con intereses: " + montoConIntereses)
}




