const storyElement = document.getElementById('story')!;
const choicesElement = document.getElementById('choices')!;
const restartButton = document.getElementById('restartButton')!;
const musicButton = document.getElementById('musicButton')!;
const backgroundMusic = document.getElementById('backgroundMusic') as HTMLAudioElement;

let isMusicPlaying = true;

document.addEventListener('DOMContentLoaded', () => {
    backgroundMusic.play(); // Inicia a música de fundo ao carregar a página
    displayStoryPart(currentStoryIndex);
});

musicButton.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
        musicButton.textContent = '▶️';
    } else {
        backgroundMusic.play();
        isMusicPlaying = true;
        musicButton.textContent = '⏸️';
    }
});

interface StoryPart {
    text: string;
    choices: { text: string; condition?: string; nextPart: number | null }[];
}

const storyParts: StoryPart[] = [
    {
        text: 'Qual dos caminhos deseja seguir?', //SITUAÇÃO 0
        choices: [
            { text: 'Caminho 1: Ruínas Antigas', nextPart: 1 },
            { text: 'Caminho 2: Clareiras Iluminadas', nextPart: 2 }
        ]
    },
    {
        text: 'Você está nas Ruínas Antigas. Dizem que aqui é onde protegem o artefato mágico que te dar poderes jamais imaginados. Entâo ele deve estar por perto...', //SITUAÇÃO 1
        choices: [
            { text: 'Seguir em frente', nextPart: 3 },
            { text: 'Seguir sem rumo', nextPart: 12 }
        ]
    },
    {
        text: 'Você está seguindo pelas clareiras e de longe vê um cavalo...?',  //SITUAÇÃO 2 - CLAREIRAS ILUMINADAS
        choices: [
            { text: 'Fale com ele kk', nextPart: 13 },
            { text: 'Se afastar pois ele parace ser perigoso', nextPart: 14 },
        ]
    },
    {
        text: 'Você se econtrou com outro humano. Deseja falar com ele?',   //SITUAÇÃO 3
        choices: [
            { text: 'Sim', nextPart: 4 },
            { text: 'Não', nextPart: 5 }
        ]
    },
    {
        text: 'O nome dele é Agar. Ele diz estar procurando o artefato, mas que se desencontrou de seu amigo, que é um cavalo falante. Ele diz saber onde está o artefato e precisa de sua ajuda para pegá-lo...',   //SITUAÇÃO 4
        choices: [
            { text: 'Seguir em frente', nextPart: 6 },
            { text: 'Tentar matá-lo para que só você domine o artefato 😈', nextPart: 7 }
        ]
    },
    {
        text: 'Você morreu pois de alguma forma o infeliz descobriu que você também está em busca do artefato mágico só para você kk',   //SITUAÇÃO 5
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Vocês atravessaram as ruínas e acharam o artefato. Porém ele está sendo protegido por uma orda de goblins',   //SITUAÇÃO 6
        choices: [
            { text: 'Lutar', nextPart: 8 },
            { text: 'Correr', nextPart: 9 }
        ]
    },
    {
        text: 'Você morreu esfaqueado por Agar que poderia ter se tornado o seu melhor amigo e aliado durante a aventura 😥',   //SITUAÇÃO 7
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Você e Agar lutam lado a lado corajosamente derrotando todos os goblins um a um em uma batalha épica pelo artefato mágico. No calor da batalha por um desliza Agar é ferido...',   //SITUAÇÃO 8
        choices: [
            { text: 'Salvar Agar', nextPart: 10 },
            { text: 'Deixar Agar e ir pegar o artefato mágico sozinho', nextPart: 11 }
        ]
    },
    {
        text: 'Você morreu estrasalhado pelo grande dragão que voltou para as ruínas e acabou encontrando intrusos!',   //SITUAÇÃO 9
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'PARABÉNS! Você salvou Agar e conseguiu pegar o artefato mágico, você e Agar dividem o poder e salvam o vilarejo do grande dragão.',   //SITUAÇÃO 10
        choices: [
            { text: 'Jogue e explore novos finais, Jogar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Você pega o artefato mágico sozinho e é consumido por todo o seu poder por ser indgno de usa-ló, sendo assim você vai abaixo com as ruínas e acaba morrendo!',   //SITUAÇÃO 11
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Você acaba dando de cara com uma alcateia de lobos e termina sendo caçado até a morte!',   //SITUAÇÃO 12
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },



    {
        text: 'Ual! Ele sabe falar, o nome dele é Caramelo, diz conhecer muito bem a floresta. Deseja seguir com ele?',   //SITUAÇÃO 13
        choices: [
            { text: 'Sim', nextPart: 15 },
            { text: 'Não', nextPart: 14 }
        ]
    },
    {
        text: 'Você fica perdido na floresta, acaba morrendo de fome e exaustão por ser caçado por lobos noites e noites na floresta. Pelo visto não foi uma boa ideia não ter ido falar com o cavalo ou ter seguido com ele na aventura...',   //SITUAÇÃO 14
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Você monta no cavalo e juntos seguem rumo...',   //SITUAÇÃO 15
        choices: [
            { text: 'As clareiras para a vila das fadas', nextPart: 16 },
            { text: 'De volta para casa', nextPart: 17 }
        ]
    },
    {
        text: 'PARABÉNS! Você encontrou uma fada que lhe concedeu um desejo de achar o artefato mágico lendário.',   //SITUAÇÃO 16
        choices: [
            { text: 'Jogue e explore novos finais, Jogar novamente!', nextPart: 0 }
        ]
    },
    {
        text: 'Êhh bicho(a) folgado(a) doido, na moral, a missão de achar o artefato mágico para ajudar o seu vilarejo a prosperar foi um fracasso, mas pelo ao menos você está vivo, preguiçoso e medroso mas vivo, quase ningém volta vivo daquela floresta...',   //SITUAÇÃO 17
        choices: [
            { text: 'Tentar novamente!', nextPart: 0 }
        ]
    },
];

let currentStoryIndex = 0;

function displayStoryPart(storyPartIndex: number) {
    const storyPart = storyParts[storyPartIndex];
    storyElement.textContent = storyPart.text;
    choicesElement.innerHTML = '';
    storyPart.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => selectChoice(index));
        choicesElement.appendChild(button);
    });
}

function selectChoice(choiceIndex: number) {
    const choice = storyParts[currentStoryIndex].choices[choiceIndex];
    if (choice.condition && !eval(choice.condition)) {
        currentStoryIndex++;
    } else {
        currentStoryIndex = choice.nextPart ?? 0;
    }
    displayStoryPart(currentStoryIndex);
}

restartButton.addEventListener('click', () => {
    currentStoryIndex = 0;
    displayStoryPart(currentStoryIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    backgroundMusic.play(); // Inicia a música de fundo ao carregar a página
    displayStoryPart(currentStoryIndex);
});
