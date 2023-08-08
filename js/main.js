
function flipCoin() {
    var resultElement = document.getElementById("result");
    // Generar un número aleatorio entre 0 (incluido) y 1 (excluido)
    var flipResult = Math.random();
    
    if (flipResult < 0.5) {
        resultElement.innerText = "Resultado: Cara";
    } else {
        resultElement.innerText = "Resultado: Cruz";
    }
}