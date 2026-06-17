// =======================================================
// 1. Lógica de navegação: Seleção de Pessoas
// =======================================================
const botoesPessoa = document.querySelectorAll(".botao-pessoa");
const paineisPessoa = document.querySelectorAll(".painel-pessoa");

for (let i = 0; i < botoesPessoa.length; i++) {
    botoesPessoa[i].onclick = function () {
        // Remove a classe 'ativo' de todas as pessoas e painéis
        for (let j = 0; j < botoesPessoa.length; j++) {
            botoesPessoa[j].classList.remove("ativo");
            paineisPessoa[j].classList.remove("ativo");
        }
        // Adiciona a classe 'ativo' apenas no item clicado
        botoesPessoa[i].classList.add("ativo");
        paineisPessoa[i].classList.add("ativo");
    }
}

// =======================================================
// 2. Lógica de navegação: Seleção de Objetivos (Interno)
// =======================================================
const botoesObjetivo = document.querySelectorAll(".botao");

for (let i = 0; i < botoesObjetivo.length; i++) {
    botoesObjetivo[i].onclick = function () {
        // Identifica em qual painel de pessoa o clique aconteceu
        const painelAtual = this.closest(".painel-pessoa");
        const botoesDoPainel = painelAtual.querySelectorAll(".botao");
        const conteudosDoPainel = painelAtual.querySelectorAll(".aba-conteudo");

        // Descobre a posição (índice) do botão clicado dentro daquele painel
        let index = Array.from(botoesDoPainel).indexOf(this);

        // Reseta apenas os botões e conteúdos do painel atual
        for (let j = 0; j < botoesDoPainel.length; j++) {
            botoesDoPainel[j].classList.remove("ativo");
            conteudosDoPainel[j].classList.remove("ativo");
        }

        // Ativa o botão e a aba correspondentes
        botoesDoPainel[index].classList.add("ativo");
        conteudosDoPainel[index].classList.add("ativo");
    }
}

// =======================================================
// 3. Lógica do Cronômetro
// =======================================================
const contadores = document.querySelectorAll(".contador");

// Ajuste as datas dos seus 4 objetivos abaixo (Ano-Mês-Dia)
const tempoObjetivo1 = new Date("2026-10-05T00:00:00");
const tempoObjetivo2 = new Date("2026-12-05T00:00:00");
const tempoObjetivo3 = new Date("2026-12-30T00:00:00");
const tempoObjetivo4 = new Date("2027-02-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    
    // Se a data já passou, retorna tudo zero
    if (tempoFinal <= 0) {
        return [0, 0, 0, 0];
    }
    
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    
    return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        // 'i % 4' garante que as 4 datas se repitam corretamente para os 12 objetivos da tela
        let tempo = calculaTempo(tempos[i % 4]); 
        
        // Pega os parágrafos numéricos específicos dentro do contador atual
        let digitos = contadores[i].querySelectorAll(".contador-digito-numero");
        
        // Preenche os dados de Dias, Horas, Minutos e Segundos
        if (digitos.length === 4) {
            digitos[0].textContent = tempo[0]; 
            digitos[1].textContent = tempo[1]; 
            digitos[2].textContent = tempo[2]; 
            digitos[3].textContent = tempo[3]; 
        }
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();