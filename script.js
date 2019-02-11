var cont = 0; //quantidade de bola  estourada
var numBola = 0; //número da bola que aparece na tela

function gerarBola(){
	var tamanho = Math.floor(Math.random()*100 + 20); //tamanho da bola
	var radius = tamanho / 2;

	var posArea = $('.area').offset(); //left-top area das bolas
	var widthArea = $('.area').width(); //largura area das bolas
	var heightArea = $('.area').height(); //altura area das bolas

	var left = Math.floor(Math.random()*(posArea.left + widthArea - 120));
	var top = Math.floor(Math.random()*(posArea.top + heightArea - 120));

	var cor = Math.floor(Math.random()*4);
	var bola = $("<div class='bola'></div>");

	//evitar que a bola ultrapasse o limite da esquerda
	if(left <= posArea.left){
		left += posArea.left + 5;
	}

	//evitar que a bola ultrapasse o limite de baixo
	if(top <= posArea.top){
		top += posArea.top + 5;
	}

	numBola++;

	bola.css('width', tamanho);
	bola.css('height', tamanho);
	bola.css('border-radius', radius);
	bola.css('left', left+'px');
	bola.css('top', top+'px');
	bola.html(numBola);

	$(bola).bind('click', function(){
		estourarBola(this);
	});

	switch (cor){
		case 0:
			bola.css('background-color', '#6A5ACD');
			break;
		case 1:
			bola.css('background-color', '#0000CD');
			break;
		case 2:
			bola.css('background-color', '#708090');
			break;
		case 3:
			bola.css('background-color', '#006400');
			break;
	}

	//$(document.body).append(bola);
	$('#area').append(bola);
}
function estourarBola(bola){
	$(bola).fadeOut();
		cont++;
		$('#placar').html(cont);
}

$(function(){
	$('#play').bind('click', function(){
		setInterval(gerarBola, 100);
	});
});