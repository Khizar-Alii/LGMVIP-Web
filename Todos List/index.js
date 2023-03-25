const inputt = document.getElementById('todos') 
const addTodoBtn = document.getElementById('btn')
const ul = document.getElementById('myUl')
const itemInTodo = []
// const todos = JSON.parse(localStorage.getItem('todos',undefined,4))||[];


// todos.forEach(function(todo){
//   if(todo.length > 1){

//     let li = document.createElement('li')
//     li.className = "list-item"
//     li.textContent = todo
//     ul.appendChild(li)
//   }
// })


// Add todo item

addTodoBtn.addEventListener('click',function(){
  const todo = inputt.value
  if(inputt.value ===''){
    alert("Write Something To Add Todo")
  }
  else{
  const li = document.createElement('li')
  ul.appendChild(li)
  li.innerHTML = todo;
  li.className = 'list-item';
  itemInTodo.push(li)
  // todos.push(todo)
  // localStorage.setItem('todos',JSON.stringify(todos))


  // creating remove button for new array Element

  const removeBtn = document.createElement('button');
  removeBtn.id = 'removeBTN'
  removeBtn.textContent = 'Remove'
  li.appendChild(removeBtn)

  //removing todo-item for newly remove button
  removeBtn.addEventListener('click',function(){
    ul.removeChild(li)
    const index = listItem.indexOf(todo)
    if(index>-1){
      listItem.splice(index,1)
      // localStorage.setItem('todos', JSON.stringify(todos));
    }
  })
  li.addEventListener('click',function(){
      this.classList.toggle('checked')    
  })
}
inputt.value = ''
})


// to add a remove button
// const listItem = (document.getElementsByClassName("list-item"));
const listItem = Array.from(document.getElementsByClassName("list-item"));
for (let i = 0; i < listItem.length; i++) {
  let removeBtn = document.createElement("button");
  removeBtn.textContent = 'Remove'
  removeBtn.id = "removeBTN";
  listItem[i].appendChild(removeBtn);
  
  

  //removing todo from existing remove button
  removeBtn.addEventListener('click',function(){
    ul.removeChild(this.parentNode)
  })
  
  listItem[i].addEventListener('click',function(){
    this.classList.toggle('checked');
  })
}
