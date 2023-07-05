const d = document;
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

export default checkComplete;