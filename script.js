const personagem = document.querySelector('.personagem');
const cano = document.querySelector('.cano');
const nuvem = document.querySelector('.nuvem');
const fimDeJogo = document.querySelector('.fim-de-jogo');
const reiniciar = document.querySelector('.reiniciar');

const mensagemDeDerrota = [
    'VOCÊ É RUIM HEIN MEU MANO?KKKKKKKKKKKK',
    'CAIU DE BOCA NO CANO MEU PARCEIROKKKKKKKKK',
    'PERDEU AE FOI?KKKKKKKKKKKKKKK',
    'Percebo em vc um talento escondido... MELHOR DEIXAR ESCONDIDO MSMKKKKKKKKKKKKK',
    'SÓ DESISTE AE E TMJKKKKKKKKKKKKKKKK',
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK',
    'MAIS SORTE NA PRÓXIMA MEU MANOKKKKKKKKKKKKKKKKK',
    'COÉ, FICOU DE XERECA BROTHERKKKKKKKKKKKKKKKKKKKKK',
    'QUE CRITIQUEI SEU FILHO DA PUTA!? EU SÓ ZUEI PQ FALOU PAI DE QUEIJO NÃO PÃO DE QUEIJO SEU MERDA',
    'REFLEXO DE GATO MORTO DO CARALHOKKKKKKKKKKKKK'
]

let pontos = 0;

let ganhouPontos = false;

function pontuarPorMetros() {
    
}

document.addEventListener('keyup', pulaPersonagem);

function pulaPersonagem() {

    personagem.classList.add('pular');
    setTimeout(() => {
        personagem.classList.remove('pular');
    }, 500);
}

function atualizarPontuacao() {
    pontos++;
    pontuacao.innerHTML = "Pontuação: " + pontos;
}

function verificarColisoes(){
    const posicaoCano = cano.offsetLeft;

    const posicaoPersonagem = parseFloat(getComputedStyle(personagem).bottom);

    const posicaoNuvem = parseFloat(getComputedStyle(nuvem).bottom);

    if (posicaoCano <= 100 && posicaoCano < 0 && posicaoPersonagem > 60){
        if (!ganhouPontos) {
            ganhouPontos = true;
            atualizarPontuacao();
            console.log("MANDA AQ" + ganhouPontos);
        }
    }

    if (posicaoPersonagem < 60) {
        ganhouPontos = false;
    }


    if (posicaoCano <= 100 && posicaoCano > 0 && posicaoPersonagem < 60) {
        let mensagem = Math.floor(Math.random() * 10);
        pontuacaoFinal.innerHTML = "Pontuação final: " + pontos;
        pontuacao.style.visibility = "hidden";
        telaDeDerrota.innerHTML = mensagemDeDerrota[mensagem];
        pararJogo();

        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}px`;

        personagem.style.animation = 'none';
        personagem.style.left = `${posicaoPersonagem}px`;
        personagem.src = 'assets/imgs/fim-de-jogo.png';
        personagem.style.width = '70px';
        personagem.style.marginLeft = '35px';

        nuvem.style.animation = 'nuvem 2s infinite linear';
        nuvem.style.left = `${posicaoNuvem}px`;

        fimDeJogo.style.visibility = 'visible';
    }
}

let loopJogo = setInterval(verificarColisoes, 10);

function pararJogo() {
    clearInterval(loopJogo);
    
    console.log("Jogo Parado");
}

reiniciar.addEventListener('click', () =>{
    location.reload();    
});
