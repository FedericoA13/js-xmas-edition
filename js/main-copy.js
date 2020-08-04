const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value
const ciudad = $form.ciudad.value
const comportamiento = $form.comportamiento.value
const descripcionRegalo = $form['descripcion-regalo'].value;

// El .nombre es por el name del input, que es nombre. No tiene nada que ver con una class.
// Es lo mismo que poner const nombre = document.querySelector("[name=nombre]").value;
// Los corchetes sacan el atributo name del HTML
// O que poner const nombre = document.querySelector("#nombre").value;

// Caso descripcionRegalo: si HTML lee $form.descripcion-regalo.value, piensa que saco $form.descripcion y le resto
// regalo.value 
// Entonces, cuando hay un atributo con el name escrito así, se pone entre corchetes y con comillas.

console.log (nombre);
console.log (ciudad);
console.log (comportamiento);
console.log (descripcionRegalo);

// Ahora voy a crear una función que va a validar el nombre. Toma como parámetro el nombre, que hay que validar.
// Debe tener al menos un caracter.
// Debe tener menos de 50 caracteres.

function validarNombre(nombre){
    if (nombre.length === 0) {
        return "Este campo debe tener al menos un caracter";
    }
    if (nombre.length >= 50) {
       return 'Este campo debe tener menos de 50 caracteres'
    }
    return ''
}


// TAREA: Validar la ciudad y el regalo para que no sean vacíos. Crear funciones para validar en pruebas.js