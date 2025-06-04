import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const canvas = document.querySelector("#model-viewer");

const sizes = {
  width: canvas.clientWidth,
  height: canvas.clientHeight,
};
// Создаем сцену
const scene = new THREE.Scene();

// Создаем камеру
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.x = 1.3;
camera.position.y = 1;
camera.position.z = 2.4;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(2, 2, 5);
scene.add(directionalLight);

const loader = new GLTFLoader();
let model;
loader.load("./box.glb", function (gltf) {
  model = gltf.scene;
  scene.add(gltf.scene);
});
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enablePan = false;
controls.dampingFactor = 0.05;
controls.autoRotate = false;
controls.minPolarAngle = Math.PI / 4;
controls.maxPolarAngle = Math.PI / 1.5;

let isUserInteracting = false;
renderer.domElement.addEventListener("mousedown", () => {
  isUserInteracting = true;
});

renderer.domElement.addEventListener("mouseup", () => {
  isUserInteracting = false;
});

renderer.domElement.addEventListener("mouseleave", () => {
  isUserInteracting = false;
});

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const elapsedTime = clock.getElapsedTime();

  if (model) {
    model.rotation.y = -Math.sin(elapsedTime * 0.1) * 0.1;
    model.rotation.x = Math.sin(elapsedTime * 0.05) * 0.05;
  }

  if (!isUserInteracting) {
    controls.target.lerp(new THREE.Vector3(0, 0, 0), 0.02);
    camera.position.lerp(new THREE.Vector3(1.3, 1, 2.4), 0.02);
  }

  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(sizes.width, sizes.height);
}

animate();
