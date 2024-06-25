const divs = document.querySelectorAll('.div1, .div2');
divs.forEach(div => {
    div.addEventListener("click", () => {
        div.style.backgroundColor = 'black';
    });
});


function pintarRosado() {
    let ele = document.getElementById("div-2");
    ele.style.backgroundColor = 'pink';
}

function pintarCeleste() {
    let ele = document.getElementById("div-2");
    ele.style.backgroundColor = 'aqua';
}

function pintarNaranjo() {
    let ele = document.getElementById("div-2");
    ele.style.backgroundColor = 'orange';
}

function pintarMorado(id) {
    let ele = document.getElementById(id);
    ele.style.backgroundColor = 'blueviolet';
    ele.style.height = '200px';
    ele.style.width = '200px';
}

function pintarColor(id, valor) {
    if (valor == 'q' || valor == 'Q') {
        let ele = document.getElementById(id);
        ele.style.backgroundColor = 'blueviolet';
        ele.style.height = '200px';
        ele.style.width = '200px';
    } else if (valor == 'w' || valor == 'W') {
        let ele = document.getElementById(id);
        ele.style.backgroundColor = 'Grey';
        ele.style.height = '200px';
        ele.style.width = '200px';
    } else if (valor == 'e' || valor == 'E') {
        let ele = document.getElementById(id);
        ele.style.backgroundColor = 'Brown';
        ele.style.height = '200px';
        ele.style.width = '200px';
    }  
}

document.addEventListener("keydown", function(event) {
    if (event.key === 'a' || event.key === 'A') {
        pintarRosado();
    } else if (event.key === 'D' || event.key === 'd') {
        pintarCeleste();
    } else if (event.key === 's' || event.key === 'S') {
        pintarNaranjo();
    } else if (event.key === 'q' || event.key === 'Q') {
        let valorQ = event.key;
        agregarElemento(valorQ);
    } else if (event.key === 'w' || event.key === 'W') {
        let valorW = event.key;
        agregarElemento(valorW);
    } else if (event.key === 'e' || event.key === 'E') {
        let valorE = event.key;
        agregarElemento(valorE);
    }
});


function agregarElemento(valor) {
    // Obtenemos el elemento contenedor por su ID
    const contenedor = document.querySelector('.b0dy'); // Cambiamos getElementsByClassName por querySelector
    // Creamos un nuevo elemento <div>
    const nuevoElemento = document.createElement("div");
    // Asignamos un ID único al nuevo elemento (por ejemplo, "div1", "div2", etc.)
    const contador = contenedor.childElementCount + 1; // Contador basado en la cantidad actual de elementos
    nuevoElemento.id = "div" + contador;
    // Agregamos el nuevo elemento al contenedor
    contenedor.appendChild(nuevoElemento);

    // Llamamos a la función para pintar el fondo con el ID del nuevo elemento
    if (valor == 'q' || valor == 'Q') {
        // Forma 1 -> dar color con función individual
        pintarMorado(nuevoElemento.id);
    } else if (valor == 'w' || valor == 'W') {
        // Forma 2 -> dar color según letra seleccionada
        pintarColor(nuevoElemento.id, valor);
    } else if (valor == 'e' || valor == 'E') {
        pintarColor(nuevoElemento.id, valor);
    }  
}



