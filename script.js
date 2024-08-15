// función que muestra una alerta con el mensaje del botón
function mostrarAlerta() {
    alert("Hola!");
}

// agrega un manejador de eventos al div
document.addEventListener("DOMContentLoaded", function() {
    var div = document.querySelector(".button-container");
    
    div.addEventListener("click", function() { // manejador para el clic en el div
        alert("Hola! Soy el div");
    });

    var boton = document.querySelector("button");
    
    boton.addEventListener("click", function(event) { // manejador para el clic en el botón
        mostrarAlerta();
        event.stopPropagation(); // previene que el evento click se propague al div que era el problemo
    });
});
