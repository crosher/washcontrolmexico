//para que se actualize la pagina sin moverse NI BAJARSE
$(document).ready(function(){
  $('html').animate({scrollTop:0}, 1);
  $('body').animate({scrollTop:0}, 1);
});



let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(500)
  .typeString('COVITEC  por un mundo saludable')
  .pauseFor(1600)
  .deleteChars(10)
  .start(); 


//VELOCIDAD boton ir Arriba inicio de la pagina
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 0) {
			$('#cm-up').slideDown(800);
		} else {
			$('#cm-up').slideUp(800);
		}
	});
	$('#cm-up').on('click', function(){
		$('body, html').animate({
			scrollTop: 0
		}, 100);
		return false;
	});
});