import { h } from 'preact';
import style from './index.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  canvasElement: HTMLCanvasElement;
}

/* -----------------------------------
 *
 * Application
 *
 * -------------------------------- */

function Overlay({ canvasElement }: IProps) {
  console.log('Overlay()', { canvasElement });

  return <div class={style.wrapper}>OVERLAY</div>;
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Overlay };
