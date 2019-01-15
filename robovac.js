function init() {
  fetch('input.txt')
  .then(response => response.text())
  .then(text => processInput(text))
  .catch(err => console.log(err));
}

function processInput(message) {
  // Convert string into an array for easier processing
  let inputArray = message.split("\n");

  // Get grid size
  gridSize = inputArray[0].split(' ').map(x => parseInt(x, 10));

  // Get robot position
  robotPosition = inputArray[1].split(' ').map(x => parseInt(x, 10));

  // Build array of dirty tiles
  dirtyTiles = inputArray.slice(2, inputArray.length - 2);
  dirtyTiles = dirtyTiles.map((x) => x.split(' '));
  dirtyTiles = dirtyTiles.map(arr => arr.map(x => parseInt(x, 10)));

  // Get the path the robot will take
  robotPath = inputArray[inputArray.length - 1].split('');
}

let gridSize;
let robotPosition;
let dirtyTiles;
let robotPath;
init();