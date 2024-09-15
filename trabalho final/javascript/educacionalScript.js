let selectedColor = 'red';

function selectColor(color) {
    selectedColor = color;
}

function checkAnswer(button, correctAnswer) {
    const buttons = button.parentElement.children;
    for (let btn of buttons) {
        btn.style.backgroundColor = '';
    }
    if (parseInt(button.textContent) === correctAnswer) {
        button.style.backgroundColor = selectedColor;
    } else {
        button.style.backgroundColor = 'gray';
    }
}
