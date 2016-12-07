var teste = ["DADO", "GATO", "BOLA", "RATO", "VACA", "BANANA", "MACACO", "MENINO", "GIRAFA", "CABELO", "TELEFONE", "CAMISETA", "PIRULITO"];
var palavra;
var verifica = 0, contador = 0, contador1 =0;
//a imagem principal irá alterar conforme a pessoa for acertando a anterior
function imagem(numero){
	$(".img-principal").attr("src", "imagem/faseQuatro/" + numero + ".png");
}
//verfica a quantidade de cliques nos botões
function teclado(letra){
	if(verifica == 0){
		//quando a pessoa clicar pela 3 vez em algum botão, todos os outros botões que estão na div fase4-img serão bloqueados
		if(contador == 2){
			$(".fase4-img").attr("disabled", true);
		}else{
			//enquanto não for clicado em 2 botões, o jogo não deixará a pessoa clicar e vai incrementando o contador
			$(".palavra_1").append(letra);
			contador++;
		}
	}else if(verifica == 1){
		if(contador < 2){
			$(".palavra_1").append(letra);
			contador++;
		}else if(contador == 4){
			$("#fase4-img").attr("disabled", true);
		}else{
			$(".palavra_2").append(letra);
			contador++;			
		}	
	}else{
		if(contador < 2){
			$(".palavra_1").append(letra);
			contador++;
		}else if(contador == 6){
			$("#fase4-img").attr("disabled", true);
		}else if(contador < 4){
			$(".palavra_2").append(letra);
			contador++;			
		}else{
			$(".palavra_3").append(letra);
			contador++;
		}	
	}
}
//apagua todo conteúdo que está nas divs
function limpar(){
	$(".palavra_1").text("");
	$(".palavra_2").text("");
	$("#palavra-1").text("");
	$("#palavra-2").text("");
	$("#palavra-3").text("");
	$("#palavra-4").text("");
	$("#palavra-5").text("");	
}
//caso a pessoa tenha acertado a palavra, uma imagem de resposta correta será informada na tela
function acertou(){
	playTxt('PARABÉNS');
	$("#img-verificar").addClass("img-resposta");
	$(".img-resposta").html($("<img>").attr("src", "imagem/faseQuatro/parabens.gif"));
	//$(".img-resposta").attr("src", "imagem/faseQuatro/parabens.gif");	
	$(".superior").show();
	$(".voltarParaFase").show();
}
//caso a pessoa tenha errado a palavra, uma imagem de resposta incorreta será informado na tela
function erro(){
	playTxt('TENTE NOVAMENTE');
	//addClass = adicionar nova class dentro de uma class já existente 
	$("#img-verificar").addClass("img-resposta");
	$(".img-resposta").html($("<img>").attr("src", "imagem/faseQuatro/erro.gif"));
	$(".superior").show();
	$(".voltarParaFase").show();
}
//a função a baixo verifica se a pessoa acertou ou não, junto com as funções a cima
function verificar(){
	//verifica qual imagem está sendo informada na tela
	if(contador1 == 0){
		concatenar();
		//verifica o que foi informado na tela pelo jogador, caso a resposta esteja correta, entra na condição a baixo
		if(palavra === teste[contador1]){
			acertou();
			$("#palavra-1").removeClass("palavra_1");
			contador1++;
			limpar();
			imagem(contador1);
			//escreve conteúdo na tela
			$("#palavra-1").html("GA");
			$("#palavra-2").addClass("palavra_1");
			contador = 0;
		}else{
			erro();
			$(".palavra_1").text('');
			contador = 0;
		}
		
	}else if(contador1 == 1){
		concatenar();
		
		if(palavra === teste[contador1]){			
			acertou();
			$("#palavra-2").removeClass("palavra_1");
			contador1++;
			limpar();
			imagem(contador1);
			$("#palavra-1").addClass("palavra_1");
			$("#palavra-2").html("LA");
			contador = 0;
		}else{
			erro();
			$(".palavra_1").text('');
			contador = 0;
		}
		
	}else if(contador1 == 2){
		concatenar();
		
		if(palavra === teste[contador1]){
			acertou();
			$("#palavra-1").removeClass("palavra_1");
			contador1++;
			limpar();
			imagem(contador1);
			$("#palavra-1").addClass("palavra_1");
			$("#palavra-2").html("TO");
			contador = 0;
		}else{
			erro();
			$(".palavra_1").text('');
			contador = 0;
		}	
	}else if(contador1 == 3){
		concatenar();
		
		if(palavra === teste[contador1]){
			acertou();
			$("#palavra-1").removeClass("palavra_1");
			contador1++;
			limpar();
			imagem(contador1);
			$("#palavra-1").html("VA");
			$("#palavra-2").addClass("palavra_1");
			contador = 0;
		}else{
			erro();
			$(".palavra_1").text('');
			contador = 0;
		}	
	}else if(contador1 == 4){
		concatenar();
		
		if(palavra === teste[contador1]){
			acertou();
			verifica = 1;
			$("#palavra-2").removeClass("palavra_1");
			contador1++;
			limpar();
			imagem(contador1);
			$("#palavra-1").addClass("palavra_1");
			$("#palavra-2").html("NA");
			$("#palavra-3").addClass("palavra_2");
			contador = 0;
		}else{
			erro();
			$(".palavra_1").text('');
			$(".palavra_2").text('');
			contador = 0;
		}
		
	}else if(contador1 == 5){
		concatenar();
		
		if(palavra === teste[contador1]){
			acertou();
			verifica = 1;
			$("#palavra-1").removeClass("palavra_1");
			$("#palavra-3").removeClass("palavra_2");
			contador1++;
			limpar();
			imagem(contador1);
			$("#palavra-1").addClass("palavra_1");
			$("#palavra-2").addClass("palavra_2");
			$("#palavra-3").html('CO');
			contador = 0;
		}else{
			erro();
			$(".palavra_1").text('');
			$(".palavra_2").text('');
			contador = 0;
		}
	}else if(contador1 == 6){
		concatenar();
		
		if(palavra === teste[contador1]){
			acertou();
			verifica = 1;
			$("#palavra-1").removeClass("palavra_1");
			$("#palavra-2").removeClass("palavra_2");
			contador1++;
			limpar();
			imagem(contador1);
			$("#palavra-1").html('ME');
			$("#palavra-2").addClass("palavra_1");
			$("#palavra-3").addClass("palavra_2");
			contador = 0;
		}else{
			erro();
			$(".palavra_1").text('');
			$(".palavra_2").text('');
			contador = 0;
		}
	}else if(contador1 == 7){
		concatenar();
		
		if(palavra === teste[contador1]){
			acertou();
			verifica = 1;
			$("#palavra-2").removeClass("palavra_1");
			$("#palavra-3").removeClass("palavra_2");
			contador1++;
			limpar();
			imagem(contador1);
			$("#palavra-1").addClass("palavra_1");
			$("#palavra-2").addClass("palavra_2");
			$("#palavra-3").html('FA');
			contador = 0;
		}else{
			erro();
			$(".palavra_1").text('');
			$(".palavra_2").text('');
			contador = 0;
		}
	}else if(contador1 == 8){
		concatenar();
		
		if(palavra === teste[contador1]){
			acertou();
			verifica = 1;
			$("#palavra-1").removeClass("palavra_1");
			$("#palavra-2").removeClass("palavra_2");
			contador1++;
			limpar();
			imagem(contador1);
			$("#palavra-1").addClass("palavra_1");
			$("#palavra-2").html('BE');
			$("#palavra-3").addClass("palavra_2");
			contador = 0;
		}else{
			erro();
			$(".palavra_1").text('');
			$(".palavra_2").text('');
			contador = 0;
		}
	}else if(contador1 == 9){
		concatenar();
		
		if(palavra === teste[contador1]){
			acertou();
			verifica = 2;
			$("#palavra-1").removeClass("palavra_1");
			$("#palavra-2").removeClass("palavra_2");
			contador1++;
			limpar();
			imagem(contador1);
			$("#palavra-1").addClass("palavra_1");
			$("#palavra-2").html('LE');
			$("#palavra-3").addClass("palavra_2");
			$("#palavra-4").addClass("palavra_3");
			contador = 0;
		}else{
			erro();
			$(".palavra_1").text('');
			$(".palavra_2").text('');
			$(".palavra_3").text('');
			contador = 0;
		}
	}else if(contador1 == 10){
		concatenar();
		
		if(palavra === teste[contador1]){
			acertou();
			verifica = 2;
			$("#palavra-1").removeClass("palavra_1");
			$("#palavra-2").removeClass("palavra_2");
			$("#palavra-4").removeClass("palavra_3");
			contador1++;
			limpar();
			imagem(contador1);
			$("#palavra-1").html('CA');
			$("#palavra-2").addClass("palavra_1");
			$("#palavra-3").addClass("palavra_2");
			$("#palavra-4").addClass("palavra_3");
			contador = 0;
		}else{
			erro();
			$(".palavra_1").text('');
			$(".palavra_2").text('');
			$(".palavra_3").text('');
			contador = 0;
		}
	}else if(contador1 == 11){
		concatenar();
		
		if(palavra === teste[contador1]){
			acertou();
			verifica = 2;
			$("#palavra-2").removeClass("palavra_1");
			$("#palavra-3").removeClass("palavra_2");
			$("#palavra-4").removeClass("palavra_3");
			contador1++;
			limpar();
			imagem(contador1);
			$("#palavra-1").addClass("palavra_1");
			$("#palavra-2").addClass("palavra_2");
			$("#palavra-3").addClass("palavra_3");
			$("#palavra-4").html('TO');
			contador = 0;
		}else{
			erro();
			$(".palavra_1").text('');
			$(".palavra_2").text('');
			$(".palavra_3").text('');
			contador = 0;
		}
	}else{
		concatenar();
		
		if(palavra === teste[contador1]){
			acertou();
			limparTudo();
			fase4ParaMenu();
		}else{
			erro();
			$(".palavra_1").text('');
			$(".palavra_2").text('');
			$(".palavra_3").text('');
			contador = 0;
		}
	}
}
//limpa todo conteúdo que foi inserido nas divs para poder continuar a próxima etapa da fase
function limparTudo(){
	limpar();
	contador1=0;
	verifica = 0;
	contador=0;
	//removeClass = remove a class que foi criada anteriormente ou que já existia na fase
	$("#palavra-1").removeClass("palavra_1");
	$("#palavra-1").removeClass("palavra_2");
	$("#palavra-1").removeClass("palavra_3");
	$("#palavra-2").removeClass("palavra_1");
	$("#palavra-2").removeClass("palavra_2");
	$("#palavra-2").removeClass("palavra_3");
	$("#palavra-3").removeClass("palavra_1");
	$("#palavra-3").removeClass("palavra_2");
	$("#palavra-3").removeClass("palavra_3");
	$("#palavra-4").removeClass("palavra_1");
	$("#palavra-4").removeClass("palavra_2");
	$("#palavra-4").removeClass("palavra_3");
	$(".img-principal").attr("src", "imagem/faseQuatro/0.png");
}
//concatena o que está escrito na tela, para que seja possível fazer a verificação da resposta
function concatenar(){
		teste[contador1];
		var silaba_1 = $("#palavra-1").text();
		var silaba_2 = $("#palavra-2").text();
		var silaba_3 = $("#palavra-3").text();
		var silaba_4 = $("#palavra-4").text();
		var silaba_5 = $("#palavra-5").text();
		palavra = silaba_1.concat(silaba_2.concat(silaba_3.concat(silaba_4.concat(silaba_5))));	
}