let clickCount = 0;
const requiredClicks = 7; // Replace this number with your desired required clicks

const clickImage = document.getElementById('clickImage');
const clickCountElement = document.getElementById('clickCount');
const audio = document.getElementById('myAudio');

clickImage.addEventListener('click', () => {
    clickCount++;
    clickCountElement.textContent = `Clicks: ${clickCount}`;

    if (clickCount >= requiredClicks) {
        performAction();
    }
});

function performAction() {
    // Play the audio
    audio.play();

    // Show a message
    alert('You did the thing, Inez. Congrats,:p');
}
