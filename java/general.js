function traerDatosApi(){
    fetch('https://www.googleapis.com/books/v1/volumes?q=nombre')

    .then(datos => datos.json())

    .then(datos => {
        libros.innterHTML += `
        <div class="libro">
            <!-- Muestra una imagen obtenida de los datos de la API. -->
            <img src="${datos.items[0].volumeInfo}"</img><br>

            <!-- Muestra el nombre obtenido de los datos de la API. -->
            Nombre: ${datos.items[0].volemeInfo.name}<br>

            <!-- Muestra el nombre de usuario obtenido de los datos de la API. -->
            User: ${datos.results[0].login.username}<br>

            <!-- Muestra la contraseña obtenida de los datos de la API. -->
            Pass: ${datos.results[0].login.password}<br>

            <!-- Muestra la dirección de correo electrónico obtenida de los datos de la API. -->
            ${datos.results[0].email}
        </div>`;

    })
}
