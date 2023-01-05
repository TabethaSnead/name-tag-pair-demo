const input = document.getElementById('input');
const button = document.getElementById('button');
const nameInputResult = document.getElementById('name-input-result');
console.log(input, 'input');

button.addEventListener('click', () => {
    nameInputResult.textContent = input.value;
    input.value = '';
});
