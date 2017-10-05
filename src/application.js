import * as THREE from 'three';
import threeOrbitControls from './utils/OrbitControls';
import Stats from 'stats.js';
import Pennywise from './Pennywise';

import './style.css';

// attach orbit controls
const OrbitControls = threeOrbitControls(THREE);

// stats
const stats = new Stats();
document.body.appendChild(stats.dom);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({antialias: true});

// controls
const controls = new OrbitControls(camera, renderer.domEvent);

// lights
const light = new THREE.AmbientLight(0x8c8c8c);
scene.add(light);

const spotlight = new THREE.SpotLight(0xff9966);
spotlight.position.set(0, 150, -120);
spotlight.angle = 25 * (Math.PI / 180);
spotlight.castShadow = true;
spotlight.penumbra = 0.9;
spotlight.decay = 2;
spotlight.distance = 2000;

// floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(1000, 1000),
    new THREE.MeshPhongMaterial({
        color: 'grey',
        side: THREE.DoubleSide,
    }),
);

floor.position.set(10, -100, 10);
floor.rotation.x = Math.PI/2;
floor.receiveShadow = true;

const pennywise = Pennywise(THREE);

camera.position.z = 55;
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
document.body.appendChild( renderer.domElement );

// const spotlightHelper = new THREE.SpotLightHelper(spotlight);
// scene.add(spotlightHelper);

scene.add(spotlight);
scene.add(floor);
scene.add(pennywise);

const animate = () => {
    stats.begin();
    renderer.render(scene, camera);
    stats.end();
    requestAnimationFrame(animate);
};

animate();
