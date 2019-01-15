function loadInput() {
  return "5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW"
}

function processInput(input) {

  // Convert string into an array for easier processing
  let inputArray = input.split("\n");
  
  // Get grid size
  gridSize = inputArray[0].split(' ').map(x => parseInt(x, 10));
  
  // Get robot position
  robotPosition = inputArray[1].split(' ').map(x => parseInt(x, 10));
  
  // Build array of dirty tiles
  dirtyTiles = inputArray.slice(2, inputArray.length - 1);
  
  // Get the path the robot will take
  robotRoute = inputArray[inputArray.length - 1].split('');
}

function moveBot(direction) {
  // Take a direction and move the bot accordingly
  // Also check if robot is currently at edge
  switch(direction) {
    case "N":
    if (robotPosition[1] < (gridSize[1] - 1)) {
      robotPosition[1] += 1;
    }
    break;
    case "E":
    if (robotPosition[0] > 0) {
      robotPosition[0] -= 1;
    }
    break;
    case "S":
    if (robotPosition[1] > 0) {
      robotPosition[1] -= 1;
    }
    break;
    case "W":
    if (robotPosition[0] < (gridSize[0] - 1)) {
      robotPosition[0] += 1;
    }
    break; 
    default:
    console.log(`${direction} is not a valid direction`);
  }
}

function calculateCleaned(routeTaken, dirtyTiles) {
  // Remove duplicate tiles from tilesVisited to avoid double counting
  let tilesVisited = routeTaken.filter((v,i) => routeTaken.indexOf(v) === i);
  let tilesCleaned = 0;
  
  // Double iteration required to compare arrays
  tilesVisited.forEach((visited) => {
    dirtyTiles.forEach((dirty) => {
      if (visited == dirty) {
        tilesCleaned += 1;
      }
    });
  });
  
  return tilesCleaned;
}

function runBot() {
  let routeTaken = [];
  
  routeTaken.push(robotPosition.join(" "));
  robotRoute.forEach((direction) => {
    moveBot(direction);
    routeTaken.push(robotPosition.join(" "));
  });
  
  return routeTaken;
}

let gridSize;
let robotPosition;
let dirtyTiles;
let robotRoute;
let input = loadInput();
processInput(input);

let routeTaken = runBot();

// Final output as per spec
console.log(robotPosition.join(" "));
console.log(calculateCleaned(routeTaken, dirtyTiles));