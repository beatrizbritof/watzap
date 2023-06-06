//////////////////////////// JOGO TROCA PALAVRAS ///////////////////////
function mudarNome() {
    var nome = document.getElementById('nome').value

    document.getElementById('macaco').innerHTML = nome
    document.getElementById('Oz').innerHTML = nome
    document.getElementById('segredo').innerHTML = nome
    document.getElementById('rush').innerHTML = nome
    document.getElementById('nemo').innerHTML = nome
}





/////////////////// JOGO DA VELHA //////////////////
// var casas = [9, 9, 9, 9, 9, 9, 9, 9, 9];
// var vez = 1;
// var contaClique = 0;

// var iPontosx = 0;
// var iPontosO = 0;
// var iPontosV = 0;
// var sResposta = "";


// //função que verifica as jogadas
// function verifica(casa) {
//     if (casas[casa] == 9) {
//         casas[casa] = vez;

//         if (vez == 1) {
//             document.getElementById("imgVelha" + casa).src = '../imagens/velha/xis.png';
//             document.getElementById("imgVelha" + casa).style.height = '150px'
//             document.getElementById("imgVelha" + casa).style.marginLeft = '12.5%'
//             document.getElementById("imgVelha" + casa).style.marginTop = '12.5%'
//         } else {
//             document.getElementById("imgVelha" + casa).src = "../imagens/velha/bola.png"
//             document.getElementById("imgVelha" + casa).style.height = '150px'
//             document.getElementById("imgVelha" + casa).style.marginLeft = '12.5%'
//             document.getElementById("imgVelha" + casa).style.marginTop= '12.5%'
//         }

//         vez *= -1;
//         contaClique++;

//         confere()
//     }
// }

// function confere() {
//     var i;
//     var lGanhou = false;
//     lAcabou = true;

//     for (i = 0; i < casas.length; i++) {
//         if (casas[i] == 9) {
//             lAcabou = false;
//         }
//     }

//     if (contaClique == 9) {
//         lAcabou = true;
//     }

//     var Soma = [];
//     Soma[0] = casas[0] + casas[1] + casas[2];
//     Soma[1] = casas[3] + casas[4] + casas[5];
//     Soma[2] = casas[6] + casas[7] + casas[8];
//     Soma[3] = casas[0] + casas[3] + casas[6];
//     Soma[4] = casas[1] + casas[4] + casas[7];
//     Soma[5] = casas[2] + casas[5] + casas[8];
//     Soma[6] = casas[0] + casas[4] + casas[8];
//     Soma[7] = casas[2] + casas[4] + casas[6];

//     for (i = 0; i < Soma.length; i++) {
//         if (Soma[i] == -3) {++
//             lGanhou = true;
//             sResposta = "Bolinha GANHOU!"
//             iPontosO++;
//             document.getElementById("bola").innerHTML = "PONTOS O: " + iPontosO;
//             break;
//         } else if (Soma[i] == 3) {
//             lGanhou = true;
//             sResposta = "Xis GANHOU!"
//             iPontosx++;
//             document.getElementById("xis").innerHTML = "PONTOS X: " + iPontosx;
//             break;
//         }
//     }

//     if (lGanhou == false && lAcabou == true) {
//         sResposta = "Deu Velha"
//         iPontosV++;
//         document.getElementById("velha").innerHTML = "VELHA...: " + iPontosV;
//     }

//     if (lGanhou || lAcabou) {
//         for (i = 0; i < casas.length; i++) {
//             document.getElementById("casa" + i).disable = true;
//             casas[i] = 0;
//         }

//         document.getElementById("resposta").innerHTML = sResposta;
//         document.getElementById("resposta").style.color = "#ffc400";
//         document.getElementById("resposta").style.fontSize = "xx-large";
//     }
// }

// function recomeca() {
//     for (i = 0; i < casas.length; i++) {
//         document.getElementById("imgVelha" + i).ondragstart = function () { return false; };

//         document.getElementById("casa" + i).disable = true;

//         document.getElementById("imgVelha" + i).src = "";

//         document.getElementById("resposta").innerHTML = "RESULTADO: ";
//         document.getElementById("resposta").style.color = "#F5FF00";
//         document.getElementById("resposta").style.fontSize = "large";

//         casas[i] = 9;
//         lGanhou = false;
//         lAcabou = true;
//         contaClique = 0;
//         vez = 1;
//     }
// }

















































