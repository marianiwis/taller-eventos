//primera funcion para mostrar una alerta con el mensaje del boton
function mostrarAlerta(){
    alert("Hola!");
}

//agora agregamos un manejador de eventos al div pai
document.addEventListener("DOMContentLoaded", function(){    //domblablabla asegura que el codigo se ejecute despues de que el contenido del doc este full cargado
    var div = document.querySelector(".button-container");  //selecciona el div con la clase del boton
    div.addEventListener("click", function(){              //agrega un manejador de eventos para el click en el div que muestra una alertaush
        alert("Hola! Soy el div");
    });
});