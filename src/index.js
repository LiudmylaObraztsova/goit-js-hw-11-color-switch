import './sass/main.scss';

import colors from './colors';
import randomIntegerFromInterval from './random-integer';


console.log('colors[1] :>> ', colors[1]);

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="start"]'),
    body: document.querySelector('body'),
}
let changeColorId=null;

const newRandomColor = () =>
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    


function onStartBtnClick() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    changeColorId = setInterval(newRandomColor, 1000);
}

function onStopBtnClick() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(changeColorId )
}
// console.log('refs.startBtn :>> ', refs.startBtn);

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);