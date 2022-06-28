import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

/* -----------------------------------
 *
 * Variables
 *
 * -------------------------------- */

const scene = new Scene();
let canvasElement: HTMLCanvasElement;
let renderer: WebGLRenderer;
let camera: PerspectiveCamera;
let isPaused = false;

/* -----------------------------------
 *
 * Setup
 *
 * -------------------------------- */

function setup(canvas: HTMLCanvasElement) {
  canvasElement = canvas;

  scene.background = new Color('black');

  const fov = 35; // Field of view
  const aspect = canvasElement.clientWidth / canvasElement.clientHeight;
  const near = 0.1; // Near clipping plane
  const far = 100; // Far clipping plane

  camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 10);

  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material);

  scene.add(cube);

  renderer = new WebGLRenderer({ canvas: canvasElement });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
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

  renderer.render(scene, camera);
  renderer.setSize(window.innerWidth, window.innerHeight);

  requestAnimationFrame(animate);
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { setup, start, stop };
