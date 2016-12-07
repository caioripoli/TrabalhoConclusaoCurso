//nessa js, são feitas todas as regras da fase três
var potes = [];
var poteAtual = null;
//Esta função cria as divs que ainda não foram criadas no html
function criarEventos(){
	$('body').on('mousedown','.cartao',function(){
		var cartao = retornaObj(potes[poteAtual],$(this).attr('class').split(' ')[1]);
		falar_1(cartao.palavra);		
		definirLegenda(cartao.palavra);
		if($(this).closest('#div-selecionavel').attr('id')!='div-selecionavel')return false;
		
		$(this).addClass('selecionado');
		movimentarCartao(this);
	});

	$(document).mouseup(function(){				
		definirLegenda('');
		if($('.selecionado').size()>0){
			if(verificarSeCursorEstaSobreElemento($('#div-principal').find('.cartao'))){
				var selecionado = $('.selecionado');
				var principal = $('#div-principal').find('.cartao');
				
				compararDupla(principal,selecionado);
			}
			$('.selecionado').each(function(){
				$(this).removeClass('selecionado');
			});	
		}					
	})

	$(document).mousemove(function(){
		$('.selecionado').each(function(){					
			movimentarCartao(this);
		});
	});
}		
//chama as proximas funções
function iniciarRodada(){
	console.log('Inicio da Rodada');
	poteAtual = randomizarInteiro(0,potes.length);		
	proximaRodada();
}
//caso a quantidade de potes seja maior que zero, quer dizer que ainda contem duplas para serem jogadas
//caso o valor dos potes seja zero, a fase é finalizada
function proximaRodada(){			
	if(potes.length>0){
		var cartaoPrincipal = potes[poteAtual][0].nome;
		adicionarDivPrincipal(cartaoPrincipal);
		var arraySelecionavel = criarArrayPalavra(potes[poteAtual],cartaoPrincipal);
		adicionarDivSelecionavel(arraySelecionavel);
	}
	else{
		console.log('Fim do jogo!');
		falar_1('Fim da fase');
		fase3ParaMenu();
	}
	
}
//cria a div principal, no caso a imagem que irá conter sua dupla correta
function adicionarDivPrincipal(classe){
	$('#div-principal').html('<div class="cartao '+classe+'"></div>');
}
//cria os icones da possível dupla da div principal
function adicionarDivSelecionavel(arrayClasse){
	$('#div-selecionavel').html('');
	arrayClasse.forEach(function(classe){
		$('#div-selecionavel').append('<div class="cartao '+classe+'"></div>');
	});			
}
//cria a palavra da imagem por meio do nome que foi definida no pote
function criarArrayPalavra(pote,excluirPalavra){
	var retorno = [];
	pote.forEach(function(value){
		if(value.nome!=excluirPalavra) retorno.push(value.nome);
	});
	
	return retorno;
}
//ao clicar no icone, além de aparecer seu respectivo nome, o jogo pronuncia-o
function falar_1(palavra){
	try {
		responsiveVoice.speak(palavra, "Brazilian Portuguese Female");
	}
	catch(e) {
		console.log(e.message);
	}						
}
//escreve a palavra que foi criada ao ser sido clicado no icone
function definirLegenda(legenda){
	$('#legenda').html(legenda);
}
//permite que o icone seja movimentado até sua respectiva dupla
function movimentarCartao(cartao){
	//aqui são feito calculos da area da tela para que seja possivel movimentar os itens
	var xMouse = event.pageX;
	var yMouse = event.pageY;
	
	var larguraCartao = $(cartao).width();
	var alturaCartao = $(cartao).height();
	
	
	var xCartao = xMouse - (larguraCartao/2);
	var yCartao = $('.cima').height();			
	if(yMouse - (alturaCartao/2)>yCartao)yCartao = yMouse - (alturaCartao/2);
	
	$(cartao).css({top: yCartao, left: xCartao});
}
//verifica se o icone está sobre a div principal
function verificarSeCursorEstaSobreElemento(elemento){
	var xElemento = $(elemento).position().left+parseInt($(elemento).css('margin-left'));
	var yElemento = $(elemento).position().top+parseInt($(elemento).css('margin-top'));
	var larguraElemento = $(elemento).width();
	var alturaElemento = $(elemento).height();
	
	var xMouse = event.pageX;
	var yMouse = event.pageY;
	
	if(xMouse>=xElemento&&xMouse<=xElemento+larguraElemento){
		if(yMouse>=yElemento&&yMouse<=yElemento+alturaElemento){
			return true;
		}
		else return false;				
	}
	else{
		return false;
	}
}
//compara a dupla que foi inserida sobre a div principal, caso a dupla seja a correta ou incorreta,
// é informado ao jogador a resposta
function compararDupla(principal,selecionado){
	var nomePrincipal = principal.attr('class').split(' ')[1];
	var nomeSelecionado = selecionado.attr('class').split(' ')[1];
	
	if(retornaDupla(potes[poteAtual],nomeSelecionado)==nomePrincipal){
		exibirMensagem('Dupla correta!');
		falar_1('Dupla correta');
		removerPoteAtual();
		iniciarRodada();
	}
	else{
		exibirMensagem('Dupla incorreta!');
		falar_1('Dupla incorreta');
		//limparTela();
		//proximaRodada();
	}
}
//caso a pessoa não tenha acertado, a dupla incorreta volta ao seu lugar anterior e a pessoa pode tentar novamente
function retornaDupla(pote,nome){
	var retorno = null;
	pote.forEach(function(value){				
		if(nome==value.nome){
			retorno = value.dupla;
		}
	});
	return retorno;
}
//exibe mensagem no navegador, porém essa mansagem não é visualizada
//é mais para verificação, de possiveis erros
function exibirMensagem(msg){
	console.log(msg);
}
//escolhe um pote conforme a quantidade de potes que ainda não foram jogados pela pessoa
function randomizarInteiro(min,max){			
	return Math.floor(Math.random() * (max - min)) + min;
}

function retirarObjeto(pote,nome){
	var retorno = [];
	pote.forEach(function(obj){
		if(obj.nome!=nome)retorno.push(obj);
	});
	return retorno;
}
//conforme a pessoa acerta a dupla, o pote é retirado e apenas os outros continuam para serem jogados
function removerPoteAtual(){
	potes.splice(poteAtual,1);
	limparTela();
}
//retorna qual dupla foi inserida na div principal, para que seja possivel verificar se a dupla está correta ou não
function retornaObj(pote,nome){
	obj = {};
	pote.forEach(function(value){
		if(value.nome==nome)obj = value;
	});
	return obj;
}
//limpa o conteúdo da tela, para que um novo pote seja inserido
function limparTela(){
	$('#div-principal').html('');
	$('#div-selecionavel').html('');
}