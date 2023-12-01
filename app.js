let todos = [];

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${todo}</span>
            <button class="betn" onclick="edit(${index})">Edit</button>
            <button class="betn" onclick="deleteSingle(${index})">Delete</button>
        `;
        todoList.appendChild(listItem);
    });
}

function add() {
    const newTodoInput = document.getElementById('task');
    const newTodo = newTodoInput.value.trim();

    if (newTodo !== '') {
        todos.push(newTodo);
        newTodoInput.value = '';
        renderTodos();
    }
}

function deleteAllTodos() {
    todos = [];
    renderTodos();
}

function edit(index) {
    const todoToEdit = todos[index];
    const updatedTodo = prompt('Edit Todo:', todoToEdit);

    if (updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        renderTodos();
    }
}

function deleteSingle(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Initial render
renderTodos();










function editStudent(button) {
    let row = button.parentNode.parentNode;
    let cells = row.getElementsByTagName('ul');
  
    document.getElementById('edit').value = cells[0].innerHTML;
    
    document.getElementById('editForm').style.display = 'block';
  
    document.getElementById('editForm').editedRow = row;
  }

  function updateStudent() {
    let editedRow = document.getElementById('editForm').editedRow;
  
    if (editedRow) {
      var cells = editedRow.getElementsByTagName('ul');
  
      cells[0].innerHTML = document.getElementById('edit').value;
      document.getElementById('editForm').style.display = 'none';
    }
  }

  function deleteStudent(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
// Add event listener to the button
// document.getElementById("add").addEventListener("click", function (event) {
//     add();
// });





