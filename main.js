// //Etapa 1- Entrada de datos
// let monto= parseInt(prompt("Ingrese el monto"));
// let cuotas= parseInt(prompt("Ingrese la cantidad de cuotas: 3/6/12"))
// let montoConIntereses= 0;
// let interes= 0;
// let mensaje="";

// //Función 1
// const calcularInteres = () =>{

//     //Ciclo condicional
//     if (cuotas===3) { 
//         interes=20;
//         mensaje= "Los intereses son del 20%"
//     } else if (cuotas===6) {
//         interes=30;
//         mensaje="Los intereses son del 30%"
//     } else if (cuotas===12) { 
//         interes=40;   
//         mensaje="Los intereses son del 40%"
//     } 

//     //Ciclo repetitivo
//     while (cuotas!=3 && cuotas!=6 && cuotas!=12){
//         interes=0;
//         mensaje="Ingrese un numero de cuotas valido: 3, 6, 12";
//         return
//     }
// }

// //Función 2
// const calcularMontoConInteres =() =>{
//     montoConIntereses=monto+(monto*interes/100)
// }

// calcularInteres();
// calcularMontoConInteres();

// if (interes=== 0) {
//     alert(mensaje)
// } else {
//     alert(mensaje)
//     alert("Monto total con intereses: " + montoConIntereses)
// }



//Builder

class Celular {
  constructor(id, brand, model, price, stock) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.stock = stock;
  }
}

class CelularsHandler{
  constructor(celulars) {
    this.celulars = celulars;
  }

  getCelularById(id) {
    const result = this.celulars.find((celular) => {
      return celular.id === id;
    });

    // Result validation
    if (result) {
      return result;
    } else {
      return 'Invalid or missing ID';
    }
  }

  getCelularByModel(model) {
    const result = this.celulars.find((celular) => {
      return celular.model === model;
    });
    if (result) {
      return result;
    } else {
      return 'Bad or missing model';
    }
  }

}

// Celular array
const celulars = [];
celulars.push( new Celular(1, 'Apple', 'iPhone11', 600, 456 ));
celulars.push( new Celular(2, 'Apple', 'iPhone11 Pro', 700, 287 ));
celulars.push( new Celular(3, 'Apple', 'iPhone12', 700, 123 ));
celulars.push( new Celular(4, 'Apple', 'iPhone12 Pro', 800, 78 ));
celulars.push( new Celular(5, 'Apple', 'iPhone12 Pro Max', 850, 67 ));
celulars.push( new Celular(6, 'Apple', 'iPhone13', 850, 366 ));
celulars.push( new Celular(7, 'Apple', 'iPhone13 Pro', 900, 47 ));
celulars.push( new Celular(8, 'Apple', 'iPhone13 Pro Max', 950, 356 ));
celulars.push( new Celular(9, 'Apple', 'iPhone14', 900, 1256 ));
celulars.push( new Celular(10, 'Apple', 'iPhone14 Pro', 1000, 4546 ));
celulars.push( new Celular(11, 'Apple', 'iPhone14 Pro Max', 1200, 8456 ));


// console.log(celulars);

const celularsHandler = new CelularsHandler(celulars);

const model = prompt('Ingrese el modelo:');

alert(JSON.stringify(celularsHandler.getCelularByModel(model)));

console.log(celulars);