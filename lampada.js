const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


function isLampBroken (){

return lamp.src.indexOf ('quebrada') > -1

}

/*procura se a lampada vai estar quebrada e trazer um resultado verdadeiro ou falso,
dessa forma anulando as outras funcoes caso esteja quebrada*/


function lampOn (){
    if (!isLampBroken ()){ 

    lamp.src = './ligada.jpg';  
}
}

//a exclamacao serve como sinal de negacao, ou seja, "se a lampada nao estiver quebrada"

 function lampOff (){
    if (!isLampBroken ()){

lamp.src = './desligada.jpg';

 }
 }

function lampBroken(){

lamp.src = './quebrada.jpg';

}

//a exclamacao serve como sinal de negacao, ou seja, "se a lampada nao estiver quebrada"



turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