/////////////////////////////////////////////////// JOGO DA FORCA ////////////////////////////////////////////
//matriz com a palavra e o tema
var sPerguntas = [["CARAMBOLA", "FRUTA"], ["JABOTICABA", "FRUTA"], ["JAMBO", "FRUTA"], ["CUPUAÇU", "FRUTA"],
['FORTALEZA', 'CIDADE'], ['HOLAMBRA', 'CIDADE'], ['TERESOPOLIS', 'CIDADE'], ['HORTOLANDIA', 'CIDADE'], ['CARAPICUIBA', 'CIDADE'],
['ALICATE', 'FERRAMENTA'], ['MARTELO', 'FERRAMENTA'], ['SERRA TICO-TICO', 'FERRAMENTA'], ['FORMÃO', 'FERRAMENTA'], ['CHAVE DE FENDA', 'FERRAMENTA'], ['ALMOFADA', 'OBJETO'], ['JORNAL', 'OBJETO'], ['BOLSA', 'OBJETO'], ['PALITO DE DENTE', 'OBJETO'], ['CHURRASQUEIRA', 'OBJETO'], ['STROGONOFF', 'COMIDA'], ['LASANHA', 'COMIDA'], ['MACARRONADA', 'COMIDA'], ['FRANGO XADREZ', 'COMIDA'], ['CANELONE', 'COMIDA'], ['AEROWILLYS', 'CARRO'], ['SANTANA', 'CARRO'], ['VARIANT', 'CARRO'], ['RENEGADE', 'CARRO'], ['VIRTUS', 'CARRO'], ['ROSA', 'FLOR'], ['GERBERA', 'FLOR'], ['CALANCHUE', 'FLOR'], ['ORQUIDEA', 'FLOR'], ['LIRIO', 'FLOR'], ['VIOLAO', 'INSTRUMENTO MUSICAL'], ['SAXOFONE', 'INSTRUMENTO MUSICAL'], ['UKULELE', 'INSTRUMENTO MUSICAL'], ['ESCALETA', 'INSTRUMENTO MUSICAL'], ['TROMBONE', 'INSTRUMENTO MUSICAL'], ['ADAM SANDLER', 'ATOR'], ['JOHNNY DEPP', 'ATOR'], ['DWAYNE JOHNSON', 'ATOR'], ['WILL SMITH', 'ATOR'], ['BRAD PITT', 'ATOR'], ['JULIA ROBERTS', 'ATRIZ'], ['MERYL STREEP', 'ATRIZ'], ['BRIE LARSON', 'ATRIZ'], ['SCARLETT JOHANSSON', 'ATRIZ'], ['ZOE SALDANA', 'ATRIZ'], ['PATO DONALD', 'PERSONAGEM'], ['HOMEM DE FERRO', 'PERSONAGEM'], [' CAPITAO AMERICA', 'PERSONAGEM'], ['CORINGA', 'PERSONAGEM'], ['AQUAMAN', 'PERSONAGEM'], ['SPACE INVADERS', 'JOGOS'], ['PAC-MAN', 'JOGOS'], ['HALF-LIFE', 'JOGOS'], ['CALL OF DUTY', 'JOGOS'], ['MINECRAFT', 'JOGOS']];


var iSorteados = [];
var iJogada = 0;
var sPalavraSorteada;
var iAcertos = 0;
var iErro = 0;
var cLetraClicada = '';
var sLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'];
var iCertas = 0;
var iErradas = 0;

//***************************************************************
function criaLetras(sPalavra) {
    var formula = document.getElementById('tenta');
    var j = 0;

    console.log("PALAVRA: " + sPalavra);
    for (var i = 0; i < sPalavra.length; i++) {
        if (sPalavra[i].charCodeAt(0) != 32) {
            var letra = document.createElement("input");

            letra.setAttribute("type", "text");
            letra.setAttribute("name", "tenta" + j);
            letra.setAttribute("id", "tenta" + j);
            letra.setAttribute("maxlength", 1);
            letra.setAttribute("size", 1);
            letra.setAttribute("disabled", true);

            formula.appendChild(letra);
            j++;
        } else {
            document.getElementById("tenta" + (j - 1)).style.margin = '0px 20px 0px 1px';
        }
    }

    sPalavraSorteada = limpa(sPalavra);
    document.getElementById("tema").innerHTML = sPerguntas[iSorteados[iJogada]][1] + " - " + sPalavraSorteada.length + " letras";
}

function sorteia() {
    for (var m = 0; m < sPerguntas.length; m++) {
        iSorteados.push(m);
    }

    iSorteados = shuffleArray(iSorteados);
    criaLetras(sPerguntas[iSorteados[iJogada]][0]);
}



////////////////////confere a letra clicada
function confere(cLetra) {
    cLetraClicada = cLetra;

    var lAchou = false;

    for (var i = 0; i < sPalavraSorteada.length; i++) {
        if (cLetra == sPalavraSorteada.charAt(i)) {
            document.getElementById("tenta" + i).value = cLetra;

            iAcertos++;

            document.getElementById("acerto").innerHTML = "ACERTOS: " + iAcertos;

            lAchou = true;
        }
    }

    if (lAchou == false) {
        iErro++;
        document.getElementById("imagemForca").src = 'imagens/forca/forca' + (iErro + 1) + ".png";
    }
}


