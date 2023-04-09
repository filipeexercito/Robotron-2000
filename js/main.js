const controles = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controles.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca)
    }
    )
});

function manipulaDados(operacao, controle, peca) {
    const inputClicado = controle.querySelector("[data-contador]");

    if (operacao === "-") {
        inputClicado.value = parseInt(inputClicado.value) - 1;
        estatisticas.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        });
    }
    else {
        inputClicado.value = parseInt(inputClicado.value) + 1;
        estatisticas.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        });
    }
}


/*robotron.addEventListener("click", () => { console.log("oi") });

//código JavaScript quando armazenado para ser utilizado várias vezes, precisa estar dentro de uma função//
function dizOi(nome) {
    console.log("Oi " + nome);
    console.log("Bem vindo ao Robotron!");
}

dizOi("Filipe");

var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"];

console.log(lista);

var pos = lista.indexOf('Vermelho');
console.log(pos);

lista.splice(pos, 1);
console.log(lista); */