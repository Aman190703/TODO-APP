function onAddTodo(){
    const todoInput = document.getElementById("todo-input");
    if(!todoInput.value.trim()) { // Check if the input is empty or contains only whitespace
        return;
    }
    const todoList = document.getElementById('todo-container');

    const thisTodoIndex = todoList.querySelectorAll("li").length;

    const todoItem = document.createElement('li');
    const todoText = document.createElement('p');
    todoText.innerHTML = todoInput.value;

    const completeButton = document.createElement('button');
    completeButton.innerHTML = "Mark as complete";
    completeButton.onclick = function(){
        onMarkAsComplete(thisTodoIndex);
    };

    const editButton = document.createElement('button'); // Create edit button
    editButton.innerHTML = "Edit"; // Set edit button text
    editButton.onclick = function() { // Set edit button onclick function
        onEditTodo(thisTodoIndex);
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() {
        onDeleteTodo(thisTodoIndex);
    };
    
    todoItem.appendChild(todoText);
    todoItem.appendChild(completeButton);
    todoItem.appendChild(editButton); // Append edit button
    todoItem.appendChild(deleteButton);

    
    todoList.appendChild(todoItem);

    todoInput.value = '';
}

function onMarkAsComplete(todoIndex){
    const todoList = document.getElementById('todo-container');
    const allTodoItems = todoList.querySelectorAll("li");
    const todoTextToUpdate = allTodoItems[todoIndex].querySelector('p');
    todoTextToUpdate.className = 'complete';
}

function onDeleteTodo(todoIndex){
    const todoList = document.getElementById('todo-container');
    const allTodoItems = todoList.querySelectorAll("li");
    allTodoItems[todoIndex].remove();
}

function onEditTodo(todoIndex) {
    const todoList = document.getElementById('todo-container');
    const allTodoItems = todoList.querySelectorAll("li");
    const todoTextToEdit = allTodoItems[todoIndex].querySelector('p');
    const newText = prompt("Enter new text for the todo item", todoTextToEdit.innerHTML);
    if (newText !== null) { // Check if user clicked cancel or entered empty text
        todoTextToEdit.innerHTML = newText;
    }
}