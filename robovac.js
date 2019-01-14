function init() {
  fetch('input.txt')
  .then(response => response.text())
  .then(text => processInput(text))
  .catch(err => console.log(err));
}

function processInput(message) {
  inputString = message;
  inputArray = message.split("\n");
}

let inputString;
let inputArray;
init();

// Get initial grid size from inputArray[0]
// Get robot position from inputArray[1]
// Get the direction from inputArray[inputArray.length-1]
// Get dirty tiles from inputArray[2]..inputArray[inputArray.length-1]