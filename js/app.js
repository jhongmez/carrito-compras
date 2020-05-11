/*
    Variables
*/
const carrito       = document.getElementById('carrito');
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
    console.log(e.target);
}
