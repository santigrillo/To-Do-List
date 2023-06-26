

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

window.addEventListener("keydown", (e)=>{
  if (e.keyCode=== 13){
    addTask();
  }
})

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


//FULL WIDTH //
const fullwidhtmode = document.getElementById('fullwidthmode');

fullwidhtmode.addEventListener("click", ()=>{
  document.getElementById('taskList').classList.toggle('fullWidhtMode');
  document.getElementById('main').classList.toggle('fullWidhtMode');
})


