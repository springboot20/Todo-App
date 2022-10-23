let display = document.getElementById("display");

const displayTodo = (todos, todoItems) => {
  let row = document.createElement("tr");
  todos = localStorage.getItem("todos");

  if (todos === null) {
    todoItems = [];
  } else {
    todoItems = JSON.parse(todos);
  }

  todoItems.forEach((todo, ind) => {
    row.innerHTML = `
          <td>${ind}</td>
          <td class='bg-primary'>${todo}</td>
          <td>
               <button type='button' class='btn btn-danger deleteBtn'><i class='fa fa-trash'></i></button>
          </td>
     `;

    row
      .querySelector(".deleteBtn")
      .addEventListener("click", (todos, todoItems) => {
        (todos = localStorage.getItem("todos")),
          (todoItems = JSON.parse(todos));
        todoItems.splice(ind, 1);
        localStorage.setItem("todos", JSON.stringify(todoItems));
        row.innerHTML = " ";
      });
  });

  display.appendChild(row);
};
export default displayTodo;
