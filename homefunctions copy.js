// //// HOME ////
// const taskInput = document.getElementById('taskInput');
// const addButton = document.getElementById('addButton');
// const taskList = document.getElementById('taskList');

// addButton.addEventListener('click', addTask);

// function addTask() {
//   const taskText = taskInput.value;

//   if(taskText == ''){
//     alert("Ingrese tarea :).")
//   }


//   if (taskText !== '') {
//     const taskItem = document.createElement('li');
//     taskItem.addEventListener("click", markC);


//     const taskTextElement = document.createElement('span');
//     taskTextElement.className = 'taskText';
//     taskTextElement.textContent = taskText;

//     const deleteButton = document.createElement('img');
//     deleteButton.src = "/assets/delete.svg";
//     deleteButton.className = "imgdel";
//     deleteButton.addEventListener("click", deleteTask);
   
//     taskItem.appendChild(taskTextElement);
//     taskItem.appendChild(deleteButton);
//     taskList.appendChild(taskItem);

//     taskInput.value = '';
//   }
// }

// function deleteTask(event) {
//   const taskItem = event.target.parentNode;
//   taskList.removeChild(taskItem);
// }