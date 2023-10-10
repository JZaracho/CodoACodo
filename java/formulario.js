let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let consulta = document.getElementById("consulta");
let formulario = document.getElementById("miFormulario");

let validarNombre = function(e){
    if (nombre.value == '') {
        alert("Por favor, ingrese su nombre.");
        e.preventDefault(); // Evita que el formulario se envíe
    } else {
        if (nombre.value.length < 3){
            alert("Por favor, ingrese un nombre valido");
            e.preventDefault();
        }
    }
    
}

let validarApellido = function(e){
    if (apellido.value == '') {
        alert("Por favor, ingrese su apellido.");
        e.preventDefault(); // Evita que el formulario se envíe
    } else {
        if (nombre.length.value < 3){
            alert("Por favor, ingrese un apellido valido");
            e.preventDefault();
        }
    }
}

let validarEmail = function(e){
    if (!validacionEmail(email.value)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        e.preventDefault(); // Evita que el formulario se envíe
    }
}

let validarConsulta = function(e) {
    if (consulta.value == "") {
        alert("Por favor, escriba su consulta.");
        e.preventDefault(); // Evita que el formulario se envíe
    }
}

let validar = function (e) {
    validarNombre(e);
    validarApellido(e);
    validarEmail(e);
    validarConsulta(e);
};
   
// Función para validar el formato del correo electrónico
function validacionEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
} 

alert("Formulario enviado, muchas gracias.")
formulario.addEventListener("submit", validar);


