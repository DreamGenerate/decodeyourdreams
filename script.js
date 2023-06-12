var generatedNumbers = []; // Variable to store generated numbers

document.getElementById("generatorForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var inputString = document.getElementById("inputString").value;
  var numberCount = parseInt(document.getElementById("numberCount").value);

  // Check if the input string has changed
  if (inputString !== getStoredInputString()) {
    generatedNumbers = generateNumbers(inputString, numberCount);
    storeInputString(inputString);
  }

  displayNumbers(generatedNumbers.slice(0, numberCount));
});

function generateNumbers(inputString, count) {
  // Split the input string into words
  var words = inputString.split(" ");

  // Generate all possible numbers
  var numbers = [];
  for (var i = 0; i < words.length; i++) {
    numbers.push(i);
  }

  // Shuffle the numbers
  shuffleArray(numbers);

  return numbers;
}

function displayNumbers(numbers) {
  var resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = "";

  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    var numberElement = document.createElement("p");
    numberElement.textContent = number;
    resultContainer.appendChild(numberElement);
  }
}

// Fisher-Yates shuffle algorithm to shuffle the array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function getStoredInputString() {
  // Retrieve the stored input string from local storage
  return localStorage.getItem("inputString");
}

function storeInputString(inputString) {
  // Store the input string in local storage
  localStorage.setItem("inputString", inputString);
}
