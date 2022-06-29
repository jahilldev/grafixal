import { Mesh, IcosahedronGeometry, MeshBasicMaterial } from 'three';

/* -----------------------------------
 *
 * Mesh
 *
 * -------------------------------- */

const spinningHedron = new Mesh(
  new IcosahedronGeometry(1, 1),
  new MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
);

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { spinningHedron };
