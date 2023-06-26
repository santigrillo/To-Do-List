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


// Switch theme // 

const switchbutton = document.querySelector("#switchTheme");

switchbutton.addEventListener('click', ()=>{

  document.body.classList.toggle('lightTheme');
  
  const header = document.getElementById('head');
  header.classList.toggle('lightTheme');

  const dateheader = document.getElementById("dateheader");
  dateheader.classList.toggle('lightTheme');

  const welcomeBack = document.getElementById("welc");
  welcomeBack.classList.toggle('lightTheme');

  const items = document.querySelectorAll('li');
  for (let i = 0; i<items.length; i++){
    items[i].classList.toggle('lightTheme');
  }

  document.getElementById('taskInput').classList.toggle('lightTheme');
})

//FULL WIDTH //
const fullwidhtmode = document.getElementById('fullWidhtMode');

fullwidhtmode.addEventListener("click", ()=>{
  document.getElementById('taskList').classList.toggle('fullWidhtMode');
  document.getElementById('main').classList.toggle('fullWidhtMode');
})


