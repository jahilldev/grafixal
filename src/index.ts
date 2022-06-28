import { h, render } from 'preact';
import { createCanvas } from '@/utility/createCanvas.utility';
import { Overlay } from '@/overlay';
import '@/styles/global.scss';

// https://vimeo.com/125095515
console.log('💫 Do it, just do it');

/* -----------------------------------
 *
 * Variables
 *
 * -------------------------------- */

const rootElement = document.querySelector(OVERLAY);
const canvasElement = createCanvas();

/* -----------------------------------
 *
 * Application
 *
 * -------------------------------- */

document.body.prepend(canvasElement);
render(h(Overlay, { canvasElement }), rootElement!);
