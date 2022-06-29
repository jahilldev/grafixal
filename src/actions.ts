import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import { onResize } from '@/utility/canvasHelper.utility';

/* -----------------------------------
 *
 * Variables
 *
 * -------------------------------- */

const scene = new Scene();
let renderer: WebGLRenderer;
let camera: PerspectiveCamera;
let spinningCube: Mesh;
let isPaused = false;

/* -----------------------------------
 *
 * Setup
 *
 * -------------------------------- */

function setup(canvas: HTMLCanvasElement) {
  scene.background = new Color('black');

  const fieldOfView = 35;
  const aspectRatio = window.innerWidth / window.innerHeight;
  const [nearPlane, farPlane] = [0.1, 100];

  camera = new PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
  camera.position.set(0, 0, 10);

  spinningCube = new Mesh(
    new BoxBufferGeometry(2, 2, 2),
    new MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
  );

  scene.add(spinningCube);

  renderer = new WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  window.addEventListener('resize', () => onResize(resize), false);
}

/* -----------------------------------
 *
 * Start
 *
 * -------------------------------- */

function start() {
  isPaused = false;

  animate();
}

/* -----------------------------------
 *
 * Start
 *
 * -------------------------------- */

function stop() {
  isPaused = true;
}

/* -----------------------------------
 *
 * Animate
 *
 * -------------------------------- */

function animate() {
  if (isPaused) {
    return;
  }

  requestAnimationFrame(animate);

  spinningCube.rotation.x += 0.008;
  spinningCube.rotation.y += 0.008;

  renderer.render(scene, camera);
}

/* -----------------------------------
 *
 * Resize
 *
 * -------------------------------- */

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { setup, start, stop, resize };
