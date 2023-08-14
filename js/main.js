

function adivinaElNumero() {
    var numeroSecreto = Math.floor(Math.random() * 100) + 1;  // Número secreto entre 1 y 100
    var intentos = 5;  // El usuario tiene 5 intentos para adivinar el número
    
    for(var i = 0; i < intentos; i++) {
        var numeroUsuario = prompt("Introduce un número entre 1 y 100, tienes " + (intentos - i) + " intentos restantes.");
        
        if (numeroUsuario == numeroSecreto) {
            alert("¡Has acertado el número secreto! Es " + numeroSecreto);
            return;
        } else if (numeroUsuario < numeroSecreto) {
            alert("Tu número es demasiado bajo. Intenta de nuevo.");
        } else if (numeroUsuario > numeroSecreto) {
            alert("Tu número es demasiado alto. Intenta de nuevo.");
        }
    }
    
    alert("Lo siento, no has adivinado el número secreto. El número secreto era " + numeroSecreto);
}
adivinaElNumero();



