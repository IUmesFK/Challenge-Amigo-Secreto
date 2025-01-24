// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigos() {
    if(document.getElementById("amigo").value === ""){
        alert("Por favor, inserte un nombre");
    } else{
        amigos.push(document.getElementById("amigo").value);
    }
    document.getElementById("amigo").value = "";
    return;
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    for(let i = 0; i <= amigos.length-1; i++){
        let elementoLista = document.createElement("li");
        let nodoDeTexto = document.createTextNode(amigos[i]);
        elementoLista.appendChild(nodoDeTexto);
        lista.appendChild(elementoLista);
    }
    return;
}

function sortearAmigo() {
    let lista = document.getElementById("resultado");

    if(amigos.length < 2){
        alert("Necesitas minimo 2 amigos para hacer el sorteo.");
        return;
    }
    
    lista.innerHTML = '';

    let indiceGenerado = Math.floor(Math.random()*amigos.length);
    console.log(indiceGenerado);

    let elementoLista = document.createElement("li");
    let nodoTexto = document.createTextNode(`¡El amigo secreto es ${amigos[indiceGenerado]}!`);
    elementoLista.appendChild(nodoTexto);
    lista.appendChild(elementoLista);
    return;
}