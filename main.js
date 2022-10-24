class Usuario {
    constructor(id,usuario, contraseña, saldo){
        this.id = id;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.saldo = saldo;
    }
}

let usuarios = [
    {'id':100, 'usuario':'juan123', 'contraseña':'a1234', 'saldo':1560000},
    {'id':101, 'usuario':'carlos456', 'contraseña':'b1234', 'saldo':2586000},
    {'id':102, 'usuario':'diego789', 'contraseña':'c1234', 'saldo':1895000},
];

function ir(){
    let usuarioBuscado = document.form.login.value;
    let passwordBuscado = document.form.password.value;

    let resultadoBusqueda = usuarios.find(element => element.usuario === usuarioBuscado) && usuarios.find(element => element.contraseña === passwordBuscado);
    let contador = 3;
do {
    if (resultadoBusqueda == undefined){
        alert('Favor ingrese usuario y clave correctos');
        contador--;
        alert('Le quedan ' + contador + ' intentos');
        
   } else {
         alert('Bienvenido al banco de Colombia');
         window.location = "Cajero.html";
     } 
} while (contador>0 && resultadoBusqueda == undefined);

if (contador <= 0) {
    alert('El usuario ha sido bloqueado');            
}    
        
}      

let saldo = document.getElementById("saldo");
saldo.textContent = `tienes $ ${resultadoBusqueda.saldo}`



