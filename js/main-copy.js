const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value
const ciudad = $form.ciudad.value
const comportamiento = $form.comportamiento.value
// El .nombre es por EL NAME del input, que es nombre. No tiene nada que ver con una class.
// Es lo mismo que poner const nombre = document.querySelector("[name=nombre]").value;
// O que poner const nombre = document.querySelector("#nombre").value;
const descripcionRegalo = $form['descripcion-regalo'].value;
// Los corchetes sacan el atributo name del HTML
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
        return "Este campo debe tener al menos 1 caracter";
    }
    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }
    return ''
}

const ciudades = document.querySelectorAll("[name-ciudad]").value

// TAREA: Validar la ciudad y el regalo para que no sean vacíos. Crear funciones para validar en pruebas.js

function validarCiudad(ciudad){
    if (ciudad.length === 0) {
        return "Este campo no puede estar vacío";
    }
    return ''
};

function validarRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0) {
        return "Tenés que pedir algo como regalo de Navidad!";
    }
    if (descripcionRegalo.length >= 100) {
        return "Este campo no puede contener más de 100 caracteres";
    };

    return ""
};