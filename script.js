let todoItems = [];
let unique = [0];

// Function to add a todo to the list
function addToDoItem(text) {
  if (typeof text === "string") {
    console.log("Item added.");
    unique[0]++;
    let isCompleted = false;
    let ID = unique[0];

    // Check if ID already exists, generate a new one if needed
    while (todoItems.some(item => item.id === ID)) {
      ID = unique[0]++;
    }

    let Obj = { id: ID, text: text, completed: isCompleted };
    todoItems.push(Obj);
    console.log(todoItems);
  } else {
    console.log("Please input a string.");
  }
}

// Function to remove a todo from the list
function removeToDoItem(todoId) {
  if (Number.isInteger(todoId) && todoId > 0) {
    console.log("Item removed.");
    let diffArray = [];
    let removed = false;

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === todoId) {
        console.log("Successfully removed.");
        removed = true;
      } else {
        diffArray.push(todoItems[i]);
      }
    }

    if (!removed) {
      console.log("Could not locate the todo with that ID.");
    }

    todoItems = diffArray;
  } else {
    console.log("Please input a valid ID.");
  }
}

// Function to mark a task as completed
function markToDoItemAsCompleted(todoId) {
  if (Number.isInteger(todoId) && todoId > 0) {
    let found = false;

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === todoId) {
        todoItems[i].completed = true;
        found = true;
        console.log("Successfully marked as completed.");
      }
    }

    if (!found) {
      console.log("Could not find a todo with that ID.");
    }
  } else {
    console.log("Please use a number.");
  }
}

// Function to delete a task from the array
function deleteToDoItem(todoId) {
  if (Number.isInteger(todoId) && todoId > 0) {
    console.log("Item deleted.");
    let goneArray = [];
    let removed = false;

    for (let i = 0; i < todoItems.length; i++) {
      if (todoItems[i].id === todoId) {
        console.log("Successfully removed.");
        removed = true;
      } else {
        goneArray.push(todoItems[i]);
      }
    }

    if (!removed) {
      console.log("Could not find a todo with that ID.");
    }

    todoItems = goneArray;
  } else {
    console.log("Please input a valid ID.");
  }
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  let completedTasks = [];

  for (let i = 0; i < todoItems.length; i++) {
    if (!todoItems[i].completed) {
      completedTasks.push(todoItems[i]);
    }
  }

  todoItems = completedTasks;
}

// Test the functions
addToDoItem("Attend team meeting");
addToDoItem("Prepare quarterly report");
removeToDoItem(1);
markToDoItemAsCompleted(2);
deleteToDoItem(3);
clearCompletedTasks();
console.log(todoItems);
