function nacionalidad() {
  const nombre = document.getElementById("nombre").value;
  const pais = document.getElementById("pais").value;
  const edad = parseInt(document.getElementById("edad").value);
  const generoMasculino = document.getElementById("masculino").checked;
  const generoFemenino = document.getElementById("femenino").checked;

// VALIDAR FORMULARIO
  if(nombre === '' || pais === '' || isNaN(edad)){
    alert('Complete los campos')
    return
  }

  // EJECUTAR FUNCION
  if (edad <= 18 && generoMasculino == true) {
    alert(
      `El Joven ${nombre} es de ${pais} y tiene ${edad} años, es menor de edad.`
    );
  } else if (edad <= 18 && generoFemenino) {
    alert(
      `La Señorita ${nombre} es de ${pais} y tiene ${edad} años, es menor de edad.`
    );
  } else if (edad > 18 && generoFemenino) {
    alert(
      `La Señora ${nombre} es de ${pais} y tiene ${edad} años, es mayor de edad`
    );
  } else {
    alert(
      `El Sr ${nombre} es de ${pais} y tiene ${edad} años, es mayor de edad`
    );
  }
}
