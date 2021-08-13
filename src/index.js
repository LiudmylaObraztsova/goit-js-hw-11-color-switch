import './sass/main.scss';
import { colors } from './colors'

// console.log('colors[1] :>> ', colors[1]);

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn:document.querySelector('button[data-action="start"]'),
}

// console.log('refs.startBtn :>> ', refs.startBtn);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//  <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>