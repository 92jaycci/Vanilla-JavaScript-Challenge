const form = document.querySelector(".js-form"),
input =  form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS= "currentUser",
    SHOWING_CN = "showing";

function SaveName(text)
{
  localStorage.setItem(USER_LS, text);
}

function HandleSubmit(event)
{
   event.preventDefault();
   const currentValue = input.value;
   //console.log(currentValue);
   PaintGreeting(currentValue);
   SaveName(currentValue);
}

function AskForName()
{
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", HandleSubmit);
}

function PaintGreeting(text)
{
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}


function LoadName()
{
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser == null)
    {
        AskForName();
    }
    else
    {
        PaintGreeting(currentUser);
    }
}

function Init()
{
    LoadName();
}

Init();

