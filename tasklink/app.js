const form = document.querySelector('#task-form');
const typeTask = document.querySelector('.input-field');
const collection = document.querySelector('.collection');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {

  form.addEventListener('submit', addTask);
}

function addTask(e) {
  if(taskInput.value === '' ){
    alert('Add some Task');
  }

  e.preventDefault();

}
 