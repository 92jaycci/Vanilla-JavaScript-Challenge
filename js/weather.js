const weather = document.querySelector(".js-weather");
const API_KEY = "47d66c96d4ddd3d655cf5b793f54c2c2";
const COORDS = "coords";

function getWeather(lat, lng)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
    .then(function(response)
    {
        return response.json();
    })
    .then(function(json)
    {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function SaveCoords(coordsObj)
{
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function HandleGeoSucces(position)
{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = 
    {
        latitude,
        longitude
    };
    //console.log(Position);
    SaveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function HandleGeoError()
{
    console.log("Cant acces geo Location")
} 

function AskForCoords()
{
    navigator.geolocation.getCurrentPosition(HandleGeoSucces, HandleGeoError);
}

function LoadCoords()
{
    const loadCoords = localStorage.getItem(COORDS);

    if(loadCoords === null) //-- 저장된값이 없다
    {
        AskForCoords();
    }
    else
    {
        const parseCoords = JSON.parse(loadCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }


}

function Init()
{
    LoadCoords();
}

Init();