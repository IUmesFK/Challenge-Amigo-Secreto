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
    return;
}

function actualizarListaAmigos(listaAmigos) {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    for(let i = 0; i <= listaAmigos.length-1; i++){
        let elementoLista = document.createElement("li");
        let nodoDeTexto = document.createTextNode(listaAmigos[i]);
        elementoLista.appendChild(nodoDeTexto);
        lista.appendChild(elementoLista);
    }
    return;
}

function sortearAmigos() {
    
}