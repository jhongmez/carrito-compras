/*
    Variables
*/
const carrito  = document.getElementById('carrito');
const cursos   = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');



/* 
    Event listeners
*/
cargarEventListeners();
function cargarEventListeners() {

    //Dispara cuando se da clic en agregar carrito
    cursos.addEventListener('click', comprarCurso);

    carrito.addEventListener('click', borrarCurso);

}


/*
    Funciones
*/ 

// Function que compra el curso
function comprarCurso(e) {
    e.preventDefault();
    // Con este condicional hacemos de que si contiene esta clase no traiga su elemento padre
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        // Esta funcion nos va a mostrar que info tiene
        leerInfoCurso(curso);
    }
}

// Leer datos del curso
function leerInfoCurso(curso) {
    
    const contieneCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id:     curso.querySelector('a').getAttribute('data-id')
    }

    //Insertar datos
    insertarCarrito(contieneCurso);

}

//Muestra el curso seleccionado
function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100">
        </td>
        <td>
            ${curso.titulo}
        </td>
        <td>
            ${curso.precio}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row);
}

//Eliminar curso
function borrarCurso(e){
    e.preventDefault();

    let curso;

    if(e.target.classList.contains('borrar-curso')) {
        console.log(e.target.parentElement.parentElement.remove());
    }
}