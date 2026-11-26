// --- TEMPORIZADOR ---
// Data em que a nova atualização será liberada (15 dias a partir de 26/11/2026).
// Para mudar: ano, mês (0-11, ou seja dezembro = 11), dia, hora, minuto.
const dataLancamento = new Date(2026, 11, 11, 0, 0, 0);

const elDias = document.getElementById('dias');
const elHoras = document.getElementById('horas');
const elMinutos = document.getElementById('minutos');
const elSegundos = document.getElementById('segundos');
const fraseFinal = document.getElementById('frase-final');

function dois(n) {
    return n.toString().padStart(2, '0');
}

function atualizarTemporizador() {
    const diferenca = dataLancamento - new Date();

    if (diferenca <= 0) {
        elDias.innerText = elHoras.innerText = elMinutos.innerText = elSegundos.innerText = '00';
        fraseFinal.innerText = 'A surpresa chegou! Atualize a página ❤️';
        clearInterval(intervalo);
        return;
    }

    elDias.innerText = dois(Math.floor(diferenca / (1000 * 60 * 60 * 24)));
    elHoras.innerText = dois(Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    elMinutos.innerText = dois(Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60)));
    elSegundos.innerText = dois(Math.floor((diferenca % (1000 * 60)) / 1000));
}

const intervalo = setInterval(atualizarTemporizador, 1000);
atualizarTemporizador();

// --- CORAÇÕES FLUTUANDO NO FUNDO ---
const coracoes = document.getElementById('coracoes');
const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduzirMovimento) {
    for (let i = 0; i < 18; i++) {
        const c = document.createElement('span');
        c.innerText = Math.random() > 0.3 ? '❤️' : '🤍';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.fontSize = (Math.random() * 16 + 10) + 'px';
        c.style.animationDuration = (Math.random() * 10 + 10) + 's';
        c.style.animationDelay = (Math.random() * -20) + 's';
        coracoes.appendChild(c);
    }
}
