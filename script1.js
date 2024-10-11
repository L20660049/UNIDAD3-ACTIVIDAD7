let tiempo = 50; // Tiempo inicial
const temporizadorElemento = document.getElementById("temporizador");

// Función para actualizar el temporizador
function actualizarTemporizador() {
    if (tiempo > 0) {
        temporizadorElemento.textContent = tiempo; // Actualiza el texto del temporizador
        tiempo--; // Reduce el tiempo en 1
    } else {
        clearInterval(cuentaRegresiva); // Detiene la cuenta regresiva
        temporizadorElemento.textContent = "¡Tiempo terminado!"; // Muestra mensaje final
    }
}

// Inicia el temporizador con un retraso de 2 segundos usando setTimeout
setTimeout(() => {
    // Inicia la cuenta regresiva usando setInterval
    const cuentaRegresiva = setInterval(actualizarTemporizador, 1000);
    actualizarTemporizador(); // Llama inmediatamente para mostrar el tiempo inicial
}, 2000); // Retraso de 2000 ms (2 segundos)

