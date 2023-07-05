const d = document;

const btn = d.querySelector('[data-form-btn]');
const createTask = (evento)=>{
    evento.preventDefault();    const input = d.querySelector('[data-form-input]');
    const value = input.value;
    const list = d.querySelector("[data-list]")
    const task = d.createElement("li")
    task.classList.add("card")
    input.value = ''; 
    const content = ` <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.innerHTML = content;  

  list.appendChild(task)
    console.log(content);
  }

  btn.addEventListener('click', createTask)


