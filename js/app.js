/*
    Variables
*/
const carrito  = document.getElementById('carrito');
const cursos   = document.getElementById('lista-cursos');



/* 
    Event listeners
*/
cargarEventListeners();
function cargarEventListeners() {

    //Dispara cuando se da clic en agregar carrito
    cursos.addEventListener('click', comprarCurso);

}




/*
    Funciones
*/ 

// Function que compra el curso
function comprarCurso(e) {
    e.preventDefault();
    // Con este condicional hacemos de que si contiene esta clase no traiga su elemento padre
    if (e.target.classList.contains('agregar-carrito')) {
        const nombreCurso = e.target.parentElement.parentElement;
        // Esta funcion nos va a mostrar que info tiene
        leerInfoCurso(nombreCurso);
    }
}

// Leer datos del curso
function leerInfoCurso(nombreCurso) {
    console.log(nombreCurso)
}