console.log('Test');

const { exec } = require("child_process");

// Función para generar un número aleatorio en un rango dado
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para simular actividad con pyautogui
function simularActividad() {
    // Generar una posición aleatoria para el mouse dentro de la pantalla
    const x = getRandomInt(0, 1920); // Ancho de la pantalla
    const y = getRandomInt(0, 1080); // Alto de la pantalla

    // Ejecutar el comando de Python para mover el mouse a la posición generada
    exec(`python -c "import pyautogui; pyautogui.moveTo(${x}, ${y})"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
    });

    // Generar una tecla aleatoria
    const keyCode = getRandomInt(65, 90); // Códigos ASCII para las letras mayúsculas
    const keyChar = String.fromCharCode(keyCode);

    // Ejecutar el comando de Python para simular la pulsación de tecla
    exec(`python -c "import pyautogui; pyautogui.press('${keyChar}')"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
    });

    // Esperar un tiempo antes de terminar
    setTimeout(() => {
        console.log("Fin");
    }, 1000);
}

// Iniciar la simulación de actividad
simularActividad();
