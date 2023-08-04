// querySelector
const heading =document.querySelector('.header__texto h2')//retorna 0 o 1 elemento **no retorna mas que 1 
heading.textContent=('Hola Mundo') // Tambien puedes modificar nombres y titulos 
console.log(heading);
// puedes modificar , Eliminar y agregar con querySelector


// querySelectorAll
const  enlaces =document.querySelectorAll('.navegacion a')

enlaces[0].textContent= 'Nuevo Texto para Enlace';
enlaces[0].classList= 'Nuevo-clase';
// console.log(enlaces[0]);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')
// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregar el Texto
nuevoEnlace.textContent ='Tienda Vitual'
// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
// Agregar en el Document
const navegacion =document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// getElementById
const heading2 = document.getElementById('heading'); // solo puede selecionar Id
// console.log(heading);


// Eventos
// console.log(1);

window.addEventListener('load' , function() // Load espere a que el JS y los archivos del HTML estan listos
{
//    console.log(2); 
})

window.onload = function ()
{
    // console.log(3);
}

window.addEventListener ( 'DOMContentLoaded',function ()//solo espera por HTML  pero no espera CSS o Imagenes
{
    // console.log(4);
})


console.log(5);

window.onscroll= function()
{
    // console.log('Scrolling...');
}



// Eventos Input y Textarea

const datos =
{
    nombre : "",
    email : "",
    mensaje : "",

}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('.boton--primaria');
const formulario =document.querySelector('.formulario');

nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);
// Seleccionar elementos y asosiarles un evento
btnEnviar.addEventListener('click', function(evento)
{
    // console.log(evento);
    // evento.preventDefault();
    // console.log('Enviando formulario')
});
// El evento de Submit
formulario.addEventListener('submit', function(e)
{
    e.preventDefault();
    // Validar el Formulario
    const {nombre , email , mensaje }=datos;
    if(nombre ==="" || email ==="" || mensaje==="")
    {
        mostrarError('Todo los campos son Obligatorios');
        // mostrarAlerta('Todo los campos son Obligatorios',true);
        return;
    }

    // Crear la alerta Enviar Correctamente
    mostrarMensaje('Mensaje Enviar Correctamente')
    // mostrarAlerta('Mensaje Enviar Correctamente')
});

function leerTexto(e)
{
    // console.log(e.target.value);
    datos[e.target.id]= e.target.value;
    // console.log(datos);
};


// function de mostrar Error
function mostrarError( mensaje)
{
    const error = document.createElement('P');
    error.classList.add('error');
    error.textContent= mensaje;
    formulario.appendChild(error);

    // Desaparece el alerta de errores
    setTimeout(() => {
        error.remove();
    }, 5000);
}

// funcion de alerta de mensaje
function mostrarMensaje(mensaje)
{
    const alerta = document.createElement('P');
    alerta.classList.add('correcto');
    alerta.textContent= mensaje;
    formulario.appendChild(alerta);

    // Desaparece el alerta de errores
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

// Mostar Alerta
// Mostrar Alerta
// function mostrarAlerta(mensaje , error=null)
// {
//     const  alerta = document.createAttribute('P');
//     alerta.textContent = mensaje;

//     if(error)
//     {
//         alerta.classList.add('error')
//     }else
//     {
//         alerta.classList.add('correcto');
//     }
//     formulario.appendChild(alerta);
//     // Desaparece el alerta 
//     setTimeout(() => {
//         error.remove();
//     }, 5000);
// }