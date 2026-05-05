// Select the elements
const form = document.getElementById('myForm');
const input = document.getElementById('userInput');
const out = document.getElementById('output');

// Listen for the submission
form.addEventListener('submit', function(event) {
  // Prevent the page from refreshing (the default behavior)
  event.preventDefault(); 
  
  // Get the value from the text box
  const value = input.value;
  

  if(input.value == '-1/12'){
    out.innerText = "You win! The third missing digit is 3";
    const bttn = document.querySelector("a");
    bttn.style.display = "block";
  }
  else {
     out.innerText = "*Extremely loud incorrect buzzer*";
  }
  // Optional: Clear the box after submitting
  form.reset(); 
});