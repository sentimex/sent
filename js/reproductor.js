function iniciar(){
	maximo=600;
	media=document.getElementById('media');
	play=document.getElementById('play');
	barra=document.getElementById('barra');
	progreso=document.getElementById('progreso');
	volume = document.querySelector('#volume');
	muted = document.getElementById("media");

	volume.addEventListener('change', function(e){
	media.volume = e.currentTarget.value / 10;
	});

	play.addEventListener('click',presionar,false);
	barra.addEventListener('click',mover,false);
}

function presionar(){
	if(!media.paused && !media.ended){
		media.pause();
		play.innerHTML='Reproducir';
		window.clearInterval(bucle);

	}
	else{
		media.play();
		play.innerHTML='Pausa';
		bucle=setInterval(estado, 1000);
	}
}

 function estado(){
 	if(!media.ended){
 		var total=parseInt(media.currentTime*maximo/media.duration);
 		progreso.style.width=total+'px';
 	}
 	else{
 		progreso.style.width= '0px';
 		play.innerHTML='Reproducir';
 		window.clearInterval(bucle);
 	}
 }
  function mover (e){
  	if(!media.paused && !media.ended){
  		var ratonX=e.pageX-barra.offsetLeft;
  		var nuevoTiempo=ratonX*media.duration/maximo;
  		media.currentTime=nuevoTiempo;
  		progreso.style.width=ratonX+'px';
  	}
  }

function mute(){
	if(!media.muted && !media.ended){
		media.muted = true;
		play.innerHTML='Silenciar';
		alert("Sliencio Activado");
		window.clearInterval(bucle);
	}
	else{
		media.muted = false;
		play.innerHTML='Pausa';
		alert("Sliencio Desactivado");
	}
}

  window.addEventListener('load',iniciar,false);