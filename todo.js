// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "hey there",
    completed: false,
  },
];

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};
const populateTodos = () => {
  let TODO = 7arrayOfTodos.map((todo) => {
    let orderedList = document.getElementById("todo-list");
    let listItems = document.createElement("li");
    const titleToDo = todo.title;
    // console.log(titleToDo);
    listItems.innerHTML = `${titleToDo}`;
    orderedList.appendChild(listItems);
  });
};
// populateTodos();

// let i = "";
// for (let i = 0; i < arrayOfTodos.length; i++)
