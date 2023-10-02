//Referencias en el HTML

import { Todo, TodoList } from '../classes';
import { todoList } from '../index';

const divTodoList = document.querySelector('.todo-list');

const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');

const ulFiltors = document.querySelector('.filters');

const anchorFiltros = document.querySelectorAll('.filtro');
const todoCount = document.querySelector('.todo-count');

export const creaTodoHtml = (todo) => {
  const htmlTodo = `<li class="${
    todo.completado ? 'completed' : ''
  }" data-id="${todo.id}">
    <div class="view">
      <input class="toggle" type="checkbox" ${todo.completado ? 'checked' : ''}>
      <label>${todo.tarea}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li> `;

  const div = document.createElement('div');

  div.innerHTML = htmlTodo;

  divTodoList.append(div.firstElementChild);

  //********** */
  //to know how many of pendients has
  todoCount.firstChild.textContent = todoList.contarCompletados();

  //  **********
  return div.firstElementChild;
};

//eventos

txtInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    // console.log(txtInput.value);

    const nuevoTodo = new Todo(txtInput.value);

    todoList.nuevoTodo(nuevoTodo);

    creaTodoHtml(nuevoTodo);
    txtInput.value = '';

    //to know how many of pendients has
    todoCount.firstChild.textContent = todoList.contarCompletados();

    //  **********
    // console.log(todoList);
  }
});

divTodoList.addEventListener('click', (event) => {
  const nombreElemento = event.target.localName; // input , label, button

  const todoElemento = event.target.parentElement.parentElement;

  const todoId = todoElemento.getAttribute('data-id'); // get atribute

  if (nombreElemento.includes('input')) {
    // click en el check

    todoList.marcarCompletado(todoId);
    todoElemento.classList.toggle('completed');
    //to know how many of pendients has
    todoCount.firstChild.textContent = todoList.contarCompletados();

    //  **********
  } else if (nombreElemento.includes('button')) {
    todoList.eliminarTodo(todoId);
    divTodoList.removeChild(todoElemento);
  }
});

btnBorrar.addEventListener('click', () => {
  todoList.eliminarCompletados();

  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const elemento = divTodoList.children[i];

    if (elemento.classList.contains('completed')) {
      divTodoList.removeChild(elemento);
    }

    // console.log(elemento);
  }
});

ulFiltors.addEventListener('click', (event) => {
  // console.log(event.target.text); // nombre de los botones

  const filtro = event.target.text;
  if (!filtro) {
    return;
  }

  anchorFiltros.forEach((elem) => elem.classList.remove('selected'));
  event.target.classList.add('selected');
  // console.log(event.target);

  for (const elemento of divTodoList.children) {
    elemento.classList.remove('hidden');
    const completado = elemento.classList.contains('completed');

    switch (filtro) {
      case 'pending':
        if (completado) {
          elemento.classList.add('hidden');
        }
        break;
      case 'Completes':
        if (!completado) {
          elemento.classList.add('hidden');
        }
        break;
    }
  }
});
