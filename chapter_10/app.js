const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const trashIcon = document.querySelectorAll('i');
const searchTodos = document.querySelector('.search input');

const generateTemplate = todo => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
}

const filterTodos = (term) => { 
    
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered')); 

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));        
}

// remove todo
list.addEventListener('click', e => {
    
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    
})

// add todo

addForm.addEventListener('submit', e => {
    
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }    
});

// search todos

searchTodos.addEventListener('keyup', () => {
    
    const term = searchTodos.value.toLowerCase().trim();
    filterTodos(term);
    
})



