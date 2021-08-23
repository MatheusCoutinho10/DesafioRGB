window.addEventListener('load', iniciar);

let inputCurrentPosicao1 = document.getElementById('inputCurrentPosicao1');
let inputCurrentPosicao2 = document.getElementById('inputCurrentPosicao2');
let inputCurrentPosicao3 = document.getElementById('inputCurrentPosicao3');
let rangePosicao1 = document.getElementById('rangePosicao1');
let rangePosicao2 = document.getElementById('rangePosicao2');
let rangePosicao3 = document.getElementById('rangePosicao3');

function iniciar(){
    rangePosicao1.addEventListener('input', handle);
    rangePosicao2.addEventListener('input', handle);
    rangePosicao3.addEventListener('input', handle);
}

function handle(){
    inputCurrentPosicao1.value = rangePosicao1.value;
    inputCurrentPosicao2.value = rangePosicao2.value;
    inputCurrentPosicao3.value = rangePosicao3.value;
    findRGB(rangePosicao1.value, rangePosicao2.value, rangePosicao3.value)
}

function findRGB(){
    var setRed = rangePosicao1.value;
    var setGreen = rangePosicao2.value;
    var setBlue = rangePosicao3.value;
    var color = 'rgb('+setRed+','+setGreen+','+setBlue+')';
    var minhaDiv = document.getElementById('divCor');
        
    minhaDiv.style.background = color;
}