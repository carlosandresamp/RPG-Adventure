var storyElement = document.getElementById('story');
var choicesElement = document.getElementById('choices');
var restartButton = document.getElementById('restartButton');
var musicButton = document.getElementById('musicButton');
var backgroundMusic = document.getElementById('backgroundMusic');
var isMusicPlaying = true;
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
var currentStoryIndex = 0;
function displayStoryPart(storyPartIndex) {
    var storyPart = storyParts[storyPartIndex];
    storyElement.textContent = storyPart.text;
    choicesElement.innerHTML = '';
    storyPart.choices.forEach(function (choice, index) {
        var button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', function () { return selectChoice(index); });
        choicesElement.appendChild(button);
    });
}
function selectChoice(choiceIndex) {
    var choice = storyParts[currentStoryIndex].choices[choiceIndex];
    currentStoryIndex++;
    if (currentStoryIndex >= storyParts.length) {
        currentStoryIndex = 0;
    }
    displayStoryPart(currentStoryIndex);
}
restartButton.addEventListener('click', function () {
    currentStoryIndex = 0;
    restartButton.style.display = 'none';
    choicesElement.style.display = 'block';
    displayStoryPart(currentStoryIndex);
});
displayStoryPart(currentStoryIndex);
