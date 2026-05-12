const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    };
}

const botoes2 = document.querySelectorAll(".botao2");

for (let i = 0; i < botoes.length; i++) {
    botoes2[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++){
            botoes2[j].classList.remove("ativo");
        }

        botoes2[i].classList.add("ativo");
    };
}