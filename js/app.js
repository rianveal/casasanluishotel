$(document).ready(function(){

  var iconMenu = $('.icon-menu--content')
  var overlay = $('.overlay-menu')
  var width = window.innerWidth
  var navig = $('nav.menu-options')

  // Acción para abrir menu de opciones en mobiles
  $(iconMenu).on('click', function(e) {
    e.preventDefault()
    var el = $(this)
    if( width < 992 ){
      if ($(overlay).is(':hidden')){
        //$('header').css('background-color', 'transparent')
        el.addClass('icon-menu--active')
        $(overlay).fadeIn('slow')
      }else{
        //$('header').css('background-color', 'rgba(0,0,0,0.25)')
        el.removeClass('icon-menu--active')
        $(overlay).fadeOut('slow')
      }
    }
  })

  // Transformando el menu de opciones -- mobile - Desktop
  $(window).resize(function(){
    var w = $(window).width()
    if(w >= 1024 && $(overlay).is(':hidden')){
      $(overlay).css('display','block')
      $(overlay).removeAttr('style')
    }else if( w <= 1185){
      if($('.tooltip').is('hidden')){
        $('.tooltip').css('display','none')
      }else{
        $('.tooltip').css('display','none')
      }
    }
  })

  // Eventos que cierra el modal de menu, al seleccionar una de las 
  // opciones del mismo (Solo para versiones moviles)
  $('.item-menu').on('click', function(e){
    e.preventDefault()
    var el = $(this)
    var width = window.innerWidth
    var navig = $('nav.menu-opt')
    if( width < 992 ){
    	$(iconMenu).removeClass('icon-menu--active')
      $(overlay).fadeOut('slow')	
    }else if( width >= 1024 ){}
  })

  // Efecto de scroll en el body cuando se escoge una opción de usuario.
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({scrollTop: targetOffset - 100}, 900);
        return false;
      }
    }
  });

  // Método para el manejo de link en nueva pestaña
  $('.external-link').click(function() {
    url = $(this).attr("href");
    window.open(url, '_blank');
    return false;
  });

  $('.ubicacion-boton').on('click', function(){
    if( $('.overlay-map').is(':hidden') ){
      $('.overlay-map').fadeIn()
    }
  })

  $('#reservar').on('click', function(){
    descripcionReserva = $(this).attr('name');
    $('#descripcionReserva').val(descripcionReserva);
    if( $('.overlay-reserva').is(':hidden') ){
      $('.overlay-reserva').fadeIn()
      $('html, body').css('overflowY', 'hidden'); 
    }else{
      $('html, body').css('overflowY', 'visible'); 
    }
  })

  $('#reservarOferta').on('click', function(){
    if( $('.overlay-reserva').is(':hidden') ){
      descripcionReserva = $(this).attr('name');
      $('#descripcionReserva').val(descripcionReserva);
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

  $('.overlay-map--contenedor > .cerrar').on('click', function(){
    $(this).parent().parent().fadeOut();
  })

  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  $('#btnReservar').on('click', function(){
    if( $('#checkin').val()  === ''){
      mostrarMensaje('CHECK IN','checkin')
      return false
    }else if( $('#checkout').val()  === ''){
      mostrarMensaje('CHECK OUT','checkout')
      return false
    }else if( $('#cantidadPersonas').val() === ''){
      mostrarMensaje('CANTIDAD DE PERSONAS', 'cantidadPersonas')
      return false
    }else if( $('#numeroAdultos').val()  === ''){
      mostrarMensaje('NÚMERO DE ADULTOS','numeroAdultos')
      return false
    }else if( $('#numeroNinos').val()  === ''){
      mostrarMensaje('NUMERO DE NIÑOS','numeroNinos')
      return false
    }else if( $('#moneda').val()  === ''){
      mostrarMensaje('MÓNEDA','moneda')
      return false
    }else if( $('#numeroCedula').val() === ''){
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