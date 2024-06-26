let scene, camera, renderer, ball;
let currentPosition = { x: 0, y: 0, z: 0 };

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    const geometry = new THREE.SphereGeometry(0.2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    ball = new THREE.Mesh(geometry, material);
    scene.add(ball);

    updateBallPosition();

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function updateBallPosition() {
    ball.position.set(currentPosition.x, currentPosition.y, currentPosition.z);
    document.getElementById('position').textContent = `(${currentPosition.x.toFixed(1)}, ${currentPosition.y.toFixed(1)}, ${currentPosition.z.toFixed(1)})`;
}

document.getElementById('positionForm').addEventListener('submit', function (event) {
    event.preventDefault();
    currentPosition.x = parseFloat(document.getElementById('x').value);
    currentPosition.y = parseFloat(document.getElementById('y').value);
    currentPosition.z = parseFloat(document.getElementById('z').value);
    updateBallPosition();
});

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
