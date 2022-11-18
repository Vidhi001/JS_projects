const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const button = document.querySelector('.btn');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clear = document.querySelector('.clear-tasks');


loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit' , addTask);
  taskList.addEventListener('click' , remove);
  clear.addEventListener('click' , clearTasks)
  filter.addEventListener('keyup' , filterTasks)

}

function addTask(e) {
  if( taskInput.value === '') {
    alert('Add Message');
  } else {
    const li = document.createElement('li');
  li.className = 'collection-item';
 
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
  li.appendChild(link);
  taskList.appendChild(li);
  storeTaskToLocalStorage();
  taskInput.value = '';
  }

  e.preventDefault();

}

function remove(e) {
  if(e.target.parentElement.classList.contains('delete-item'))  
  {
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
        
  }
     
}

function clearTasks() {
  // if(taskList.innerHTML != '') {
  //   taskList.innerHTML='';
  // }

  while(taskList.firstChild) {
    taskList.firstChild.remove();
  }
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
    
  document.querySelectorAll('.collection-item').forEach(function(task) {
    const liTask = task.firstChild.
      textContent;
    if( liTask.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
  
    } else {
      task.style.display = 'none';
    }
  });
}

function storeTaskToLocalStorage(value) {
  
}

