const d = document;

const btn = d.querySelector('[data-form-btn]');
const createTask = (evento)=>{
    evento.preventDefault();    const input = d.querySelector('[data-form-input]');
        console.log(input.value);
    }



btn.addEventListener('click', createTask)