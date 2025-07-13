const commentInput = document.querySelector('#comment'); 
const element = document.querySelector('#comment'); 
const entry = document.createElement('div');
const feedbackDisplay = document.querySelector('#feedbackDisplay');
const form = document.querySelector('form');

commentInput.addEventListener('input', () => {
console.log("Character count: " + commentInput.value.length);
});      

element.addEventListener('mouseover', showTooltip);
element.addEventListener('mouseout', hideTooltip);

function showTooltip() {
  feedbackDisplay.style.display = 'block';
}

function hideTooltip() {
  feedbackDisplay.style.display = 'none';
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!username || !email || !comment) {
    alert("All fields are required.");
    return;
  }
  entry.textContent = `${username} (${email}): ${comment}`;
  feedbackDisplay.appendChild(entry);
});

form.addEventListener('click', (e) => {
  if (e.target.matches('input, textarea')) {
    e.stopPropagation();
  }
});