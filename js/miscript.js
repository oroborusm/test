$(function(){
	$('.formulario').hide();
	$('.entrar').on('click', mostrar);
	function mostrar(){
		$('.formulario').slideToggle();
	}


	$(".mensajes").hide(); //start with the frst
		setInterval(function() {
			$(".asuntos, .mensajes").slideToggle();
	}, 3000);

	$(".entrar").click(function() {

		$('html, body').animate({
			scrollTop: $(".formito").offset().top
		},1000);
	});
});


