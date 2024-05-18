// Variables
const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultContainer = document.getElementById("result");

const ex = new RegExp(/[^A-Za-z0-9]/g);

// Functions
function checkPalindrome(inputValue){
    // Clean the input string
    const cleanedString = inputValue.toLowerCase().replace(ex, '');
    
    // Remove & Create Div's Child
    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
    }

    const resultElement = document.createElement("p");
    
    // Compare Strings
    let reverseString = cleanedString.split('').reverse().join('');
    if(cleanedString === reverseString){
        resultElement.innerText = `${inputValue} is a palindrome`;
    }
    else{
        resultElement.innerText = `${inputValue} is not a palindrome`;
    }

    // Send results
    resultContainer.appendChild(resultElement);
}

// Program
checkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(userInput.value === ''){
        alert('Please input a value');
        return;
    } else {
        checkPalindrome(userInput.value);
    }
});
