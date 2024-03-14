const storyElement = document.getElementById('story')!;
const choicesElement = document.getElementById('choices')!;
const restartButton = document.getElementById('restartButton')!;
const musicButton = document.getElementById('musicButton')!;
const backgroundMusic = document.getElementById('backgroundMusic') as HTMLAudioElement;

let isMusicPlaying = true;

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
    choices: string[];
}

const storyParts: StoryPart[] = [
    { text: 'Você está em uma floresta escura. O que você faz?', choices: ['Correr', 'Investigar o rosnado'] },
    { text: 'Você encontra uma caverna. Entra na caverna?', choices: ['Sim', 'Não'] },
    { text: 'Você encontra um urso ferido. O que você faz?', choices: ['Tentar ajudar', 'Correr'] },
    { text: 'Dentro da caverna, você encontra um baú do tesouro. O que você faz?', choices: ['Abrir o baú', 'Sair da caverna'] },
    { text: 'Você sobreviveu!', choices: [] },
    { text: 'Você morreu!', choices: [] },
    { text: 'Você morreu!', choices: [] },
    { text: 'Você venceu!', choices: [] },
    { text: 'Você sobreviveu!', choices: [] },
];

let currentStoryIndex = 0;

function displayStoryPart(storyPartIndex: number) {
    const storyPart = storyParts[storyPartIndex];
    storyElement.textContent = storyPart.text;
    choicesElement.innerHTML = '';
    storyPart.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => selectChoice(index));
        choicesElement.appendChild(button);
    });
}

function selectChoice(choiceIndex: number) {
    const choice = storyParts[currentStoryIndex].choices[choiceIndex];
    currentStoryIndex++;
    if (currentStoryIndex >= storyParts.length) {
        currentStoryIndex = 0;
    }
    displayStoryPart(currentStoryIndex);
}

restartButton.addEventListener('click', () => {
    currentStoryIndex = 0;
    restartButton.style.display = 'none';
    choicesElement.style.display = 'block';
    displayStoryPart(currentStoryIndex);
});

displayStoryPart(currentStoryIndex);
