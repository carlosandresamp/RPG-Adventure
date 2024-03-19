// Seleciona elementos
var storyElement = document.getElementById('story');
var choicesElement = document.getElementById('choices');
var restartButton = document.getElementById('restartButton');
var musicButton = document.getElementById('musicButton');
var backgroundMusic = document.getElementById('backgroundMusic');

// Variável para controlar se a música fica tocando no fundo
var isMusicPlaying = true;

// Função executada quando a página é carregada
document.addEventListener('DOMContentLoaded', function () {
    backgroundMusic.play(); // Inicia a música de fundo ao carregar a página
    displayStoryPart(currentStoryIndex); // Exibe a parte inicial da história
});

// Adiciona um evento de clique ao botão de música para pausar ou reproduzir a música
musicButton.addEventListener('click', function () {
    if (isMusicPlaying) {
        backgroundMusic.pause(); // Pausa a música
        isMusicPlaying = false;
        musicButton.textContent = '▶️'; // Altera o texto do botão para indicar que a música está pausada
    }
    else {
        backgroundMusic.play(); // Reproduz a música
        isMusicPlaying = true;
        musicButton.textContent = '⏸️';  // Altera o texto do botão para indicar que a música está sendo reproduzida
    }
});

// Declaração da variável "historia" e exibição de mensagens personalizadas
var historia;
historia = prompt('Opa! Qual o seu nome meu(minha) nobre jogador(a)?');
alert('Pow! Obrigado por testar o nosso jogo, de verdade oh ' + historia + ' esperamos que você realmente se divirta, talvez morra um bucado mas vai ser daora essa bagaça...');
alert('ATENÇÃO!!! Não perca a paciência por morrer várias vezes durante a aventura, cada caminho escolhido só possui um final em que você conclui a missão de encontar o artefato mágico, morreu? Tente outra vez...');

// Array de partes da história, cada parte contendo um texto e escolhas
var storyParts = [
    {
        text: 'Qual dos caminhos deseja seguir? (Caminho 1 é o recomendado)', //PARTE 0
        choices: [
            { text: 'Caminho 1: Ruínas Antigas', nextPart: 1 },
            { text: 'Caminho 2: Clareiras Iluminadas', nextPart: 2 }
        ]
    },
    {
        text: 'Você está nas Ruínas Antigas. Dizem que aqui é onde protegem o artefato mágico que te dar poderes jamais imaginados. Entâo ele deve estar por perto...', //PARTE 1
        choices: [
            { text: 'Seguir em frente', nextPart: 3 },
            { text: 'Seguir sem rumo', nextPart: 12 }
        ]
    },
    {
        text: 'Você está seguindo pelas clareiras e de longe vê um cavalo...', //PARTE 2 - CLAREIRAS ILUMINADAS
        choices: [
            { text: 'Fale com ele kk', nextPart: 13 },
            { text: 'Se afastar pois ele parace ser perigoso', nextPart: 14 },
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PARTE 3
        choices: [
            { text: 'Sim', nextPart: 4 },
            { text: 'Não', nextPart: 5 }
        ]
    },
    {
        text: 'O nome dele é Agar. Ele diz estar procurando o artefato, mas que se desencontrou de seu amigo, que é um cavalo falante. Ele diz saber onde está o artefato e precisa de sua ajuda para pegá-lo...', //PARTE 4
        choices: [
            { text: 'Seguir em frente', nextPart: 6 },
            { text: 'Tentar matá-lo para que só você domine o artefato 😈', nextPart: 7 }
        ]
    },
    {
        text: 'Você morreu pois de alguma forma o infeliz descobriu que você também está em busca do artefato mágico só para você kk', //PARTE 5
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Vocês atravessaram as ruínas e acharam o artefato. Porém ele está sendo protegido por uma orda de goblins', //PARTE 6
        choices: [
            { text: 'Lutar', nextPart: 8 },
            { text: 'Correr', nextPart: 9 }
        ]
    },
    {
        text: 'Você morreu esfaqueado por Agar que poderia ter se tornado o seu melhor amigo e aliado durante a aventura 😥', //PARTE 7
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Você e Agar lutam lado a lado corajosamente derrotando todos os goblins um a um em uma batalha épica pelo artefato mágico. No calor da batalha por um desliza Agar é ferido...', //PARTE 8
        choices: [
            { text: 'Salvar Agar', nextPart: 10 },
            { text: 'Deixar Agar e ir pegar o artefato mágico sozinho', nextPart: 11 }
        ]
    },
    {
        text: 'Você morreu estrasalhado pelo grande dragão que voltou para as ruínas e acabou encontrando intrusos!', //PARTE 9
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'PARABÉNS! Você salvou Agar e conseguiu pegar o artefato mágico, você e Agar dividem o poder e salvam o vilarejo do grande dragão.', //PARTE 10
        choices: [
            { text: 'Jogue e explore novos finais, Jogar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Você pega o artefato mágico sozinho e é consumido por todo o seu poder por ser indgno de usa-ló, sendo assim você vai abaixo com as ruínas e acaba morrendo!', //PARTE 11
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Você acaba dando de cara com uma alcateia de lobos e termina sendo caçado até a morte!', //PARTE 12
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Ual! Ele sabe falar, o nome dele é Caramelo, diz conhecer muito bem a floresta. Deseja seguir com ele?', //PARTE 13
        choices: [
            { text: 'Sim', nextPart: 15 },
            { text: 'Não', nextPart: 14 }
        ]
    },
    {
        text: 'Você fica perdido na floresta, acaba morrendo de fome e exaustão por ser caçado por lobos noites e noites na floresta. Pelo visto não foi uma boa ideia não ter ido falar com o cavalo ou ter seguido com ele na aventura...', //PARTE 14
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Você monta no cavalo e juntos seguem rumo...', //PARTE 15
        choices: [
            { text: 'As clareiras para a vila das fadas', nextPart: 16 },
            { text: 'De volta para casa', nextPart: 17 }
        ]
    },
    {
        text: 'PARABÉNS! Você encontrou uma fada que lhe concedeu um desejo de achar o artefato mágico lendário.', //PARTE 16
        choices: [
            { text: 'Jogue e explore novos finais, Jogar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Êhh bicho(a) folgado(a) oh doido, na moral, a missão de achar o artefato mágico para ajudar o seu vilarejo a prosperar foi um fracasso, mas pelo ao menos você está vivo, preguiçoso e medroso mas vivo, quase ninguém volta vivo daquela floresta...', //PARTE 17
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
];

// Índice da parte atual da história
var currentStoryIndex = 0;


// Função para exibir uma parte da história
function displayStoryPart(storyPartIndex) {
    var storyPart = storyParts[storyPartIndex];
    storyElement.textContent = storyPart.text;
    choicesElement.innerHTML = '';
    storyPart.choices.forEach(function (choice, index) {
        var button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', function () { return selectChoice(index); });
        choicesElement.appendChild(button);
    });
}

// Função para selecionar uma escolha
function selectChoice(choiceIndex) {
    var _a;
    var choice = storyParts[currentStoryIndex].choices[choiceIndex];
    if (choice.condition && !eval(choice.condition)) {
        currentStoryIndex++;
    }
    else {
        currentStoryIndex = (_a = choice.nextPart) !== null && _a !== void 0 ? _a : 0;
    }
    displayStoryPart(currentStoryIndex);
}

// Adiciona um evento de clique ao botão de reiniciar para reiniciar a história
restartButton.addEventListener('click', function () {
    currentStoryIndex = 0;
    displayStoryPart(currentStoryIndex);
});