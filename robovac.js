let gridSize;
let robotPosition;
let dirtyTiles;
let robotRoute;

function loadInput() {
  return '5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW';
}

function processInput(input) {
  // Convert string into an array for easier processing
  const inputArray = input.split('\n');

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
    case 'N':
      if (robotPosition[1] < (gridSize[1] - 1)) {
        robotPosition[1] += 1;
      }
      break;
    case 'E':
      if (robotPosition[0] > 0) {
        robotPosition[0] -= 1;
      }
      break;
    case 'S':
      if (robotPosition[1] > 0) {
        robotPosition[1] -= 1;
      }
      break;
    case 'W':
      if (robotPosition[0] < (gridSize[0] - 1)) {
        robotPosition[0] += 1;
      }
      break;
    default:
      console.log(`${direction} is not a valid direction`);
  }
}

function runBot() {
  const routeTaken = [];

  routeTaken.push(robotPosition.join(' '));
  robotRoute.forEach((direction) => {
    moveBot(direction);
    routeTaken.push(robotPosition.join(' '));
  });

  return routeTaken;
}

function calculateCleaned(route, dirty) {
  // Remove duplicate tiles from tilesVisited to avoid double counting
  const visited = route.filter((v, i) => route.indexOf(v) === i);
  let cleaned = 0;

  // Double iteration required to compare arrays
  visited.forEach((location) => {
    dirty.forEach((spot) => {
      if (location === spot) {
        cleaned += 1;
      }
    });
  });

  return cleaned;
}

// Load input and calculate global vars
const input = loadInput();
processInput(input);

// runBot along route and get the route taken
const routeTaken = runBot();

// Final output as per spec
console.log(robotPosition.join(' '));
console.log(calculateCleaned(routeTaken, dirtyTiles));
