const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function GetTime()
{
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText =
    `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds  < 10 ? `0${seconds}`: `${seconds}`}`
    //clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function Init()
{
    GetTime();
    setInterval(GetTime, 1000);
}

Init();