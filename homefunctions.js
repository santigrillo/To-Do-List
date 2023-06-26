//HOME//

const taskInput = document.getElementById("taskInput");   //Descripcion de tarea.
const taskList = document.getElementById("taskList");     //Lista de tareas.

function addTask(){
    if (taskInput.value == ''){
      alert("Falta ingresar la tarea.");
    }else{
      let li = document.createElement('li');
      li.innerHTML = taskInput.value;
      taskList.appendChild(li);

      let del = document.createElement('span');
      del.innerHTML = "\u00d7";
      li.appendChild(del);
      saveData();
    }
    taskInput.value = '';    
}

taskList.addEventListener('click', function(event){
  if(event.target.tagName === "LI"){
    event.target.classList.toggle("cheked");
    saveData();
  } else if(event.target.tagName === "SPAN"){
    event.target.parentNode.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", taskList.innerHTML);
}

function showTasks(){
  taskList.innerHTML = localStorage.getItem("data");
}

showTasks();
