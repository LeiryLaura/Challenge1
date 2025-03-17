// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres
let amigos = [];
let elementoHTML = document.getElementById("");

//Implementar una función para agregar amigos

//Capturar el valor del campo de entrada
//Validar la entrada

function agregarAmigo(){
    const nombre = document.getElementById("amigo").value.trim();
    
    if (nombre === ""){
        alert("Por favor, inserte un nombre");
    }else{
        //Actualizar el array de amigos
        amigos.push(nombre);
        //Limpiar el campo de entrada
        document.getElementById("amigo").value = "";
        listaAmigos();
    }
}

function listaAmigos(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    //Crear un elemento para cada nombre
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    //Validar que haya amigos disponibles: mínimo 2
    if (amigos.length < 2) {
        alert("Por favor, añade al menos dos amigos");
        return;
    }
    //Seleccionar amigo aleatoriamente
    const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    //Mostrar amigo seleccionado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoAleatorio}</li>`;
}