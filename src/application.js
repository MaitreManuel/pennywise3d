import * as THREE from 'three';
import threeOrbitControls from './utils/OrbitControls';
import Stats from 'stats.js';

import './style.css';

const OrbitControls = threeOrbitControls(THREE);

const stats = new Stats();
document.body.appendChild(stats.dom);

// scene, renderer, camera, mesh(geometry + material)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domEvent);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    'color': 'red',
});
const mesh = new THREE.Mesh(geometry, material);

camera.position.z = 10;
scene.add(mesh);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const animate = () => {
    stats.begin();
    renderer.render(scene, camera);
    stats.end();
    requestAnimationFrame(animate);
};

animate();
