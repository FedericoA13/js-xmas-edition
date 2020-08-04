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
}

probarValidarNombre();

//Empiezo a escribir pruebas para no probar todo cada vez que haga un cambio.
// console.assert se asegura de que no haya errores. Le agrego un parámetro para que me explique si sale mal
// Ejemplo:
// console.assert (1===2)
// Devuelve error y nada más. Pero si yo pongo:
// console.assert (1===2, "1 no es igual a 2")
// Devuelve: Assertion failed. 1 no es igual a 2
// Si no hay error no da nada al recargar la página. Si hay error, avisa en la consola.
// Es un ejemplo burdo que no se usa pero se va a ver más adelante.
// El concepto de las pruebas unitarias (Unit tests) es escribir código para validar código.
// Se escriben para los compañeros y para el yo futuro.
// Si soy desarrollador y cambio algo, me aviva de que tengo que hacer las pruebas para que el cambio no rompa todo.

// A partir de ahora, cada cosa que haga le creo un archivo de pruebas para chequear.