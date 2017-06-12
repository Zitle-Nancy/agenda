//obtener elementos
var pizzara = $('#lista-contactos');
var modalUsuarios = $('#modalUsuarios');
var nombre = $('#txt-nombre');
var apellido = $('#txt-apellido');
var telefono = $('#txt-numero');
var contador = 0;
var contadorEliminar = 0;

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
	// console.log(contador);
	var botonEliminar = $('<span/>',{'class':'glyphicon glyphicon-trash btn-eliminar'});
	botonEliminar.click(eliminarRegistros);
	var contacto = $('<p />',{'class':'jumbotron posicion'});
	var listaDatos = $('<p />');
	//personalizar elementos
	// botonEliminar.text('Eliminar Registro');
	//obtener elemento
	var totalRegistros = $('#total-registros').text(contador);
	totalRegistros.addClass('color');
	//concatenar valores
	listaDatos.html('<strong>Nombre: </strong>'+ nombre.val() + '<br>' + '<strong>Apellido: </strong>'+ apellido.val() + '<br>' +'<strong>Telefono: </strong>' +telefono.val());
	//ingresar valores
	listaDatos.append(botonEliminar);
	contacto.append(listaDatos);
	pizzara.append(contacto);
	//ocultar el modal
	modalUsuarios.modal('hide');
	//limpiar cajas de texto
	nombre.val('');
	apellido.val('');
	telefono.val('');
}

////////eliminar registros/////////7
	var eliminarRegistros = function(){
		contador--;
		// //obtener label 
		var totalRegistrosEliminados = $('#total-registros');
		totalRegistrosEliminados.text(contador);
		console.log(totalRegistrosEliminados);
		var obtenerPadreBtn = $(this).parent().parent();
		obtenerPadreBtn.remove();
		
		console.log('boton Eliminar' + contadorEliminar);
	}
/////crear loop para comprobar cajas///
	var comprobarInput = function(){
		var valido = true;
		var btnAgregarUsuario = $('#agregar-usuario');
		$('.datos').each(function(indice,elemento){
			// console.log(indice , elemento);
			var input = $(elemento).val().trim().length;
			valido = valido &&(input > 0 && input <= 20);
			console.log(valido);
		});			
		if(valido){
		btnAgregarUsuario.removeAttr('disabled');	
		}else{	
		btnAgregarUsuario.attr('disabled',true);	
		}	
	}
	
$(document).ready(cargarPagina);