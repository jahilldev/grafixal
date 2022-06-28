import { h } from 'preact';
import * as actions from '@/actions';
import style from './index.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  sceneActions: typeof actions;
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
