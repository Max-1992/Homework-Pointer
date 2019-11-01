'use strict'

// Declaración de Variables

const Tarea_Lista = document.getElementById('lista');
const Tarea = document.getElementById('tareaInput');
const Boton = document.getElementById('btn-agregar');
const Form = document.querySelector('.formulario');


function Guardar_Imprimir_Tarea(){
    let Guardar_Tarea = Tarea.value;

    if(Guardar_Tarea === ''){
        alert('Debe colocar una tarea para poder guardarla')
    }else{
        let Contenido = `<a href="#">${Guardar_Tarea}</a>`;
        let Element = document.createElement('li');
        Element.innerHTML = Contenido;
    
        Tarea_Lista.appendChild(Element);
    }
    
}


function Reset_Form(){
    Form.reset()
}

// Eventos

Boton.addEventListener('click', (e) =>{

    Guardar_Imprimir_Tarea()
    Reset_Form()

    e.preventDefault()

})

Tarea_Lista.addEventListener('click', (e)=>{
    let Tarea_Seleccionada = e.target;
    Tarea_Seleccionada.parentElement.remove()
})