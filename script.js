const d = document;

(()=>{
  const btn = d.querySelector('[data-form-btn]');
  const createTask = (evento)=>{
      evento.preventDefault();    const input = d.querySelector('[data-form-input]');
      const value = input.value;
      const list = d.querySelector("[data-list]")
      const task = d.createElement("li")
      task.classList.add("card")
      input.value = ''; 
      const taskContent = d.createElement("div");
      taskContent.appendChild(checkComplete( ));
      const titleTask = d.createElement('span');
      titleTask.classList.add("task");
      titleTask.innerText = value; 
      taskContent.appendChild(titleTask);

      const content = ` 
      <span class="task">${value}</span>
      <i class="fas fa-trash-alt trashIcon icon"></i>`;
      /* task.innerHTML = content;   */
      task.appendChild(taskContent) 
      list.appendChild(task)
      }


    btn.addEventListener('click', createTask);

  const checkComplete = ()=>{
    const i = d.createElement('i');
    i.classList.add("far")
    i.classList.add("fa-check-square")
    i.classList.add("icon")
    i.addEventListener("click", completeTask);
    return i;
  };

  const completeTask = (event)=>{
    const element = event.target;
    element.classList.toggle("fa");
    element.classList.toggle("completeIcon")
    element.classList.toggle("far")
  } 
})();