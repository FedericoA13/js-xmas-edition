function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert (
      validarNombre("Fode") === (""),
      "Validar nombre falló con un nombre válido"
  )
}

probarValidarNombre();

function probarValidarCiudad(){
    console.assert(
        validarCiudad("") === "Este campo no puede estar vacío",
        "Validar ciudad no mostró error cuando la ciudad es vacía",
    )

    console.assert(
        validarCiudad("Buenos Aires") === "",
        "Validar ciudad falló con una ciudad válida"
    )
}

probarValidarCiudad();

function probarValidarRegalo(){
    console.assert(
        validarRegalo("") === "Tenés que pedir algo como regalo de Navidad!",
        "Validar regalo no validó que no se pida ningún regalo")
        
    console.assert(
        validarRegalo("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === 
        "Este campo no puede contener más de 100 caracteres", 
        "Validar regalo no validó que el campo no supere los 100 caracteres"
    )

    console.assert(
        validarRegalo("Regalo") = (""),
        "Validar regalo falló con un regalo válido"
    )
}

probarValidarRegalo();

// Esto ejemplos significan: Si el string vacío no devuelve "Este campo debe tener al menos 1 caracter", entonces
// va a dar error junto a la leyenda "Validar nombre no validó que el nombre no sea vacío".

// Empiezo a escribir pruebas para no probar todo cada vez que haga un cambio.
// console.assert se asegura de que no haya errores. Le agrego un parámetro para que me explique si sale mal
// Ejemplo:
// console.assert (1===2)
// Devuelve error y nada más. Pero si yo pongo:
// console.assert (1===2, "1 no es igual a 2")
// Devuelve: Assertion failed. 1 no es igual a 2
// El segundo parámetro es lo que quiero que me diga si no funciona.
// Si no hay error no da nada al recargar la página. Si hay error, avisa en la consola.
// Es un ejemplo burdo que no se usa pero se va a ver más adelante.
// El concepto de las pruebas unitarias (Unit tests) es escribir código para validar código.
// Se escriben para los compañeros y para el yo futuro.
// Si soy desarrollador y cambio algo, me aviva de que tengo que hacer las pruebas para que el cambio no rompa todo.

// A partir de ahora, a cada cosa que haga le creo un archivo de pruebas para chequear.