class t{static fromJson({id:e,tarea:o,completado:a,creado:l}){let d=new t(o);return d.id=e,d.completado=a,d.creado=l,d}constructor(t){this.tarea=t,this.id=new Date().getTime()/12312311,this.completado=!1,this.creado=new Date}}//Referencias en el HTML
const e=document.querySelector(".todo-list"),o=document.querySelector(".new-todo"),a=document.querySelector(".clear-completed"),l=document.querySelector(".filters"),d=document.querySelectorAll(".filtro"),s=document.querySelector(".todo-count"),r=t=>{let o=`<li class="${t.completado?"completed":""}" data-id="${t.id}">
    <div class="view">
      <input class="toggle" type="checkbox" ${t.completado?"checked":""}>
      <label>${t.tarea}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li> `,a=document.createElement("div");//  **********
return a.innerHTML=o,e.append(a.firstElementChild),//********** */
//to know how many of pendients has
s.firstChild.textContent=i.contarCompletados(),a.firstElementChild};//eventos
o.addEventListener("keyup",e=>{if(13===e.keyCode&&o.value.length>0){// console.log(txtInput.value);
let e=new t(o.value);i.nuevoTodo(e),r(e),o.value="",//to know how many of pendients has
s.firstChild.textContent=i.contarCompletados();//  **********
// console.log(todoList);
}}),e.addEventListener("click",t=>{let o=t.target.localName,a=t.target.parentElement.parentElement,l=a.getAttribute("data-id");// input , label, button
o.includes("input")?(i.marcarCompletado(l),a.classList.toggle("completed"),//to know how many of pendients has
s.firstChild.textContent=i.contarCompletados()):o.includes("button")&&(i.eliminarTodo(l),e.removeChild(a))}),a.addEventListener("click",()=>{i.eliminarCompletados();for(let t=e.children.length-1;t>=0;t--){let o=e.children[t];o.classList.contains("completed")&&e.removeChild(o);// console.log(elemento);
}}),l.addEventListener("click",t=>{// console.log(event.target.text); // nombre de los botones
let o=t.target.text;if(o)// console.log(event.target);
for(let a of(d.forEach(t=>t.classList.remove("selected")),t.target.classList.add("selected"),e.children)){a.classList.remove("hidden");let t=a.classList.contains("completed");switch(o){case"pending":t&&a.classList.add("hidden");break;case"Completes":t||a.classList.add("hidden")}}});const i=new class{constructor(){// this.todos = [];
this.cargarLocalStorage()}nuevoTodo(t){this.todos.push(t),this.guardarLocalStorage()}eliminarTodo(t){this.todos=this.todos.filter(e=>e.id!=t),this.guardarLocalStorage()}marcarCompletado(t){for(let e of this.todos)if(e.id==t){e.completado=!e.completado,this.guardarLocalStorage();break}}eliminarCompletados(){this.todos=this.todos.filter(t=>!t.completado),this.guardarLocalStorage()}guardarLocalStorage(){localStorage.setItem("todo",JSON.stringify(this.todos))}cargarLocalStorage(){// if (localStorage.getItem('todo')) {
//   this.todos = JSON.parse(localStorage.getItem('todo'));
// } else {
//   this.todos = [];
// }
this.todos=JSON.parse(localStorage.getItem("todo"))?JSON.parse(localStorage.getItem("todo")):this.todos=[],this.todos=this.todos.map(t.fromJson)}contarCompletados(){let t=this.todos.filter(t=>!t.completado);return t.length}};// const tarea = new Todo('Aprender javascript');
// // todoList.nuevoTodo(tarea);
// creaTodoHtml(tarea);
// // setTimeout(() => {
// //   localStorage.removeItem('mi-key');
// // }, 1500);
i.todos.forEach(r);// const newTodo = new Todo('aprender javascroipt');
// todoList.nuevoTodo(newTodo);
// todoList.todos[1].imprimirclase();
// console.log('todos', todoList.todos);
//# sourceMappingURL=index.2ca4869b.js.map

//# sourceMappingURL=index.2ca4869b.js.map
