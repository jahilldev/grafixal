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

function Overlay(props: IProps) {
  console.log('Overlay()', props);

  return <div class={style.wrapper}>OVERLAY</div>;
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Overlay };
