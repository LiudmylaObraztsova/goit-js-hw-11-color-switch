import './sass/main.scss';
import { randomIntegerFromInterval } from './random-integer';
import { colors } from './colors';

// console.log('colors[1] :>> ', colors[1]);

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="start"]'),
    body: document.querySelector('body'),
}
let changeColorId;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

const newRandomColor = () =>
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];


function onStartBtnClick(e) {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    changeColorId = setInterval(newRandomColor, 1000);
}

function onStopBtnClick(e) {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(changeColorId )
}
// console.log('refs.startBtn :>> ', refs.startBtn);

