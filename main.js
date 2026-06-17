// Alternar Pessoas
const botoesPessoas = document.querySelectorAll('.botao-pessoa');
const paineis = document.querySelectorAll('.painel-pessoa');

botoesPessoas.forEach((btn, i) => {
    btn.onclick = () => {
        botoesPessoas.forEach(b => b.classList.remove('ativo'));
        paineis.forEach(p => p.classList.remove('ativo'));
        btn.classList.add('ativo');
        paineis[i].classList.add('ativo');
    };
});

// Alternar Objetivos e Sub-abas
document.querySelectorAll('.botao').forEach(btn => {
    btn.onclick = function() {
        const painel = this.closest('.painel-pessoa');
        painel.querySelectorAll('.botao').forEach(b => b.classList.remove('ativo'));
        painel.querySelectorAll('.aba-conteudo').forEach(a => a.classList.remove('ativo'));
        
        this.classList.add('ativo');
        const index = Array.from(painel.querySelectorAll('.botao')).indexOf(this);
        painel.querySelectorAll('.aba-conteudo')[index].classList.add('ativo');
    };
});

// Lógica de sub-abas (Tempo vs Como completar)
document.querySelectorAll('.sub-botao').forEach(btn => {
    btn.onclick = function() {
        const container = this.closest('.aba-conteudo');
        container.querySelectorAll('.sub-botao').forEach(b => b.classList.remove('ativo'));
        container.querySelectorAll('.conteudo-sub-aba').forEach(a => a.classList.remove('ativo'));
        
        this.classList.add('ativo');
        const index = Array.from(container.querySelectorAll('.sub-botao')).indexOf(this);
        container.querySelectorAll('.conteudo-sub-aba')[index].classList.add('ativo');
    };
});

// Lógica de cronômetro (Mantida do anterior, atualizando os campos)
function atualizaCronometro() {
    const contadores = document.querySelectorAll(".contador-digito-numero");
    // Sua lógica de cálculo aqui...
}
setInterval(atualizaCronometro, 1000);