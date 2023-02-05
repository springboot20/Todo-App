let display = document.getElementById("display");
const todoInput = document.querySelector(".todoInput"),
  addBtn = document.getElementById('add-btn'),
  saveBtn = document.getElementById('save-btn'),
  saveInd = document.querySelector('.saveIndex');

const displayTodo = () => {
  let todos = localStorage.getItem("todos");
  let todoItems;
  if (todos === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(todos);
  }
  console.log(todos)
  todoItems.forEach((todo, ind) => {
    const newRow = document.createElement('tr');
    const index = document.createElement('td');
    const todoTxt = document.createElement('td');
    const actions = document.createElement('td');

    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    editBtn.innerHTML = "<i class='fa fa-edit'></i>";
    editBtn.className = 'btn btn-warning editBtn';

    deleteBtn.innerHTML = "<i class='fa fa-trash'></i>";
    deleteBtn.className = 'btn btn-danger deleteBtn mx-3';


    index.className = 'fw-bold fs-5'
    index.innerHTML = `${ind}`;

    todoTxt.className = 'fw-bold fs-6'
    todoTxt.innerHTML = `${todo}`;

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    newRow.appendChild(index)
    newRow.appendChild(todoTxt);
    newRow.appendChild(actions);

    display.appendChild(newRow);

    editBtn.addEventListener('click', () => {
      handleEdit(`${ind}`)
    })
    deleteBtn.addEventListener('click', () => {
      handleDelete(`${ind}`)
    })
  });
};

function handleDelete(ind) {
  let todos;
  let del = confirm('Are you sure you want to delete this todo ?....')
  if (del) {
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
  }

  todos.splice(ind, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  display.innerHTML = '';
  console.log(todos);

  displayTodo();
}

function handleEdit(ind) {
  saveInd.value = ind
  let todos = JSON.parse(localStorage.getItem('todos'));

  todoInput.value = todos[ind];
  addBtn.style.display = 'none'
  saveBtn.style.display = 'block'
}

const handleSaveTodo = () => {
  let todos = JSON.parse(localStorage.getItem('todos'));
  let id = saveInd.value;

  todos[id] = todoInput.value;

  addBtn.style.display = 'block';
  saveBtn.style.display = 'none';

  localStorage.setItem('todos', JSON.stringify(todos));
  todoInput.value = '';
  display.innerHTML = '';
  displayTodo()
}
saveBtn.addEventListener('click', () => {
  handleSaveTodo()
})
export default displayTodo;
