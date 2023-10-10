document.addEventListener("DOMContentLoaded", function() {
    const menuDesplegable = document.getElementById("botonHamburguesa");
    const contenido = document.getElementById("contenidoMenu");

    menuDesplegable.addEventListener("click", function() {
        if (contenido.classList.contains("menuHamburguesa")) {
            contenido.classList.remove("menuHamburguesa");
        } else {
           contenido.classList.add("menuHamburguesa");
           
        }
    });
});
