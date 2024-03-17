var storyElement = document.getElementById('story');
var choicesElement = document.getElementById('choices');
var restartButton = document.getElementById('restartButton');
var musicButton = document.getElementById('musicButton');
var backgroundMusic = document.getElementById('backgroundMusic');
var isMusicPlaying = true;
document.addEventListener('DOMContentLoaded', function () {
    backgroundMusic.play(); // Inicia a música de fundo ao carregar a página
    displayStoryPart(currentStoryIndex);
});
musicButton.addEventListener('click', function () {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
        musicButton.textContent = '▶️';
    }
    else {
        backgroundMusic.play();
        isMusicPlaying = true;
        musicButton.textContent = '⏸️';
    }
});
var storyParts = [
    {
        text: 'Qual dos caminhos deseja seguir?', //PART 0
        choices: [
            { text: 'Parte 1: Ruínas Antigas', nextPart: 1 },
            { text: 'Parte 2: Clareiras Iluminadas', nextPart: 2 }
        ]
    },
    {
        text: 'Você está nas Ruínas Antigas. Dizem que aqui era onde protegiam o artefato mágico. Entâo ele deve estar por perto...', //PART 1
        choices: [
            { text: 'Seguir em frente', nextPart: 3 },
            { text: 'Seguir sem rumo', nextPart: 12 }
        ]
    },
    {
        text: 'Você está seguindo pelas clareiras e de longe vê um cavalo...?', //PART 2 - CLAREIRAS ILUMINADAS
        choices: [
            { text: 'Fale com ele kk', nextPart: 0 },
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 3
        choices: [
            { text: 'Sim', nextPart: 4 },
            { text: 'Não', nextPart: 5 }
        ]
    },
    {
        text: 'O nome dele é Agar. Ele diz estar procurando o artefato, mas que se desencontrou de seu amigo, que é um cavalo falante. Ele diz saber onde está o artefato e precisa de sua ajuda para pegá-lo...', //PART 4
        choices: [
            { text: 'Seguir em frente', nextPart: 6 },
            { text: 'Tentar matá-lo para que só você domine o artefato 😈', nextPart: 7 }
        ]
    },
    {
        text: 'Você morreu pois de alguma forma o infeliz descobriu que você também está em busca do artefato mágico só para você kk', //PART 5
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Vocês atravessaram as ruínas e acharam o artefato. Porém ele está sendo protegido por uma orda de goblins', //PART 6
        choices: [
            { text: 'Lutar', nextPart: 8 },
            { text: 'Correr', nextPart: 9 }
        ]
    },
    {
        text: 'Você morreu esfaqueado por Agar que poderia ter se tornado o seu melhor amigo e aliado durante a aventura 😥', //PART 7
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Você e Agar lutam lado a lado corajosamente derrotando todos os goblins um a um em uma batalha épica pelo artefato mágico. No calor da batalha por um desliza Agar é ferido...', //PART 8
        choices: [
            { text: 'Salvar Agar', nextPart: 10 },
            { text: 'Deixar Agar e ir pegar o artefato mágico sozinho', nextPart: 11 }
        ]
    },
    {
        text: 'Você morreu estrasalhado pelo grande dragão que voltou para as ruínas e acabou encontrando intrusos!', //PART 9
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'PARABÉNS! Você salvou Agar e conseguiu pegar o artefato mágico, você e Agar dividem o poder e salvam o vilarejo do grande dragão.', //PART 10
        choices: [
            { text: 'Jogue e explore novos finais, Jogar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Você pega o artefato mágico sozinho e é consumido por todo o seu poder por ser indgno de usa-ló, sendo assim você vai abaixo com as ruínas e acaba morrendo!', //PART 11
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Você acaba dando de cara com uma alcateia de lobos e termina sendo caçado até a morte!', //PART 12
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 13
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 14
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 15
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 16
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 17
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 18
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 19
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?', //PART 20
        choices: [
            { text: 'Sim', nextPart: 7 },
            { text: 'Não', nextPart: 8 }
        ]
    },
];
var currentStoryIndex = 0;
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
restartButton.addEventListener('click', function () {
    currentStoryIndex = 0;
    displayStoryPart(currentStoryIndex);
});
document.addEventListener('DOMContentLoaded', function () {
    backgroundMusic.play(); // Inicia a música de fundo ao carregar a página
    displayStoryPart(currentStoryIndex);
});
