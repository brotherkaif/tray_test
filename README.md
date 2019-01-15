# Tray.io Test 
## Running the Code
Please open the `index.html` and see the final output in the console.
## Potenial Typo
I think that there may have been a typo in the [original spec](https://gist.github.com/DavidJSimpsonEsq/71dcf396a2303ad5edd08690289d016d) for the task.

In the **Output** section of the spec, it states that the expected output for the example input given should be:
```
1 3
1
```
However, when running through the intended movement behaviour of the robot, the final output should be:
```
3 3
1
```
As I am working on this challenge out of office hours, getting clarification on this would have delayed things by another day. Therefore in the interest of time, I have proceeded to implement the robot in the way in which I have interpreted the spec. I hope that this is okay.
## Issue with loading the input file
To be totally honest, I really struggled trying to load the `input.txt` file into the application. After spending quite a bit of time trying to resolve the issue, I decided to come up with a temporary solution (detailed below) so that I could continue to work on the task and at least deliver something in a reasonable time.

Below I have outlined some of my initial attempts to load the file in and what problems I encountered to hopefully illustrate my thought process on this particular issue.

### Attempt 1: Using the Fetch API
```
function loadInput() {
  fetch('input.txt')
  .then(response => response.text())
  .then(text => processInput(text))
  .catch(err => console.log(err));
}
```
The function above attempted to use the Fetch API to load the text. This was actually successful, the function did successfully pass through the text as an argument for the `processInput()`. The `processInput()` function was also able to correctly update the global variables used in the applications to the values parsed from the text file.

*However*, the asyncronous nature (and my lack of experience working with promises), caused issues.
```
let gridSize; // Global variable that is set by processInput()
loadInput(); // Function with uses Fetch API to load input file, then calls processInput(input)
console.log(gridSize); // ReferenceError: gridSize is not defined
```
The next line of code executed after the `loadInput()` call was running before the function had a chance to set the global variables. Checking the values of the variable from within the Chrome console showed the correct value.
### Attempt 2: Using Async/Await
```
const loadInput = async () => {
  const response = await fetch('input.txt');
  const text = await response.text();
  processInput(text);
}
```
Unfortunately, I was getting the same error with the function above.
### Attempt 3: Using XHR 
```
function loadInput() {
  // Create XHR object
  var xhr = new XMLHttpRequest();

  // OPEN - type, url/file, async
  xhr.open('GET', 'input.txt', true);

  xhr.onload = function(){
    if (this.status == 200){
      return this.responseText;
    } 
  }

  xhr.onerror = function(){
    console.log('Error: Could not load input file.')
  }

  // Sends request
  xhr.send();
}
```
The same problem occured here. I know it may have been possible to make the request syncronous by setting `xhr.open('GET', 'input.txt', false);` however the collective wisdom of the internet suggested that this would be a terrible thing to do.
### Attempt 4: Faking it 
I feel awful for having to resort to this. But in the interest of time, it was the only feasible option. My sincerest apologies for this...
```
function loadInput() {
  return "5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW"
}
```