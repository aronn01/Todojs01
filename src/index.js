import './styles.css';

import { Todo, TodoList } from './classes';
import { creaTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender javascript');

// // todoList.nuevoTodo(tarea);

// creaTodoHtml(tarea);

// // setTimeout(() => {
// //   localStorage.removeItem('mi-key');
// // }, 1500);

todoList.todos.forEach(creaTodoHtml);

// const newTodo = new Todo('aprender javascroipt');

// todoList.nuevoTodo(newTodo);
// todoList.todos[1].imprimirclase();

// console.log('todos', todoList.todos);
