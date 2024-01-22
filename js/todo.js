const toDoForm = document.querySelector("#todo-form"); //document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list"); //document.getElementById("todo-list");


function deleteToDo(event){ //List가 만들어지면 어떤 버튼이 눌렸는지 알 수 없음. 따라서
    const li = event.target.parentElement; //이벤트가 생길 때의 target(=button)의 부모를 찾음.
    li.remove(); // 제거
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span"); // toDo를 지우는 것을 쉽게하기 위해 span으로 생성
    span.innerText = newTodo;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span); // 자녀로 상속함
    li.appendChild(btn);
    toDoList.appendChild(li); // html에 ul태그의 자녀로 상속됨.
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);