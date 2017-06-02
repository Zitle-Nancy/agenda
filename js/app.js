//obtener elementos
var pizzara = $('#lista-contactos');
var modalUsuarios = $('#modalUsuarios');
var nombre = $('#txt-nombre');
var apellido = $('#txt-apellido');
var telefono = $('#txt-numero');
var agregarUsuario = $('#agregar-usuario');

var cargarPagina = function() {
	agregarUsuario.click(imprimirUsuario);
}
var imprimirUsuario = function(e){
	e.preventDefault();
	//crear elementos
	var contacto = $('<p />',{'class':'jumbotron'});
	var listaDatos = $('<p />');
	//concatenar valores
	listaDatos.html('<strong>Nombre: </strong>'+ nombre.val() + '<br>' + '<strong>Apellido: </strong>'+ apellido.val() + '<br>' +'<strong>Telefono: </strong>' +telefono.val());
	//ingresar valores
	contacto.append(listaDatos);
	pizzara.append(contacto);
	//ocultar el modal
	modalUsuarios.modal('hide');
	//limpiar cajas de texto
	nombre.val('');
	apellido.val('');
	telefono.val('');
}

$(document).ready(cargarPagina);