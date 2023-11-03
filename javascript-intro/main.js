/*
Aca podemos colocar mensajes
en varias lineas
*/

console.log('Hola'); // aca ponemos nuestro mensaje


function hacerAlgo(){

    if(true){
        var otraVariable = 1;
        let variable = 0;

        console.log(otraVariable);
    }
    console.log(otraVariable);
 };

 hacerAlgo();
 
 let variable = 0;
 var es = true;
 const COLOR_PREDEFINIDO = "GREEN";


 console.log(typeof variable)
 console.log(typeof COLOR_PREDEFINIDO)
 console.log(typeof es)
 console.log(typeof(null))
 console.log(typeof(xxxxxxx))


 let series = ["Loky", "Manifiesto", "Juegos de Tronos"];
 let cars =new Array()

 console.log(series.length)
 console.log(series[0])
 series[0] = "La casa de papel"
 console.log(series[0])
let serie = series[2]
console.log(serie)
console.log(typeof series)



series.forEach(
    function(item, index, items){
        console.log(item + " - " +index);
     }
);

function suma(num1 = 3, num2 = 1){ 
    let resultado = num1 + num2;
    return resultado;
}

console.log(suma(2, 2))
console.log(suma(2))
console.log(suma())


function mensaje(opcion){ 

    // || - OR
    // && - AND

    if(opcion === 5 || (opcion < 3 && true)){
        return "MAFE";
    } else if (opcion === 2) {
        return "Marisol"
    } else if (opcion === 3) {
        return "Jhon"
    } else if (opcion === 4) {
        return "Tania"
    } else if (opcion != 5) {
        return "Cesar"
    } else {
        return "Otro Estudiante"
    }
}

console.log(mensaje(3));

let opcion = 22
let valor = opcion === 2 ? "Hola" : "Adios";
console.log(valor)

if( opcion === 2){
    valor =  "Hola";
} else  {
    valor =  "Adios"
}

console.log(valor)

function cicloWhile(i = 0){
    while(i < 3){
        console.log(i);
        i++;
    }
}

function cicloDoWhile(i = 0){
    do {
        console.log(i);
        i++;
    }
    while(i < 3);
}

cicloWhile(2)
cicloDoWhile(10)