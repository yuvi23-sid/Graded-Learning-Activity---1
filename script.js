//body styles
document.body.style.fontSize = '18px';
document.body.style.margin = 'auto';
document.body.style.textAlign = 'center';
document.body.style.padding = '20px';
document.body.style.fontWeight = 'bolder';
document.body.style.backgroundColor = '#9370DB';


// Full name inside h1 element
let fullName = document.createElement('h1');
fullName.textContent = "Yuvraj Sidhu";
document.body.appendChild(fullName);
fullName.style.color = '#D3D3D3';
fullName.style.marginBottom = '120px'
fullName.style.fontSize = '40px';
fullName.style.fontFamily = 'Georgia, serif';
fullName.style.fontWeight = 'bolder';
document.body.style.fontFamily = 'Georgia, serif';


// Two input elements in container
var container = document.createElement("div");
    document.body.appendChild(container);

    var number1 = document.createElement("input");
    number1.placeholder = "Enter the First number";
    container.appendChild(number1);

    var number2 = document.createElement("input");
    number2.placeholder = "Enter the Second Number";
    container.appendChild(number2);

    // styles container
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.gap = "20px"; // Adjust the space between elements

    // styles inputs
    [number1, number2].forEach(function (element) {
        element.style.padding = "15px";
        element.style.fontSize = "20px";
        element.style.border = "1px solid #ccc";
    });

//line break
let lineBreak = document.createElement('br');
document.body.appendChild(lineBreak);


// Button Script
let button = document.createElement('button');
button.textContent = "Calculate Sum";
document.body.appendChild(button);
button.style.margin = 'auto';
button.style.marginTop = '35px'
button.style.display = 'block';
button.style.padding = '15px';
button.style.backgroundColor = '#FF5733';
button.style.color = 'white';
button.style.border = 'none';
button.style.fontSize = '25px';
button.style.fontWeight = 'bold';


// Result display element
var resultDisplay = document.createElement('h2');
document.body.appendChild(resultDisplay);
resultDisplay.style.color = '#333';
resultDisplay.style.fontFamily = 'Verdana, sans-serif';

// Arrow function for validation
const validateInput = (inputElement) => {
  try {
    let value = parseFloat(inputElement.value);

    if (isNaN(value)) {
      throw new Error('Invalid input. Please enter a valid number');
    }

    // Remove the error message element if it exists
    let errorMessage = document.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.remove();
    }

    // Reset border if successful
    inputElement.style.border = '';
    
    return value;
  } catch (error) {
    inputElement.style.border = '4px solid red';


    let errorMessage = document.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.remove();
    }

    // Create error message
    let errorParagraph = document.createElement('p');
    errorParagraph.textContent = error.message;
    errorParagraph.style.color = 'red';
    errorParagraph.className = 'error-message';
    document.body.insertAdjacentElement('beforeend', errorParagraph);

    throw error;
  }
};

// Button click to do the sum
button.addEventListener('click', function() {
  try {
    let num1 = validateInput(number1);
    let num2 = validateInput(number2);

    let sum = num1 + num2;

    // Display the result on the page
    resultDisplay.textContent = sum;
    resultDisplay.style.margin = 'auto';
    resultDisplay.style.color = '#FF5733';
    resultDisplay.style.fontSize = '40px';
    resultDisplay.style.textAlign = 'center';
    resultDisplay.style.marginTop = '40px';

  } catch (error) {
    console.error(error);
  }
});
