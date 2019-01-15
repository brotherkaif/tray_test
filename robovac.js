function init() {
  fetch('input.txt')
  .then(response => response.text())
  .then(text => processInput(text))
  .catch(err => console.log(err));
}

function processInput(message) {
  inputArray = message.split("\n");
  gridSize = inputArray[0].split(' ').map(x => parseInt(x, 10));
  robotPosition = inputArray[1].split(' ').map(x => parseInt(x, 10));
}

let inputArray;
let gridSize;
let robotPosition;
init();

// Get the direction from inputArray[inputArray.length-1]
// Get dirty tiles from inputArray[2]..inputArray[inputArray.length-1]