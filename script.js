// Get elements from the DOM
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Add event listener to form submit
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const todoText = input.value.trim();

  if (todoText !== '') {
    addTodoItem(todoText); // Add a new to-do item
    input.value = ''; // Clear input field
    input.focus(); // Set focus back to input field
  }
});

// Function to add a new to-do item
function addTodoItem(todoText) {
  const li = document.createElement('li');
  li.innerText = todoText;

  li.addEventListener('click', function() {
    li.classList.toggle('completed'); // Toggle completed class on click
  });

  list.appendChild(li);
}
