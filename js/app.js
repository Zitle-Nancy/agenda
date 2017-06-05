//obtener elementos
var pizzara = $('#lista-contactos');
var modalUsuarios = $('#modalUsuarios');
var nombre = $('#txt-nombre');
var apellido = $('#txt-apellido');
var telefono = $('#txt-numero');
var contador = 0;

var cargarPagina = function() {
	//todos los eventos van aqui
	var agregarUsuario = $('#agregar-usuario');
	agregarUsuario.click(imprimirUsuario);
	var datos = $('.datos');
	datos.keyup(comprobarInput);
}

var imprimirUsuario = function(e){
	e.preventDefault();
	//crear elementos
	
	contador++;
	console.log(contador);
	var contacto = $('<p />',{'class':'jumbotron'});
	var listaDatos = $('<p />');
	//obtener elemento
	var totalRegistros = $('#total-registros').text(contador);
	totalRegistros.addClass('color');
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
	
	console.log(contador);
}
/////crear loop para comprobar cajas///
	var comprobarInput = function(){
		var btnAgregarUsuario = $('#agregar-usuario');
		var inputs = $(this).val().trim().length;
		console.log(typeof(this));
		if(inputs <= 0 || inputs > 20){
			btnAgregarUsuario.attr('disabled',true);
		}else{
			btnAgregarUsuario.removeAttr('disabled');			
		}
	}
	
$(document).ready(cargarPagina);