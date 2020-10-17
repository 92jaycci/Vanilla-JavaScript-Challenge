const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];



function DeleteToDo(event)
{
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    
    const cleanToDos = toDos.filter(
    function(toDo)
    {
        console.log(toDo.id, parseInt(li.id));
        return toDo.id !== parseInt(li.id);
    });
    toDos =cleanToDos;
    SaveToDos();
}

function SaveToDos()
{
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function PaintToDo(text)
{
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", DeleteToDo);
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj =
    {
        text: text,
        id: toDos.length +1
    }

    toDos.push(toDoObj);
    SaveToDos();
}

function HandleSubmit(event)
{
    event.preventDefault();
    const currentValue = toDoInput.value;
    PaintToDo(currentValue);
    toDoInput.value = "";
}

function LoadToDos()
{
    const loadToDos = localStorage.getItem(TODOS_LS);
    if (loadToDos != null)
    {
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function(toDo)
        {
            PaintToDo(toDo.text);
        }
        );
    }
}

function Init()
{
    LoadToDos();
    toDoForm.addEventListener("submit", HandleSubmit);
}

Init();
