// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigos() {
    if(document.getElementById("amigo").value === ""){
        alert("Por favor, inserte un nombre");
    } else{
        amigos.push(document.getElementById("amigo").value);
    }
    document.getElementById("amigo").value = "";
    console.log(amigos);
}

function actualizarListaAmigos() {
    
}

function sortearAmigos() {
    
}