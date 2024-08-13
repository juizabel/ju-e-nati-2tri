const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Sofia, atravessando o parque em um estado de profunda melancolia, avista um caderno abandonado a distância. Ao notar que ele contém anotações de alguém que também enfrentava a tristeza, ela se vê dividida sobre o que fazer. Sofia pondera se deve se aproximar e ler o caderno para buscar inspiração para novas formas de expressão, como escrever ou desenhar, ou se deve seguir em frente sem se envolver com o conteúdo que poderia refletir suas próprias emoções.",

        alternativas: [
            {
                texto: "pegar o caderno e folear",
                afirmacao: "Sofia folheia o caderno e encontra anotações de alguém que também lutava com a tristeza. Isso a faz sentir-se mais conectada e a inspirar-se a começar um novo hobby, como escrever ou desenhar, para expressar seus próprios sentimentos."
            },
            {
                texto: "ignorar o caderno e seguir em frente",
                afirmacao: "Sofia decide deixar o caderno onde está e continuar andando. Ela percebe que está evitando mudanças e decide buscar ajuda e fazer algo para melhorar sua vida."
            }
        ]
    },
    {
        enunciado: "Sofia vê um grupo de pássaros cantando em uma árvore.",
        alternativas: [
            {
                texto: "Parar e Tirar Fotos",
                afirmacao: "Sofia tira fotos dos pássaros e se surpreende com a beleza do momento. Isso a faz sentir-se um pouco melhor e a inspirar-se a procurar mais momentos simples que possam alegrar seu dia."
            },
            {
                texto: "Ignorar os Pássaros e Continuar Caminhando",
                afirmacao: "Sofia ignora os pássaros e continua sua caminhada. Ela percebe que está evitando enfrentar seus sentimentos e decide começar a procurar maneiras de lidar com suas emoções de forma mais positiva."
            }
        ]
    },
    {
        enunciado: "Sofia encontra uma pequena loja de antiguidades chamada Tesouros do Passado",
        alternativas: [
            {
                texto: "Entrar na Loja e Explorar",
                afirmacao: "Sofia entra na loja e encontra um objeto antigo que a faz lembrar da infância. Isso a ajuda a se reconectar com coisas que trazem alegria e a motivar-se a buscar mais coisas que a façam feliz."
            },
            {
                texto: "Observar a Loja e Seguir em Frente",
                afirmacao: "Sofia decide não entrar na loja e segue em frente. Ao refletir sobre sua decisão, ela percebe que está perdendo oportunidades e decide ser mais aberta a novas experiências e mudanças."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "e entao Sofia ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
