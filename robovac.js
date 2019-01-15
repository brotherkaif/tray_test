// function init() {
//   fetch('input.txt')
//   .then(response => response.text())
//   .then(text => processInput(text))
//   .catch(err => console.log(err));
// }

// const init = async () => {
//   const response = await fetch('input.txt');
//   const text = await response.text();
//   processInput(text);
// }

function init() {
  text = "5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW"
  processInput(text);
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

function moveBot(direction) {
  // Take a direction and move the bot accordingly
  // Also check for if robot is currently at edge
  switch(direction) {
    case "N":
      console.log("got north");
      if (robotPosition[1] < (gridSize[1] - 1)) {
        robotPosition[1] += 1;
      }
      console.log(robotPosition);
      break;
    case "E":
      console.log("got east");
      if (robotPosition[0] > 0) {
        robotPosition[0] -= 1;
      }
      console.log(robotPosition);
      break;
    case "S":
      console.log("got south");
      if (robotPosition[1] > 0) {
        robotPosition[1] -= 1;
      }
      console.log(robotPosition);
      break;
    case "W":
      console.log("got west");
      if (robotPosition[0] < (gridSize[0] - 1)) {
        robotPosition[0] += 1;
      }
      console.log(robotPosition);
      break; 
    default:
      console.log(`${direction} is not a valid direction`);
      // code block
  }
}

let gridSize;
let robotPosition;
let dirtyTiles;
let robotPath;

init();
console.log(robotPosition);
robotPath.forEach(direction => moveBot(direction));