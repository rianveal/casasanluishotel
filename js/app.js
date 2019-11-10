$(document).ready(function(){

  $('#reservar').on('click', function(){
    if( $('.overlay-reserva').is(':hidden') ){
      $('.overlay-reserva').fadeIn()
      $('html, body').css('overflowY', 'hidden'); 
    }else{
      $('html, body').css('overflowY', 'visible'); 
    }
  })

  $('.overlay-reserva--contenedor > .cerrar').on('click', function(){
    $(this).parent().parent().fadeOut();
    $('html, body').css('overflowY', 'visible'); 
  })

  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  $('#btnReservar').on('click', function(){
    if( $('#numeroCedula').val() === ''){
      mostrarMensaje('NÚMERO DE CEDULA','numeroCedula')
      return false
    }else if( $('#nombres').val() === ''){
      mostrarMensaje('NOMBRES', 'nombres')
      return false
    }else if( $('#apellidos').val() === ''){
      mostrarMensaje('APELLIDOS', 'apellidos')
      return false
    }else if( $('#correo').val() === ''){
      mostrarMensaje('CORREO ELECTRONICO', 'correo')
      return false
    }else if( $('#numeroContacto').val() === ''){
      mostrarMensaje('NÚMERO DE CONTACTO', 'numeroContacto')
      return false
    }else if( $('#cantidadPersonas').val() === ''){
      mostrarMensaje('CANTIDAD DE PERSONAS', 'cantidadPersonas')
      return false
    }else if( $('#cantidadHabitaciones').val() === ''){
      mostrarMensaje('CANTIDAD DE HABITACIONES', 'cantidadHabitaciones')
      return false
    }else {

    }
  })
})

function mostrarMensaje(campo, valorID){
  $(".contenedor-mensaje").fadeIn()
  if( valorID === 'correo' ){
    if( testEmail.test($('#correo').val()) ){

    }else{
      console.log('no cumple')
      return false
    }
  }
  $('#'+valorID).focus();
  setTimeout(function() {
    $('#textoMensaje').text('Campo '+campo+' no puede ser vacío.')      
    $(".contenedor-mensaje").fadeOut(2000);
  },0);
}