// ==========================================================
// 1. LÓGICA DE NAVEGAÇÃO (PESSOAS E OBJETIVOS)
// ==========================================================

const botoesPessoas = document.querySelectorAll('.botao-pessoa');
const paineisPessoas = document.querySelectorAll('.painel-pessoa');

// Alterna entre as 3 Pessoas
for (let i = 0; i < botoesPessoas.length; i++) {
    botoesPessoas[i].onclick = function () {
        for (let j = 0; j < botoesPessoas.length; j++) {
            botoesPessoas[j].classList.remove('ativo');
            paineisPessoas[j].classList.remove('ativo');
        }
        botoesPessoas[i].classList.add('ativo');
        paineisPessoas[i].classList.add('ativo');
    }
}

const botoesObjetivos = document.querySelectorAll('.botao');

// Alterna entre os Objetivos DENTRO do painel ativo
for (let i = 0; i < botoesObjetivos.length; i++) {
    botoesObjetivos[i].onclick = function () {
        const painelAtual = this.closest('.painel-pessoa');
        const botoesDessePainel = painelAtual.querySelectorAll('.botao');
        const abasDessePainel = painelAtual.querySelectorAll('.aba-conteudo');

        for (let j = 0; j < botoesDessePainel.length; j++) {
            botoesDessePainel[j].classList.remove('ativo');
            abasDessePainel[j].classList.remove('ativo');
        }

        this.classList.add('ativo');
        
        const index = Array.from(botoesDessePainel).indexOf(this);
        abasDessePainel[index].classList.add('ativo');
    }
}

// ==========================================================
// 2. LÓGICA DO CRONÔMETRO (CONTAGEM REGRESSIVA)
// ==========================================================

const contadores = document.querySelectorAll(".contador");

// Defina as datas para TODOS os objetivos de todas as pessoas
// Como no HTML de exemplo criamos 6 objetivos no total (2 por pessoa), precisamos de 6 datas:
const tempos = [
    new Date("2026-10-05T00:00:00"), // Pessoa 1 - Obj 1
    new Date("2026-12-05T00:00:00"), // Pessoa 1 - Obj 2
    new Date("2026-12-30T00:00:00"), // Pessoa 2 - Obj 1
    new Date("2027-02-01T00:00:00"), // Pessoa 2 - Obj 2
    new Date("2027-05-15T00:00:00"), // Pessoa 3 - Obj 1
    new Date("2027-08-20T00:00:00")  // Pessoa 3 - Obj 2
];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    
    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    // Esse laço passa por todos os elementos ".contador" do seu HTML
    for (let i = 0; i < contadores.length; i++) {
        // Pega os 4 dígitos (dias, horas, min, seg) dentro desse contador específico
        let digitos = contadores[i].querySelectorAll(".contador-digito-numero");
        
        // Pega os tempos calculados para a data correspondente
        let tempoCalculado = calculaTempo(tempos[i]);
        
        // Atualiza os textos de forma dinâmica (sem precisar de IDs específicos)
        if (digitos.length === 4) {
            digitos[0].textContent = tempoCalculado[0]; // Dias
            digitos[1].textContent = tempoCalculado[1]; // Horas
            digitos[2].textContent = tempoCalculado[2]; // Min
            digitos[3].textContent = tempoCalculado[3]; // Seg
        }
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();