////////////  função que verifica se o jogo acabou
function acabou() {
    var lAcabou = false;

    if (iAcertos == sPalavraSorteada.length) {
        lAcabou = true;

        alert("PARABÉNS, VOCÊ NÃO MATOU UM UNICÓRNIO INOCENTE!!!!");
        iCertas++;
    } else if (iErro == 7) {
        lAcabou = true;
        alert("VOCÊ ENFORCOU UM UNICÓRNIO INOCENTE!!!")
        iErradas++;
    }

    document.getElementById(cLetraClicada).disabled = true;

    if (lAcabou) {
        for (var i = 0; i < sPalavraSorteada.length; i++) {
            document.getElementById("tenta" + i).remove();
        }


        iJogada++;

        document.getElementById("palcerta").innerHTML = "PALAVRAS CERTAS: " + iCertas + "<br>PALAVRAS ERRADAS: " + iErradas;

        criaLetras(sPerguntas[iSorteados[iJogada]][0]);

        iAcertos = 0;
        iErro = 0;
        document.getElementById("acerto").innerHTML = "ACERTOS: " + iAcertos;
        document.getElementById("imagemForca").src = 'imagens/forca/forca' + (iErro + 1) + ".png"

        for (var i = 0; i < sLetras.length; i++) {
            document.getElementById(sLetras[i]).disabled = false;
        }
    }
}


function shuffleArray(d) {
    for (var c = d.length - 1; c > 0; c--) {
        var b = Math.floor(Math.random() * (c + 1));
        var a = d[c];
        d[c] = d[b];
        d[b] = a;
    }

    return d;
}


function limpa(sItem) {
    var sResultado = sItem;

    sResultado = replaceAll(sResultado, " ", "");

    sResultado = sResultado.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return sResultado;
}

function replaceAll(str, de, para) {
    var pos = str.indexOf(de);

    while (pos > -1) {
        str = str.replace(de, para);
        pos = str.indexOf(de);
    }
    return (str);
}

//////////////////////////////////////////////////////////
function shake(e, oncomplete, distance, time) {
    var time = 500;
    var distance = 5;

    var start = (new Date()).getTime();
    animate();

    function animate() {
        var now = (new Date()).getTime();

        var elapsed = now - start;

        var fraction = elapsed / time;

        if (fraction < 1) {
            var x = distance * Math.sin(fraction * 4 * Math.PI);

            e.style.left = x + "px";

            setTimeout(animate, Math.min(25, time - elapsed));
        } else {
            if (oncomplete) oncomplete(e);
        }
    }
}


function shakeme(event1) {
    shake(event1.target);
}












































/////////////////////////////////////////// CHAT ONLINE (PARTE DO USUÁRIO) //////////////////////////////////
 //Cria uma instância do Socket.IO
 const socket = io()

 //Seleciona o input do nome do usuário
 const nomeInputChat = document.getElementById('nomeChat');
 //Seleciona o input da mensagem
 const mensagemInputChat = document.getElementById('mensagemChat');
 //Seleciona a lista de mensagens
 const mensagens = document.getElementById('mensagens');

 //Adiciona um evento para o envio do formulário
 document.querySelector('#formularioChat').addEventListener('submit', evento => {
     //Previne o envio padrão do formulário para não atualizar a página
     evento.preventDefault();
     //Obptem o valor do input do nome do usuário
     const nomeChat = nomeInputChat.value;
     //Obtém o valor do input da mensagem
     const mensagemChat = mensagemInputChat.value;

     //Método JAVASCRIPT que verifica os valores válido (Não está em branco os campos)
     //EMIT envia um evento chamado "chat message" com um objeto contendo os valores
     //TRIM() é um método que remove os espaços em branco do inicio ao fim de uma string
     nomeChat.trim() && mensagemChat.trim() && socket.emit('chat message', { nomeChat, mensagemChat });
     //Limpa o input da mensagem
     mensagemInputChat.value = '';
     //Desabilita o input do nome do usuário após a primeira mensagem
     nomeInputChat.disabled = true;
 });

 //Adiciona um evento de mensagem recebido para o servidor
 socket.on('chat message', dados => {
     //Cria um elemento de lista para exibir a mensagem
     const lista = document.createElement('div');
     //Atribuir uma ID de acordo com o seu nome de usuário
     if (dados.nomeChat === nomeInputChat.value) {
         lista.setAttribute('id', 'msgDoUsuario')
     } else {
         lista.setAttribute('id', 'msgDoCorrespondente')
     }
     //Define o texto da mensagem
     lista.innerHTML = `${dados.nomeChat}<br> ${dados.mensagemChat}`;
     //Adiciona o elemento de mensagens
     mensagens.appendChild(lista);
 })

















