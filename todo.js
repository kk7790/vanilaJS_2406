const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY="todos";
let toDos = [];

function saveToDos(){
    //localStorage는 배열 저장 못함 ㅠㅠ
    //그래서 JSON.stringify로 스트링으로 바꿔주는걸 써야 저장이 가능함.
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    //event의 target을 찍으면 어떤 태그 안에 있는지 알 수 았음
    //parentElement로 이벤트 타겟의 값을 확인할 수 있음.  
    // console.log(event.target.parenElement);

    const li = event.target.parentElement;
    li.remove();

    //filter함수는 forEach와 비슷함
    //배열에서 뭔가 지울때 filter를 사용해서 해당 배열을 복사해, 새 배열을 만드는 방법밖에 없는거임..
    //!== 같은 비교는 숫자형만 가능. 아래도 id가 string으로 저장되니 int로 변환해야함
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    li.className="listStyle";
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//item은 어떤 아이템이 처리되는지도 알려줌. 이 item은 localStorage의 아이템인듯
// function sayHello(item){
//     console.log("aaa",item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //배열의 각각 아이템에게..
    // parsedToDos.forEach(sayHello);
    //forEach쓰는건 위랑 똑같음. 단지 이게 함수를 더 줄여주지.. 
    parsedToDos.forEach(paintToDo);
}


