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

function cicloFor(){
    
    for(let i = 0; i < 3; i++){
        console.log(i);
    }
}

cicloFor()

function tryAndCatch(){
    let conexion = null
    try {
        // manipulo el file
        throwError(3)
    } catch (e) {
        console.log("Se lanzo un error " + e)
    } finally {
        if(conexion != null)
            // llamar a la funcion para cerrar el file 
            // cerrar la conexion
        console.log("Finally")
    }
}

function throwError(i){
    if(i === 5)
        throw new RangeError("Error i = 5")

    console.log(i)
}

tryAndCatch()


series.forEach(
    (item, index, items) => console.log(item + " - " +index)
);


// *************** PROMESAS *********************


function throwErrorPromise(i){
    if(i === 5)
        throw new RangeError("Error i = 5")

    console.log(i)
}

function consultarEnBD() {
    setTimeout(()=> "", 30000)
    return 0
}

let promise = new Promise( (resolve, reject) => {
    let result = consultarEnBD()
    if(result !== 0)
        reject(500)
    resolve(200)
    /**
     * 
     try {
        throwErrorPromise(5)
        setTimeout(()=> resolve("Lanzamos la cancion"), 30000)
    } catch(e) {
        setTimeout(()=> reject("Algo salio mal con la cancion"), 30000)
    } 
     *  */   
})

promise.catch(error => console.log("La cancion NO SALIO"))

promise
    .finally(()=> console.log("Finally"))
    .then(
    result => console.log("Escuchar la cancion = " + result),
    error => {
        console.log("No puedo escuchar la cancion = " + error)
    }
)

console.log("FIN -----")