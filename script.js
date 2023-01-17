// Random quotes Api URL
const quoteApiUrl = "https://api.quotable.io/random?minLength=100&maxLength=140";
const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");

console.log(quoteSection, userInput);

let quote = "";
let time = 60;
let timer = "";
let mistakes = 0;

// Display random quote

const renderNewQuote = async () => {
  // fetch quote from url
  const response = await fetch(quoteApiUrl);
  
}

window.onload = () => {
  userInput.value = ""; // sets the user input value to empty.
  document.getElementById("start-test").style.display = "block";
  document.getElementById("stop-test").style.display = "none";
  userInput.disabled = true;
  renderNewQuote(); 
}