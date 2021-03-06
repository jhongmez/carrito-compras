/*
    Variables
*/
const carrito       = document.getElementById('carrito');
const cursos        = document.getElementById('lista-cursos');
const listaCursos   = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito');



/* 
    Event listeners
*/
cargarEventListeners();
function cargarEventListeners() {

    //Dispara cuando se da clic en agregar carrito
    cursos.addEventListener('click', comprarCurso);

    carrito.addEventListener('click', borrarCurso);

    vaciarCarrito.addEventListener('click', borrarTodo);

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

    guardarCursoLocalStorage(curso);
}

//Eliminar curso
function borrarCurso(e){
    e.preventDefault();

    let curso;

    if(e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
    }

}

// Esta función nos elimina varios cursos
function borrarTodo(e) {

    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }
    return false;

}

//Almacenando cursos en el carrito
function guardarCursoLocalStorage(curso) {
    let cursos;

    cursos = obtenerCursosLocalStorage();

    // el curso seleccionado se agrega al arreglo
    cursos.push(curso);

    localStorage.setItem( 'cursos', JSON.stringify( cursos ) );
}

//Comprueba que haya elementos en localstorage
function obtenerCursosLocalStorage() {
    let cursosLS;

    //Se comprueba si hay algo en local storage
    if ( localStorage.getItem('cursos') == null ) {
        cursosLS = [];
    } else {
        cursosLS = JSON.parse( localStorage.getItem('cursos') );
    }
    return cursosLS;

}
