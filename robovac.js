document.getElementById('loadInput').addEventListener('click', getInput)

function getInput() {
  fetch('input.txt')
    .then(response => response.text())
    .then(text => console.log(text));
}