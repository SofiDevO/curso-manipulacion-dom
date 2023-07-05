const d = document;
import checkComplete from  "./components/checkComplete.js"
import deleteIcon from "./components/deleteIcon.js"

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
      
      /* task.innerHTML = content;   */
      task.appendChild(taskContent) 
      task.appendChild(deleteIcon()) 
      list.appendChild(task)
      }




    btn.addEventListener('click', createTask);

})();