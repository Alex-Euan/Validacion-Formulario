const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');// CON LA PALABRA "ALL" OBTENEMOS TODOS LOS INPUTS JUNTO CON QUERYSELECTOR


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
    switch (expresiones, e.target.name) {
        case "usuario":
            // accedemos al objeto y hacemos comparamos con "TEST(LO QUE QUEREMOS COMPARAR)"
            if (expresiones.usuario.test(usuario.value)) {
                console.log('usuario correcto');
            } else {
                console.log('usuario incorrecto');
            }
            break;
    
        default:
            break;
    } 
};

//con forEach ejecuta codigo por cada input
inputs.forEach((input) => {
    //con KEYUP ejecuta codigo cuando el usuario presiona una tecla en el input
    input.addEventListener('keyup', validarFormulario);
    // con BLUR ejecuta codigo cuando le den un click fuera del input
    input.addEventListener('blur', validarFormulario);
});

// FUNCION DE TIPO FLECHA ''() => {}''
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});