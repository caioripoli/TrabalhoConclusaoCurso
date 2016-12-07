//função para escrever na tela o conteúdo que a pessoa está clicando, por exemplo: ao clicar na letra A,
//a função escrever é chamada, na qual será verificado as letras a baixo (pronuncia) e por fim escrever na label a letra.
function escrever(index){
	if (index == 21){
		frase += 'e';
	}
	else if (index == 23){
		frase += 'o';
	}
	else if (index == 24){
		frase += 'uuuuh';
	}
	else if (index == -1){
		frase += letras[count];
		index = count;
		frase2 += letras[count];
	}
	else{
		frase += letras[index];
		frase2 += letras[index]
	}

	$("#label").append(escrever_fase2[index]);
}
//pronuncia a frase que foi passada
function falar(){
	responsiveVoice.speak(frase, "Brazilian Portuguese Female");
}
//pronuncia a frase que foi passada por parametro
function playTxt(txt){
    responsiveVoice.speak(txt, "Brazilian Portuguese Female");
}
//apaga o conteúdo que está escrito na tela
function apagar(){
	frase = "";
	$("#label").text("");
}
//ao clicar no botão proximo ou anterior são feitas verificações para alterar o conteúdo da tela
//por ex: caso a letra B seja a letra que está aparecendo na tela, ao clicar em proximo,
//a letra C irá aparecer no lugar da B. Além disso, é feito uma verificação com os botões de proximo e anterior para
//não permitir que os mesmos não apareção em determinada parte do jogo.
function change(botao){
	if (botao == 0 && count > 0){
		if(count == 1){
			$(".iconVoltar").hide();
		}else if(count != 18){
			$(".iconMais").show();
		}
		count--;
	}
	else if (botao == 1 && count < 19){
		if(count == 18){
			$(".iconMais").hide();
		}
		$(".iconVoltar").show();
		count++;
	}
	
	$(".imgLetra").attr("src", "imagem/letras/" + count + ".png");
	$(".imgSilabas").attr("src", "imagem/silabas/" + count + ".png");
	apagar();
}
//essa função faz a mesma coisa que a anterior, porém para outra fase do jogo.
function change1(botao){
	if (botao == 0 && count1 > 0){
		$(".fase1_" + count1).hide();
		count1--;
		$(".fase1_" + count1).show();
		if(count1 == 0){
			$(".iconVoltar_1").hide();
		}else if(count1 != 2){
			$(".iconMais_1").show();
		}
	}	
	else if (botao == 1 && count1 < 2){
		$(".fase1_" + count1).hide();
		count1++;
		$(".fase1_" + count1).show();
		if(count1 == 2){
			$(".iconMais_1").hide();
		}
		$(".iconVoltar_1").show();
	}
	
}
