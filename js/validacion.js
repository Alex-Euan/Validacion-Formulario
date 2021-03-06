const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');// CON LA PALABRA "ALL" OBTENEMOS TODOS LOS INPUTS JUNTO CON QUERYSELECTOR


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false,
    terminos: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword();
            break;
        case "password2":
             validarPassword();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
        case "terminos":
            validarTerminos();
            break;
        default:
            break;
    } 
};

const validarCampo = (expresion, input, campo) => {
    // accedemos al objeto y hacemos comparamos con "TEST(LO QUE QUEREMOS COMPARAR)"
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
  }
}

const validarPassword = () => {
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    if (password.value !== password2.value) {
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }
}
const validarTerminos = () => {
    const terminos = document.getElementById('terminos');
    if (terminos.checked == false) {
        document.querySelector('#grupo__terminos .formulario__input-error').classList.add('formulario__input-error-activo'); 
    } else {
        document.querySelector('#grupo__terminos .formulario__input-error').classList.remove('formulario__input-error-activo'); 
    }
}

//con forEach ejecuta codigo por cada input
inputs.forEach((input) => {
    //con KEYUP ejecuta codigo cuando el usuario presiona una tecla en el input
    input.addEventListener('keyup', validarFormulario);
    // con BLUR ejecuta codigo cuando le den un click fuera del input
    input.addEventListener('blur', validarFormulario);
});

// FUNCION DE TIPO FLECHA () => {}''
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarTerminos();   
    
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
        formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
         setTimeout(() => {
             document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
         }, 5000);

         document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    } else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
