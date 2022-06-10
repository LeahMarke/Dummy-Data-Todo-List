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
  let orderedList = document.getElementById("todo-list");
  arrayOfTodos.forEach((todo) => {
    let listItems = document.createElement("li");
    const titleToDo = todo.title;
    // console.log(titleToDo);
    listItems.innerHTML = `${titleToDo}`;
    orderedList.appendChild(listItems);
  });
};
// num = num >= 1 && num <= 10;
let userID = (id) => {
  let orderedList = document.getElementById("todo-list-by-ID");
  let userIDGroup = arrayOfTodos.filter((todo) => {
    let listItems = document.createElement("li");
    let id = document.getElementById("quantity");
    let listByID = todo.id();
    listItems.innerHTML = `${listByID}`;
    orderedList.appendChild(listItems);
  });
};

//   let isComplete = arrayOfTodos.map((todo) => {
//     return todo.completed === true;
//   });
//   let isCompleteFilter = arrayOfTodos.filter((todo) => {
//     return todo.completed === true;
//   });
//   console.log(isComplete);
//   console.log(isCompleteFilter);
// };
