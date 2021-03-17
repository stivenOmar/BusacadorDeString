let parrafo = document.getElementById("parrafo");
let btnMostrar = document.getElementById("btnMostrar");
let btnEncontrar = document.getElementById("btnEncontrar");
let cadena = document.getElementById("cadena");

function existeCadena(cadenaOriginal, cadenaAEncontrar) {
  descripcion.innerHTML = cadenaOriginal.replaceAll(
    cadenaAEncontrar,
    cadenaAEncontrar.bold()
  );
  return cadenaOriginal.includes(cadenaAEncontrar);
}

btnMostrar.addEventListener("click", (e) => {
  e.preventDefault();
  descripcion.innerText = parrafo.value;
});

btnEncontrar.addEventListener("click", (e) => {
  e.preventDefault();
  let parrafoFormateado = parrafo.value.toLowerCase();
  let cadenaFormateado = cadena.value.toLowerCase();
  if (existeCadena(parrafoFormateado, cadenaFormateado)) {
    respuestaCadena.innerText = "Cadena si existe!";
  } else {
    respuestaCadena.innerText = "Cadena no encontrada!";
  }
});
