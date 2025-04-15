//your code here
// Get references to DOM elements
const input = document.getElementById('newTodoInput');
const button = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Add click event listener to the button
button.addEventListener('click', () => {
  const todoText = input.value.trim(); // Trim whitespace

  if (todoText !== '') {
    const li = document.createElement('li');
    li.textContent = todoText;
    todoList.appendChild(li);
    input.value = ''; // Clear the input after adding
  }
});
