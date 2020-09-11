function validarNombre(){
    var nombre = document.form.nombre.value.length;   //Document: Documento htmlm al que está enlazado.
    if (nombre==0 || nombre>25)
    {
        alert("Nombre incorrecto");
        return 1;
    }
        return 0;

}
function validarApellido(){
    var apellido = document.form.apellidos.value.length;   //Document: Documento htmlm al que está enlazado.
    if (apellido==0 || apellido>25)
    {
        alert("Apellido incorrecto");
        return 1;
    }
        return 0;

}

function validarDireccion(){
    var direccion= document.form.direccion.value;
    var caso1= direccion.substring(0,2);
    var caso2= direccion.substring(0,3);
    var caso3= direccion.substring(0,5);
        if(caso1 != "av" && caso2 != "cll" && caso2 != "cra" && caso2 != "anv" && caso3!= "trans"){
            alert("Sintaxis incorrecta");
        }
}

function validarUsuario(){
    var nombre = document.form.usuario.value.length;   //Document: Documento htmlm al que está enlazado.
    if (nombre<10 || nombre >20)
    {
        alert("Sintaxis Usuario incorrecto");
        return 1;
    }
        return 0;

}

function validarContra(){
    var expre= "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{15,20}$";
    var nombre = document.form.password.value;   //Document: Documento htmlm al que está enlazado.
    if (!expre.test(nombre)) 
    {
        alert("Contraseña incorrecta");
        return 1;
    }
        return 0;
}

function validarEmail(){
    var apellido = document.form.email.value.length;   //Document: Documento htmlm al que está enlazado.
    if (apellido>120)
    {
        alert("Correo incorrecto");
        return 1;
    }
        return 0;

}