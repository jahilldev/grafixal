/* -----------------------------------
 *
 * Variables
 *
 * -------------------------------- */

let canvasElement: HTMLCanvasElement;

/* -----------------------------------
 *
 * onResize
 *
 * -------------------------------- */

function onResize(canvas) {
  if (!canvasElement) {
    return;
  }

  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;
}

/* -----------------------------------
 *
 * Canvas
 *
 * -------------------------------- */

function createCanvas(elementId = __CANVAS__) {
  canvasElement = document.createElement('canvas');

  canvasElement.id = elementId;
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;
  canvasElement.style.width = '100%';
  canvasElement.style.height = '100%';

  window.addEventListener('resize', () => onResize(canvasElement));

  return canvasElement;
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { createCanvas };
