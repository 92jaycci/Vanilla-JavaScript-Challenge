const body = document.querySelector("body");
const random = Math.random();
const IMG_NUMBER = 4;

function PaintImage(ImgNum)
{
    const img = new Image();
    img.src = `images/${ImgNum + 1}.jpg`;
    img.classList.add("backGroundImage");
    body.prepend(img);
}

function GenRandom()
{
    const number = Math.floor(random * IMG_NUMBER);
    console.log(number);

    return number;
}


function Init()
{
    const randomNumber =  GenRandom();
    PaintImage(randomNumber);
}

Init();
