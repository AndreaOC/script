// Función para generar un número aleatorio entre un rango dado
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generar un número aleatorio entre 1 y 100
  var numeroAleatorio = generarNumeroAleatorio(1, 100);
  console.log("Número aleatorio entre 1 y 100:", numeroAleatorio);
  