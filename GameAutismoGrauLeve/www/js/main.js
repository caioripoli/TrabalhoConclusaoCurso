//conteúdo de todas as fases
var frase = "";
var frase2 = "";
var personagem = 3;
var count = 0, count1 = 0;
var letras = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p",  "r", "s", "t", "v", "w", "x", "y", "z", "a", "e", "i", "o", "u"];
var escrever_fase2 = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "X", "Y", "Z", "A", "E", "I", "O", "U"];
//permitir somente no formato paisagem o jogo
document.addEventListener("intel.xdk.device.ready", onDeviceReady, false);               
function onDeviceReady(){
    intel.xdk.device.setRotateOrientation('landscape');
    intel.xdk.device.hideSplashScreen();   
}
// ao iniciar a fase, é pronunciado o que a fase faz
function somInicial(som){
	responsiveVoice.speak(som, "Brazilian Portuguese Female");
}  
//ao iniciar o jogo todas as classes são "escondidas" e apenas a de apresentação é mostrada
// show = mostra conteúdo
// hide = esconde conteúdo
window.onload = function() {
	$("#apresentacao").show();
	$("#inicio").hide();
	$("#menu").hide();
	$("#topo").hide();
	$(".fase1_0").hide();
	$(".fase1_1").hide();
	$(".fase1_2").hide();
	$(".fase_1").hide();
	$(".fase_2").hide();
	$(".fase_3").hide();	
	$(".fase_4").hide();
	$(".ajuda-1").hide();
	$("#fechar").hide();
	$("#texto").hide();
	$("#primeira").hide();	
	$("#segunda").hide();	
	$("#terceira").hide();	
	$("#quarta").hide();
	
	window.setTimeout("showInicio()",10000);
}
//apos a div de apresentação ser mostrada, os personagens aparecem e para que o jogo continue é preciso escolher um deles
function showInicio(){
	$("#apresentacao").fadeOut(1000, function(){
		$("#inicio").fadeIn(1000);
	});
}
//ao escolher o personagem a função menu é chamada, na qual irá contar as fases do jogo
function menu(numero){
	
	if(numero == 0){
		personagem = 0;
	}else{
		personagem = 1;
	}
	
	$("#inicio").fadeOut(1000, function(){
		$("#menu").fadeIn(1000);
		$('body').css("background-color", "#008B45");
	});	
}
//ao clicar no botão home o jogo retorna a fase 1 (essa função só irá funcionar quando o jogador estiver na fase um)
function fase1ParaMenu(){
	count1 = 0;
	$(".iconMais_1").show();
	$(".fase1_0").fadeOut(1000, function(){
		$("#menu").fadeIn(1000);
		$("#topo").hide();
		$(".fase_1").hide();
		$(".fase1_0").hide();
		$(".fase1_1").hide();
		$(".fase1_2").hide();
	});
}
//faz a mesma coisa que a função fase1ParaMenu()
function fase2ParaMenu(){
	count = 0;
	$(".iconMais").show();
	$(".fase_2").fadeOut(1000, function(){
		$("#menu").fadeIn(1000);
		$(".imgLetra").attr("src", "imagem/letras/" + count + ".png");
		$(".imgSilabas").attr("src", "imagem/silabas/" + count + ".png");
		$("#topo").hide();
		apagar();
	});
}
//faz a mesma coisa que a função fase1ParaMenu()
function fase3ParaMenu(){
	$(".fase_3").fadeOut(1000, function(){
		$("#menu").fadeIn(1000);
		$("#topo").hide();
	});
}
//faz a mesma coisa que a função fase1ParaMenu()
function fase4ParaMenu(){
	limparTudo();
	$(".fase_4").fadeOut(1000, function()	{
		$("#menu").fadeIn(1000);
		$("#topo").hide();
	});
}
//ao clicar no botão da fase um no menu a função fase1() é chamada e assim o conteudo anterior irá desaparecer e os itens da fase  
//vão aparecer no lugar do menu
function fase1(){
	
	$("#menu").fadeOut(1000, function(){
		$(".fase1_0").fadeIn(1000);
		$("#topo").show();
		var som = 'Aprendendo o som';
		somInicial(som);
		$(".fase_1").show();
		$(".topo-1").show();
		$(".topo-2").hide();
		$(".topo-3").hide();
		$(".topo-4").hide();
		$(".iconVoltar_1").hide();
		$('body').css("background-color", "#008B45");
		if(personagem == 0){
			$(".imagem-fase1").attr("src", "imagem/img-1.png");		
		}else{
			$(".imagem-fase1").attr("src", "imagem/img-3.png");		
		}			
	});			
}
//faz a mesma coisa que a função fase1(), porém o conteudo será da fase 2 
function fase2(){
	$("#menu").fadeOut(1000, function()	{
		$(".fase_2").fadeIn(1000);
		$("#topo").show();
		var som = 'Vamos juntar';
		somInicial(som);
		$(".topo-2").show();
		$(".topo-1").hide();
		$(".topo-3").hide();
		$(".topo-4").hide();
		$(".iconVoltar").hide();
		$('body').css("background-color", "#008B45");		
	});	
}
//faz a mesma coisa que a função fase1(), porém o conteudo será da fase 3
function fase3(){
		criarEventos();
		potes = carregarPotes();
		iniciarRodada();
		
		$("#menu").fadeOut(1000, function(){
			$(".fase_3").fadeIn(1000);
			$("#topo").show();
			var som = 'Juntando o som inicial';
			somInicial(som);
			$(".topo-3").show();
			$(".topo-1").hide();
			$(".topo-2").hide();
			$(".topo-4").hide();
		});	
}
//faz a mesma coisa que a função fase1(), porém o conteudo será da fase 4
function fase4(){
	$("#menu").fadeOut(1000, function(){
		$(".fase_4").fadeIn(1000);
		$("#topo").show();
		var som = 'Complete a palavra';
		somInicial(som);
		$(".img-principal").show();
		$("#palavra-1").addClass("palavra_1");
		$("#palavra-2").html("DO");	
		$(".topo-4").show();
		$(".topo-1").hide();
		$(".topo-2").hide();
		$(".topo-3").hide();
		$(".superior").hide();
		$(".voltarParaFase").hide();
		
		$('body').css("background-color", "#008B45");
	});	
}
//volta ao menu na fase 3
function voltarFase(){
	$(".superior").hide();
	$(".voltarParaFase").hide();
	$('div#img-verificar > img').remove();
	$("#img-verificar").removeClass("img-resposta");
}
//ao clicar no botão ajuda "?" no menu, o conteúdo de ajuda será exibido na tela
function ajuda(){
	$("#menu").fadeOut(1000, function(){		
		$(".ajuda-1").fadeIn(1000);
		$("#fechar").show();
		$("#primeira").show();
		$("#segunda").show();
		$("#terceira").show();
		$("#quarta").show();
		$(".apresentar_fase1_left").show();
		$(".apresentar_fase2_left").hide();
		$(".apresentar_fase3_left").hide();
		$(".apresentar_fase4_left").hide();
		$(".apresentar_fase1_right").show();
		$(".apresentar_fase2_right").hide();
		$(".apresentar_fase3_right").hide();
		$(".apresentar_fase4_right").hide();
		$('body').css("background-color", "#008B45");	
		if(personagem == 0){
			$(".ajuda-fase1").attr("src", "imagem/img-1.png");		
		}else{
			$(".ajuda-fase1").attr("src", "imagem/img-3.png");		
		}			
	});	
}
//ao clicar no icone fechar, o conteúdo que está sendo exibido no momento irá ser fechado 
function fechar(){
	$(".ajuda-1").fadeOut(1000, function(){
		$("#menu").fadeIn(1000);
		$("#fechar").hide();
		$("#texto").hide();
		$("#primeira").hide();
		$("#segunda").hide();
		$("#terceira").hide();
		$("#quarta").hide();
	});	
}
//todas funções mostrar irão exibir ou não exibir conteúdos das div
//caso a div esteja com show, o conteúdo é exibido na tela
//caso a div esteja com hide, o conteúdo não é exibido na tela
function mostrarUm(){
	$(".apresentar_fase1_left").show();
	$(".apresentar_fase2_left").hide();
	$(".apresentar_fase3_left").hide();
	$(".apresentar_fase4_left").hide();
	$(".apresentar_fase1_right").show();
	$(".apresentar_fase2_right").hide();
	$(".apresentar_fase3_right").hide();
	$(".apresentar_fase4_right").hide();
	
}

function mostrarDois(){
	$(".apresentar_fase2_left").show();
	$(".apresentar_fase3_left").hide();
	$(".apresentar_fase4_left").hide();
	$(".apresentar_fase1_left").hide();
	$(".apresentar_fase2_right").show();
	$(".apresentar_fase3_right").hide();
	$(".apresentar_fase4_right").hide();
	$(".apresentar_fase1_right").hide();
}

function mostrarTres(){
	$(".apresentar_fase3_left").show();
	$(".apresentar_fase4_left").hide();
	$(".apresentar_fase1_left").hide();
	$(".apresentar_fase2_left").hide();
	$(".apresentar_fase3_right").show();
	$(".apresentar_fase4_right").hide();
	$(".apresentar_fase1_right").hide();
	$(".apresentar_fase2_right").hide();
}

function mostrarQuatro(){
	$(".apresentar_fase4_left").show();
	$(".apresentar_fase1_left").hide();
	$(".apresentar_fase2_left").hide();
	$(".apresentar_fase3_left").hide();
	$(".apresentar_fase4_right").show();
	$(".apresentar_fase1_right").hide();
	$(".apresentar_fase2_right").hide();
	$(".apresentar_fase3_right").hide();
}