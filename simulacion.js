const robot = require("robotjs");

// Función para generar un número aleatorio en un rango dado
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para simular actividad
function simularActividad() {
    setInterval(() => {
        // Obtener el tamaño de la pantalla
        const screenSize = robot.getScreenSize();
        // Generar una posición aleatoria para el mouse dentro de la pantalla
        const x = getRandomInt(0, screenSize.width);
        const y = getRandomInt(0, screenSize.height);
        // Mover el mouse a la posición generada
        robot.moveMouse(x, y);

        /*// Generar una tecla aleatoria
        const keyCode = getRandomInt(65, 90); // Códigos ASCII para las letras mayúsculas
        // Simular la pulsación de tecla
        robot.keyTap(String.fromCharCode(keyCode));*/
    }, 2000); // Intervalo de tiempo en milisegundos (aquí 2000 ms = 2 segundos // 60000 = 1 min)
}

// Iniciar la simulación de actividad
simularActividad();
